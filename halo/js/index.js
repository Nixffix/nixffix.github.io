// Reaction on click circle and edit text, picture and description

// const { event } = require("jquery");
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".intro__card").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      document.querySelectorAll(".intro__card p").forEach((item) => {
        item.style.color = "#fff";
      });
      document.querySelectorAll(".intro__card p")[i].style.color = "#00dffc";

      document.querySelector(".intro__picture").src = `images/icon${
        i + 1
      }-active.webp`;
      document.querySelector(".intro__name").textContent =
        document.querySelectorAll(".intro__card p")[i].textContent;

      document.querySelectorAll(".intro__card img").forEach((item, i) => {
        item.src = `images/icon${i + 1}.webp`;
      });
      document.querySelectorAll(".intro__card img")[i].src = `images/icon${
        i + 1
      }-active.webp`;

      if (i == 0) {
        document.querySelector(".intro__text").textContent =
          "Building structures on Planet and Asteroid NFTs is the core activity of the economic simulation. Buildings cost tokenised resources to build, and different buildings generate different resources daily. They are key to any strategy to maximise resource production and profits for players, providing a reliable income of tokens on a daily basis. For details of the buildings available please see the chapter Buildings [link to chapter] later in this whitepaper. Planets and Asteroids are NFT collections; players will need to own Planets and / or Asteroids to be able to build buildings on them and develop their worlds.";
      } else if (i == 1) {
        document.querySelector(".intro__text").textContent =
          "Staking is another reliable method of generating income for players. There are 17 supported NFT collections that can be staked for passive daily tokenised resources. These collections are outlined in the chapter Crew NFTs [link to the chapter]. Halo utilises soft-staking, this means the game simply reads your wallet address to verify you own NFTs, and then automatically starts generating daily rewards. The game contract does not actually interact with the NFTs in any way; this means that your NFTs are not “locked” into the game or contract, and your NFTs are always safe as the game operates by reading the wallet address only. Halo will also release its own Crew NFTs and Specialist NFTs. These Crew and Specialist NFTs will be much more useful for missions and resource generation than the other supported collections. Users can also stake their tokens in the Halo Nexus directly, receiving a share of 1% of all the funds flowing into the Halo Nexus wallet from all player purchases of ships and buildings in-game. All 15 tokens can also be staked for rewards in the DEX liquidity pools hosted by Halo for trading all tokenised resources.";
      } else if (i == 2) {
        document.querySelector(".intro__text").textContent =
          "All of the 22 ships in Halo except for the Micro Shuttle will be built by players. Ships can be used to run missions, as well as traded on the Halo Nexus NFT Marketplace. Later, in the Colonisation phase of development ships will be used to colonise planets in the Contested Space zone, participate in epic ship to ship battles, and to invade other players’ colonies that are situated in Contested Space.";
      } else if (i == 3) {
        document.querySelector(".intro__text").textContent =
          "Halo has 4 types of missions: Mining, Exploration, Social, and Combat. Ships can be loaded with crew NFTs (from the 17 supported collections and the Halo Crew and Specialist NFTs) and sent on missions. Players can choose to run missions for 30 minutes, 1 hour, 12 hours, 1 day, 3 days, 7 days and 28 days. At the end of the mission the player is rewarded with tokenised resources. The resources earned are based on the type of mission, the NFTs used, and on the ship used: the larger the ship the more NFTs can be sent on the mission, and the more resources that can be earned.";
      } else if (i == 4) {
        document.querySelector(".intro__text").textContent =
          "As an economic simulation Halo has many opportunities for trading. All the game’s currencies and resources can be traded against each other on the in-game DEX. The value of all the tokens will be set by players trading activity in the free markets. For a summary of all the 15 different tokenised resources please see the Tokenomics Chapter [link to chapter here]. Halo token will be traded on established DEXs on both Ethereum and Polygon at launch. Player built ships, as well as Asteroids and Planets, Crew and Specialist NFTs, and other supported NFTs, can also be traded directly to other players on the Halo Nexus NFT Marketplace. Well developed Planets and Asteroids will command a premium and be very valuable. Clever players will be able to earn from inefficiencies in the markets as well as selling developed Planets, Ships, and other NFTs: this meta game will be a lucrative activity in itself.";
      } else if (i == 5) {
        document.querySelector(".intro__text").textContent =
          "The Colonisation game update will also introduce PvP combat. Players can engage other players’ fleets in ship to ship combat, and also launch invasions of other players planets situated in Contested Space.";
      } else if (i == 6) {
        document.querySelector(".intro__text").textContent =
          "When the Colonisation phase of development launches in Q4 2024 players will be able to colonise planets in the Contested Space star map with Colony Ships. They will then be able to build buildings on these colonised planets to earn resources. However Contested Space lives up to its name, and planets situated in Contested Space can also be invaded by other players.";
      } else if (i == 7) {
        document.querySelector(".intro__text").textContent =
          "Exploration missions as described above earn players resources. Also when the Colonisation phase of development is completed in Q4 2024, players can send their ships to explore the Contested Space star map. Many wonders and resources await intrepid explorers, although there is also a risk to lose ships.";
      }
    });
  });

  // Slider in Blog

  const swiper = new Swiper(".blog__swiper", {
    speed: 500,
    autoHeight: false,
    slidesPerView: 4.5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".blog__next",
      prevEl: ".blog__prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1.3,
      },
      440: {
        slidesPerView: 2,
      },
      680: {
        slidesPerView: 3,
      },
      920: {
        slidesPerView: 3.5,
      },
      1100: {
        slidesPerView: 4.5,
      },
    },
  });

  // Slider in Blog

  const slider = new Swiper(".gallery__swiper", {
    speed: 500,
    loop: true,
    loopedSlides: 50,
    autoHeight: false,
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      680: {
        slidesPerView: 3,
      },
      1680: {
        slidesPerView: 5,
      },
    },
  });

  // Open modal auth

  document
    .querySelector(".first__button")
    .addEventListener("click", (event) => {
      if (localStorage.getItem("HaloAuthLogin") == null) {
        document.querySelector(".modal").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".modal").style.opacity = "1";
          setTimeout(() => {
            document.querySelector(".modal__body-login").style.top = "50%";
          }, 600);
        }, 100);
      } else {
        downloadFile();
      }
    });

  document.querySelectorAll(".modal__close").forEach((item) => {
    item.addEventListener("click", (event) => {
      document.querySelectorAll(".modal__body").forEach((item) => {
        item.style.top = "-100%";
        setTimeout(() => {
          document.querySelector(".modal").style.opacity = "0";
          setTimeout(() => {
            document.querySelector(".modal").style.display = "none";
          }, 300);
        }, 300);
      });
    });
    document.querySelectorAll(".modal__input").forEach((item) => {
      item.value = "";
    });
  });

  document.querySelector(".modal").addEventListener("click", (event) => {
    if (event.target === document.querySelector(".modal")) {
      document.querySelectorAll(".modal__body").forEach((item) => {
        item.style.top = "-100%";
        setTimeout(() => {
          document.querySelector(".modal").style.opacity = "0";
          setTimeout(() => {
            document.querySelector(".modal").style.display = "none";
          }, 300);
        }, 300);
      });
      document.querySelectorAll(".modal__input").forEach((item) => {
        item.value = "";
      });
      document.querySelector(".success").style.transform = "scale(0)";
    }
  });

  document
    .querySelector(".modal__subtitle-forgot")
    .addEventListener("click", (event) => {
      document.querySelector(".modal__body-login").style.top = "-100%";
      setTimeout(() => {
        document.querySelector(".modal__body-forgot").style.top = "50%";
      }, 600);
      document.querySelectorAll(".modal__input").forEach((item) => {
        item.value = "";
      });
    });

  document.querySelector(".modal__nope").addEventListener("click", (event) => {
    document.querySelector(".modal__body-login").style.top = "-100%";
    setTimeout(() => {
      document.querySelector(".modal__body-registration").style.top = "50%";
    }, 600);
    document.querySelectorAll(".modal__input").forEach((item) => {
      item.value = "";
    });
  });

  document
    .querySelectorAll(".modal__yep")[0]
    .addEventListener("click", (event) => {
      document.querySelector(".modal__body-registration").style.top = "-100%";
      setTimeout(() => {
        document.querySelector(".modal__body-login").style.top = "50%";
      }, 600);
      document.querySelectorAll(".modal__input").forEach((item) => {
        item.value = "";
      });
    });

  document
    .querySelectorAll(".modal__yep")[1]
    .addEventListener("click", (event) => {
      document.querySelector(".modal__body-forgot").style.top = "-100%";
      setTimeout(() => {
        document.querySelector(".modal__body-login").style.top = "50%";
      }, 600);
      document.querySelectorAll(".modal__input").forEach((item) => {
        item.value = "";
      });
    });

  // Functional inputs

  document
    .querySelector(".modal__body-login .modal__button")
    .addEventListener("click", (event) => {
      if (
        document.querySelector(".modal__body-login .modal__username").value ==
          "" ||
        document.querySelector(".modal__body-login .modal__username").value
          .length < 3
      ) {
        document.querySelector(
          ".modal__body-login .modal__username"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-login .modal__message"
        ).textContent = "Enter your username or e-mail";
        document.querySelector(
          ".modal__body-login .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-login .modal__username"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-login .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else if (
        document.querySelector(".modal__body-login .modal__password").value ==
        ""
      ) {
        document.querySelector(
          ".modal__body-login .modal__password"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-login .modal__message"
        ).textContent = "Enter your password";
        document.querySelector(
          ".modal__body-login .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-login .modal__password"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-login .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else if (
        document.querySelector(".modal__body-login .modal__password").value
          .length < 8
      ) {
        document.querySelector(
          ".modal__body-login .modal__password"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-login .modal__message"
        ).textContent = "Enter correct password";
        document.querySelector(
          ".modal__body-login .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-login .modal__password"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-login .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else {
        document.querySelector(
          ".modal__body-login .modal__button p"
        ).style.display = "none";
        document.querySelector(
          ".modal__body-login .modal__button img"
        ).style.display = "block";
        document.querySelector(
          ".modal__body-login .modal__button"
        ).style.opacity = "0.5";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-login .modal__username"
          ).style.border = "1px solid #ff8e8e";
          document.querySelector(
            ".modal__body-login .modal__password"
          ).style.border = "1px solid #ff8e8e";
          document.querySelector(
            ".modal__body-login .modal__message"
          ).textContent = "Invalid login or password";
          document.querySelector(
            ".modal__body-login .modal__message"
          ).style.opacity = "1";

          document.querySelector(
            ".modal__body-login .modal__button p"
          ).style.display = "block";
          document.querySelector(
            ".modal__body-login .modal__button img"
          ).style.display = "none";
          document.querySelector(
            ".modal__body-login .modal__button"
          ).style.opacity = "1";
          setTimeout(() => {
            document.querySelector(
              ".modal__body-login .modal__username"
            ).style.border = "1px solid #00DFFC";
            document.querySelector(
              ".modal__body-login .modal__password"
            ).style.border = "1px solid #00DFFC";
            document.querySelector(
              ".modal__body-login .modal__message"
            ).style.opacity = "0";
          }, 2000);
        }, 3000);
      }
    });

  document
    .querySelector(".modal__body-forgot .modal__button")
    .addEventListener("click", (event) => {
      if (
        document.querySelector(".modal__body-forgot .modal__email").value == ""
      ) {
        document.querySelector(
          ".modal__body-forgot .modal__email"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-forgot .modal__message"
        ).textContent = "Enter your e-mail";
        document.querySelector(
          ".modal__body-forgot .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-forgot .modal__email"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-forgot .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else if (
        document
          .querySelector(".modal__body-forgot .modal__email")
          .value.includes("@") == false ||
        document
          .querySelector(".modal__body-forgot .modal__email")
          .value.includes(".") == false
      ) {
        document.querySelector(
          ".modal__body-forgot .modal__email"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-forgot .modal__message"
        ).textContent = "Enter your valid e-mail";
        document.querySelector(
          ".modal__body-forgot .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-forgot .modal__email"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-forgot .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else {
        document.querySelector(
          ".modal__body-forgot .modal__button p"
        ).style.display = "none";
        document.querySelector(
          ".modal__body-forgot .modal__button img"
        ).style.display = "block";
        document.querySelector(
          ".modal__body-forgot .modal__button"
        ).style.opacity = "0.5";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-forgot .modal__email"
          ).style.border = "1px solid #ff8e8e";
          document.querySelector(
            ".modal__body-forgot .modal__message"
          ).textContent = "Such mail has not been registered";
          document.querySelector(
            ".modal__body-forgot .modal__message"
          ).style.opacity = "1";

          document.querySelector(
            ".modal__body-forgot .modal__button p"
          ).style.display = "block";
          document.querySelector(
            ".modal__body-forgot .modal__button img"
          ).style.display = "none";
          document.querySelector(
            ".modal__body-forgot .modal__button"
          ).style.opacity = "1";
          setTimeout(() => {
            document.querySelector(
              ".modal__body-forgot .modal__email"
            ).style.border = "1px solid #00DFFC";
            document.querySelector(
              ".modal__body-forgot .modal__message"
            ).style.opacity = "0";
          }, 2000);
        }, 3000);
      }
    });


  document
    .querySelector(".modal__body-registration .modal__button")
    .addEventListener("click", (event) => {
      if (
        document.querySelector(".modal__body-registration .modal__email")
          .value == "" ||
        document
          .querySelector(".modal__body-registration .modal__email")
          .value.includes("@") == false ||
        document
          .querySelector(".modal__body-registration .modal__email")
          .value.includes(".") == false ||
        document.querySelector(".modal__body-registration .modal__email").value
          .length < 10
      ) {
        document.querySelector(
          ".modal__body-registration .modal__email"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).textContent = "Enter your valid e-mail";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-registration .modal__email"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-registration .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else if (
        document.querySelector(".modal__body-registration .modal__username")
          .value == ""
      ) {
        document.querySelector(
          ".modal__body-registration .modal__username"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).textContent = "Enter your username";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-registration .modal__username"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-registration .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else if (
        document.querySelector(".modal__body-registration .modal__username")
          .value.length < 4
      ) {
        document.querySelector(
          ".modal__body-registration .modal__username"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).textContent = "This username is too short";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-registration .modal__username"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-registration .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else if (
        document.querySelector(".modal__body-registration .modal__password")
          .value == ""
      ) {
        document.querySelector(
          ".modal__body-registration .modal__password"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).textContent = "Enter your password";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-registration .modal__password"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-registration .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else if (
        document.querySelector(".modal__body-registration .modal__password")
          .value.length < 8
      ) {
        document.querySelector(
          ".modal__body-registration .modal__password"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).textContent = "This password is too short(min. 8 characters)";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-registration .modal__password"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-registration .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else if (
        document.querySelector(".modal__body-registration .modal__password")
          .value !=
        document.querySelector(".modal__body-registration .modal__confirm")
          .value
      ) {
        document.querySelector(
          ".modal__body-registration .modal__confirm"
        ).style.border = "1px solid #ff8e8e";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).textContent = "The passwords don't match";
        document.querySelector(
          ".modal__body-registration .modal__message"
        ).style.opacity = "1";
        setTimeout(() => {
          document.querySelector(
            ".modal__body-registration .modal__confirm"
          ).style.border = "1px solid #00DFFC";
          document.querySelector(
            ".modal__body-registration .modal__message"
          ).style.opacity = "0";
        }, 2000);
      } else {
        document.querySelector(
          ".modal__body-registration .modal__button p"
        ).style.display = "none";
        document.querySelector(
          ".modal__body-registration .modal__button img"
        ).style.display = "block";
        document.querySelector(
          ".modal__body-registration .modal__button"
        ).style.opacity = "0.5";
        document.querySelector(
          ".success h2"
        ).textContent = `Registration successful, ${
          document.querySelector(".modal__body-registration .modal__username")
            .value
        }!`;
        setTimeout(() => {
          document.querySelector(".modal__body-registration").style.top =
            "-100%";
          document.querySelector(
            ".modal__body-registration .modal__button p"
          ).style.display = "block";
          document.querySelector(
            ".modal__body-registration .modal__button img"
          ).style.display = "none";
          document.querySelector(
            ".modal__body-registration .modal__button"
          ).style.opacity = "1";

          whitelistCode = document.querySelector(
            ".modal__body-registration .modal__code"
          ).value;
          email = document.querySelector(
            ".modal__body-registration .modal__email"
          ).value;
          username = document.querySelector(
            ".modal__body-registration .modal__username"
          ).value;
          password = document.querySelector(
            ".modal__body-registration .modal__password"
          ).value;

          document.querySelectorAll(".modal__input").forEach((item) => {
            item.value = "";
          });
          setTimeout(() => {
            document.querySelector(".success").style.transform = "scale(1)";
          }, 600);

         
        }, 3000);
      }
    });

  

  // View scroll on window

  window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;
    if (scrollPosition < 5) {
      document.querySelector(".header").style.background = "#ffffff00";
    } else {
      document.querySelector(".header").style.background = "#007282eb";
    }
  });

  let scrollPosition = window.scrollY;
  if (scrollPosition < 5) {
    document.querySelector(".header").style.background = "#ffffff00";
  } else {
    document.querySelector(".header").style.background = "#007282eb";
  }

  // Rebuild page on clicks

  document.querySelector(".blog__button").addEventListener("click", (event) => {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".blogs").style.display = "block";
    document
      .querySelectorAll(".blogs")[0]
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });

  document
    .querySelector(".media__button")
    .addEventListener("click", (event) => {
      document.querySelector(".main").style.display = "none";
      document.querySelector(".news").style.display = "block";
      document
        .querySelectorAll(".news")[0]
        .scrollIntoView({ block: "start", behavior: "smooth" });
    });

  document.querySelectorAll(".header__link").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      if (item.classList.length == 2) {
      } else {
        document.querySelectorAll(".post").forEach((item) => {
          item.style.display = "none";
        });
        document.querySelector(".blogs").style.display = "none";
        document.querySelector(".news").style.display = "none";
        document.querySelector(".main").style.display = "block";

        if (i == 0) {
          document
            .querySelectorAll(".first")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 1) {
          document
            .querySelectorAll(".intro")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 2) {
        } else if (i == 3) {
          document
            .querySelectorAll(".gallery")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 4) {
        } else if (i == 5) {
          document
            .querySelectorAll(".blog")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 6) {
          document
            .querySelectorAll(".media")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 7) {
          document
            .querySelectorAll(".roadmap")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 8) {
          document
            .querySelectorAll(".team")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 9) {
          document
            .querySelectorAll(".built")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    });
  });

  document.querySelectorAll(".menu__link").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      if (item.classList.length == 2) {
      } else {
        document.querySelectorAll(".post").forEach((item) => {
          item.style.display = "none";
        });
        document.querySelector(".blogs").style.display = "none";
        document.querySelector(".news").style.display = "none";
        document.querySelector(".main").style.display = "block";

        if (i == 0) {
          document
            .querySelectorAll(".first")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 1) {
          document
            .querySelectorAll(".intro")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 2) {
        } else if (i == 3) {
          document
            .querySelectorAll(".gallery")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 4) {
        } else if (i == 5) {
          document
            .querySelectorAll(".blog")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 6) {
          document
            .querySelectorAll(".media")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 7) {
          document
            .querySelectorAll(".roadmap")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 8) {
          document
            .querySelectorAll(".team")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        } else if (i == 9) {
          document
            .querySelectorAll(".built")[0]
            .scrollIntoView({ block: "start", behavior: "smooth" });
        }

        document.querySelector(".menu__body").style.right = "-320px";
        setTimeout(() => {
          document.querySelector(".menu").style.opacity = "0";
          setTimeout(() => {
            document.querySelector(".menu").style.display = "none";
          }, 400);
        }, 600);
      }
    });
  });

  document.querySelectorAll(".news__card").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      document.querySelector(".news").style.display = "none";
      document.querySelectorAll(".post-news")[i].style.display = "block";
      document
        .querySelectorAll(".post-news")
        [i].scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  document.querySelectorAll(".media__right a").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      document.querySelector(".main").style.display = "none";
      document.querySelectorAll(".post-news")[i].style.display = "block";
      document
        .querySelectorAll(".post-news")
        [i].scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  document.querySelector(".blog__left").addEventListener("click", (event) => {
    document.querySelector(".main").style.display = "none";
    document.querySelectorAll(".post-blog")[0].style.display = "block";
    document
      .querySelectorAll(".post-blog")[0]
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });

  document.querySelectorAll(".blog__card").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      document.querySelector(".main").style.display = "none";
      document.querySelectorAll(".post-blog")[i].style.display = "block";
      document
        .querySelectorAll(".post-blog")
        [i].scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  document.querySelectorAll(".blog__slide").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      document.querySelector(".main").style.display = "none";
      document.querySelectorAll(".post-blog")[i].style.display = "block";
      document
        .querySelectorAll(".post-blog")
        [i].scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  document.querySelectorAll(".blogs__card").forEach((item, i) => {
    item.addEventListener("click", (event) => {
      document.querySelector(".blogs").style.display = "none";
      document.querySelectorAll(".post-blog")[i].style.display = "block";
      document
        .querySelectorAll(".post-blog")
        [i].scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  // Open social bar

  let activeSocial = false;
  document
    .querySelector(".header__link-list")
    .addEventListener("click", (event) => {
      if (activeSocial == false) {
        document.querySelector(".header__social").style.display = "block";
        document.querySelector(".header__link-list svg").style.transform =
          "scale(1, -1)";
        activeSocial = true;
      } else {
        document.querySelector(".header__social").style.display = "none";
        document.querySelector(".header__link-list svg").style.transform =
          "scale(1, 1)";
        activeSocial = false;
      }
    });

  // Mobile menu

  let activeSoc = false;
  document
    .querySelector(".menu__link-social")
    .addEventListener("click", (event) => {
      if (activeSoc == false) {
        document.querySelector(".menu__hide").style.maxHeight = "300px";
        document.querySelector(".menu__link-social svg").style.transform =
          "scale(1, -1)";
        activeSoc = true;
      } else {
        document.querySelector(".menu__hide").style.maxHeight = "0px";
        document.querySelector(".menu__link-social svg").style.transform =
          "scale(1, 1)";
        activeSoc = false;
      }
    });

  document.querySelector(".header__menu").addEventListener("click", (event) => {
    document.querySelector(".menu").style.display = "block";
    setTimeout(() => {
      document.querySelector(".menu").style.opacity = "1";
      setTimeout(() => {
        document.querySelector(".menu__body").style.right = "0px";
      }, 600);
    }, 100);
  });

  document.querySelector(".menu__close").addEventListener("click", (event) => {
    document.querySelector(".menu__body").style.right = "-320px";
    setTimeout(() => {
      document.querySelector(".menu").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".menu").style.display = "none";
      }, 400);
    }, 600);
  });
});

document.querySelector('.header__logo').addEventListener('click', event => {
  document.querySelector(".blogs").style.display = "none";
  document.querySelector(".news").style.display = "none";
  document.querySelectorAll(".post-blog").forEach( (item, i) => {
    item.style.display = 'none';
  })
  document.querySelectorAll(".post-news").forEach( (item, i) => {
    item.style.display = 'none';
  })

  document.querySelector(".main").style.display = "block";
  document.querySelector(".first").scrollIntoView({ block: "start", behavior: "smooth" });
})