(function() {
  if (typeof window === 'undefined') return;
  
  const MATOMO_DOMAINS = ['matomo.lido.fi', 'matomo.testnet.fi'];
  initInterceptor(MATOMO_DOMAINS);
  
  function initInterceptor(domains) {
    const sentEvents = new Set();
    const EVENT_DEDUP_TIMEOUT = 1000;
    
    function isMatomoUrl(url) {
      try {
        const urlObj = new URL(url);
        return domains.some(domain => urlObj.hostname === domain) && url.includes('matomo.php');
      } catch {
        return false;
      }
    }
    
    function getCurrentPage() {
      return window.location.pathname;
    }
    
    function generateEventKey(category, action, name) {
      return category + ':' + action + ':' + (name || '');
    }
    
    function isDuplicateEvent(category, action, name) {
      return sentEvents.has(generateEventKey(category, action, name));
    }
    
    function markEventAsSent(category, action, name) {
      const eventKey = generateEventKey(category, action, name);
      sentEvents.add(eventKey);
      setTimeout(function() {
        sentEvents.delete(eventKey);
      }, EVENT_DEDUP_TIMEOUT);
    }
    
    function parseMatomoUrl(url) {
      try {
        const urlObj = new URL(url);
        const params = urlObj.searchParams;
        const currentPage = getCurrentPage();
        
        const actionName = params.get('action_name');
        const linkUrl = params.get('link');
        const downloadUrl = params.get('download');
        const eventCategory = params.get('e_c');
        const eventAction = params.get('e_a');
        
        if (linkUrl) {
          return {
            category: 'Link_Tracking',
            action: 'Outlink Click',
            name: decodeURIComponent(linkUrl),
            page: currentPage
          };
        }
        
        if (downloadUrl) {
          return {
            category: 'Download_Tracking',
            action: 'File Download',
            name: decodeURIComponent(downloadUrl),
            page: currentPage
          };
        }
        
        if (eventCategory && eventAction) {
          const eventName = params.get('e_n');
          return {
            category: decodeURIComponent(eventCategory),
            action: decodeURIComponent(eventAction),
            name: eventName ? decodeURIComponent(eventName) : undefined,
            page: currentPage
          };
        }
        
        if (actionName || params.has('rec')) {
          const hasPerformanceData = params.has('pf_net') || params.has('pf_srv') || params.has('pf_tfr');
          return {
            category: hasPerformanceData ? 'Page_View_Performance' : 'Page_View',
            action: 'Page Load',
            name: actionName ? decodeURIComponent(actionName) : (document.title || 'Unknown Page'),
            page: currentPage
          };
        }
        
        return null;
      } catch (error) {
        console.warn('Failed to parse Matomo URL:', error);
        return null;
      }
    }
    
    function sendMetricsToAPI(eventData) {
      fetch('/api/matomo-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      }).then(function(response) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status + ': ' + response.statusText);
        }
      }).catch(function(error) {
        console.error('❌ Failed to send early metrics to API:', error);
      });
    }
    
    function handleMatomoRequest(url) {
      const eventData = parseMatomoUrl(url);
      if (eventData && !isDuplicateEvent(eventData.category, eventData.action, eventData.name)) {
        markEventAsSent(eventData.category, eventData.action, eventData.name);
        sendMetricsToAPI(eventData);
      }
    }
    
    // Store original functions
    const originalFetch = window.fetch;
    const originalXMLHttpRequest = window.XMLHttpRequest;
    const originalSendBeacon = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
    
    // Intercept fetch
    window.fetch = function(input, init) {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
      if (isMatomoUrl(url)) {
        handleMatomoRequest(url);
      }
      return originalFetch.call(this, input, init);
    };
    
    // Intercept XMLHttpRequest
    window.XMLHttpRequest = function() {
      const xhr = new originalXMLHttpRequest();
      const originalOpen = xhr.open.bind(xhr);
      
      xhr.open = function(_method, url, ...args) {
        const urlString = typeof url === 'string' ? url : url.href;
        if (isMatomoUrl(urlString)) {
          handleMatomoRequest(urlString);
        }
        return originalOpen.apply(this, [_method, url].concat(args));
      };
      
      return xhr;
    };
    
    // Copy static properties
    Object.setPrototypeOf(window.XMLHttpRequest, originalXMLHttpRequest);
    Object.defineProperty(window.XMLHttpRequest, 'prototype', {
      value: originalXMLHttpRequest.prototype,
      writable: false
    });
    
    // Intercept sendBeacon
    if (originalSendBeacon) {
      navigator.sendBeacon = function(url, data) {
        const urlString = typeof url === 'string' ? url : url.href;
        if (isMatomoUrl(urlString)) {
          handleMatomoRequest(urlString);
        }
        return originalSendBeacon.call(navigator, url, data);
      };
    }
    
    // Store references for later cleanup
    window.__matomoInterceptorEarly = {
      originalFetch: originalFetch,
      originalXMLHttpRequest: originalXMLHttpRequest,
      originalSendBeacon: originalSendBeacon,
      initialized: true
    };
  }
})(); 