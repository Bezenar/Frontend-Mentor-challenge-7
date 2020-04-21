<template>
  <div id="app">
    <!-- HEADER OPEN TAG-->
    <header id="header" :class="{ active: !mobileMenu.burger && !resolution }">
      <div class="container">
        <div class="flex jc-sb ai-center">
          <div class="logo">
            <a href="#">
              <img :src="logo.src" :alt="logo.alt" :title="logo.title" />
            </a>
          </div>
          <div @click="openNav" class="mob-menu" v-if="!resolution">
            <img
              v-if="mobileMenu.burger"
              src="../public/images/icons/icon-hamburger.svg"
              alt="open menu"
              title="burger"
            />
            <img
              v-else
              src="../public/images/icons/icon-close.svg"
              alt="close menu"
              title="Cross"
            />
          </div>
          <nav id="nav" v-if="resolution || !mobileMenu.burger">
            <div class="bg-image" v-if="mobileMenu.burger">
              <img src="../public/images/bg/bg-pattern-mobile-nav.svg" alt="" />
            </div>
            <ul class="flex nav-wrapper ai-center">
              <menuItem
                v-for="item in menu"
                :key="item.name"
                :name="item.name"
                :src="item.src"
              >
              </menuItem>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <!-- HEADER CLOSE TAG-->
    <!-- MAIN OPEN TAG-->
    <main id="main">
      <!-- BANNER OPEN TAG-->
      <section class="banner">
        <div class="container">
          <div class="flex s-dir-crev">
            <div class="wid-50 resp wid-100">
              <div class="leftSide">
                <h2 class="heading heading__white heading__line">
                  {{ banner.heading }}
                </h2>
                <p class="text">{{ banner.text }}</p>
                <div class="button-container">
                  <button class="button button_dark-violet">View Plans</button>
                </div>
              </div>
            </div>
            <div class="wid-50 resp wid-100">
              <div class="rightSide">
                <div class="image">
                  <img
                    v-if="resolution"
                    :src="banner.img.desktop.src"
                    :alt="banner.img.alt"
                    :title="banner.img.title"
                  />
                  <img
                    v-else
                    :src="banner.img.mobile.src"
                    :alt="banner.img.alt"
                    :title="banner.img.title"
                  />
                </div>
                <div class="bg-image">
                  <div>
                    <img
                      v-if="resolution"
                      src="../public/images/bg/bg-pattern-intro-right-desktop.svg"
                      alt="bg-image"
                      title="background"
                    />
                    <img
                      v-else
                      src="../public/images/bg/bg-pattern-intro-left-mobile.svg"
                      alt="bg-image"
                      title="background"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- GRID OPEN TAG-->
      <section class="grid">
        <div class="bg-image">
          <img
            v-if="resolution"
            src="../public/images/bg/bg-pattern-intro-left-desktop.svg"
            alt="bg-image"
            title="bg-image"
          />
          <img
            v-else
            src="../public/images/bg/bg-pattern-intro-right-mobile.svg"
            alt="bg-image"
            title="bg-image"
          />
        </div>
        <div class="container">
          <h2 class="heading heading__dark-violet heading__line">
            {{ gridBlockHeading }}
          </h2>
          <div class="grid-wrapper">
            <div class="flex wrap">
              <grid
                v-for="item in grid"
                :key="item.heading"
                :heading="item.heading"
                :icon="item.icon"
                :text="item.text"
              ></grid>
            </div>
          </div>
        </div>
      </section>
      <!-- GRID CLOSE TAG-->
      <!-- Additional BLOCK OPEN TAG-->
      <section class="additional-block">
        <div class="container">
          <div class="wrapper">
            <div class="bg-image">
              <img
                v-if="resolution"
                src="../public/images/bg/bg-pattern-how-we-work-desktop.svg"
                alt="bg-image"
                title="bg-image"
              />
              <img
                v-else
                src="../public/images/bg/bg-pattern-how-we-work-mobile.svg"
                alt="bg-image"
                title="bg-image"
              />
            </div>
            <div class="flex wrap jc-sb">
              <div class="text-wrapper wid-70 resp s-wid-100">
                <p class="text">{{ additionalBlockText }}</p>
              </div>
              <div class="button-container wid-30 resp s-wid-100">
                <button class="button button__transparent">How we work</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Additional BLOCK CLOSE TAG-->
      <!-- BANNER CLOSE TAG-->
    </main>
    <!-- MAIN CLOSE TAG-->
    <!-- FOOTER OPEN TAG-->
    <footer id="footer">
      <div class="bg-img">
        <img
          v-if="resolution"
          src="../public/images/bg/bg-pattern-footer-desktop.svg"
          alt="bg-image"
          title="bg-image"
        />
        <img
          v-else
          src="../public/images/bg/bg-pattern-footer-mobile.svg"
          alt="bg-image"
          title="bg-image"
        />
      </div>
      <section class="footer_head">
        <div class="container">
          <div class="flex wrap jc-sb">
            <div class="logo resp s-wid-100">
              <img :src="logo.src" :alt="logo.alt" :title="logo.title" />
            </div>
            <div class="social-links resp s-wid-100">
              <div class="flex wrap s-jc-center">
                <socialLinks
                  v-for="item in socialIcons"
                  :key="item.id"
                  :link="item.link"
                  :icon="item.icon"
                ></socialLinks>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer_bottom">
        <div class="container">
          <div class="flex wrap s-dir-col s-ai-center">
            <footerColumn
              v-for="item in footerColumns"
              :key="item.headingg"
              :heading="item.heading"
              :links="item.links"
            ></footerColumn>
          </div>
        </div>
      </section>
    </footer>
    <!-- FOOTER CLOSE TAG-->
  </div>
</template>

<script>
import MenuItem from "./components/MenuItem";
import SocialLinks from "./components/SocialLink";
import FooterColumn from "./components/FooterColumn";
import Grid from "./components/Grid";
export default {
  name: "App",
  components: { MenuItem, Grid, SocialLinks, FooterColumn },
  data() {
    return {
      resolution: "",
      mobileMenu: {
        burger: false
      },
      /**
       * @description
       * Take Datas from VUEX.
       */
      menu: this.$store.getters.menu,
      grid: this.$store.getters.grid,
      footerColumns: this.$store.getters.footerColumns,
      socialIcons: this.$store.getters.socialIcons,
      logo: {
        src: "./images/logo.svg",
        alt: "Logo",
        title: "Insure"
      },
      banner: {
        heading: "Humanizing your insurance.",
        text:
          "Get your life insurance coverage easier and faster. We blend our expertise " +
          "and technology to help you find the plan that’s right for you. Ensure you " +
          "and your loved ones are protected.",
        img: {
          desktop: {
            src: "./images/image-intro-desktop.jpg"
          },
          mobile: {
            src: "./images/image-intro-mobile.jpg"
          },
          alt: "Family",
          title: "Family"
        }
      },
      gridBlockHeading: "We’re different",
      additionalBlockText: "Find out more about how we work"
    };
  },
  methods: {
    openNav() {
      if (this.mobileMenu.burger === true) {
        this.mobileMenu.burger = false;
        this.mobileMenu.cross = true;
      } else {
        this.mobileMenu.burger = true;
        this.mobileMenu.cross = false;
      }
    },
    /**
     * @description
     * Function for checking device resolution
     */
    windowSize() {
      let w = document.documentElement.clientWidth;
      if (w > 500) {
        this.resolution = true;
      } else {
        this.resolution = false;
      }
    }
  },
  created() {
    /**
     * Add event listner, for device resolution
     */
    window.addEventListener("resize", this.windowSize);
    this.windowSize();
  }
};
</script>

<style lang="scss">
#app {
  #header {
    position: relative;
    z-index: 100;
    &.active {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
    }
    .container {
      background: $veryLightGray;
      .logo {
        padding: 1.95rem 0 1.66rem 0.6rem;
        @include resp("s") {
          padding-left: 1.5rem;
        }
      }
      .mob-menu {
        padding-right: 1.5rem;
        padding-top: 0.25rem;
      }
      #nav {
        @include resp("s") {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: -1;
          background-color: $veryDarkViolet;
          .nav-wrapper {
            flex-direction: column;
            padding-top: 7rem;
          }
        }
        .bg-image {
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
  #main {
    .banner {
      background: $darkViolet;
      .rightSide {
        position: relative;
        z-index: 1;
        .image {
          position: absolute;
          top: 6.6rem;
          left: 1.4rem;
          z-index: 2;
          width: auto;
          height: auto;
          @include resp("s") {
            position: relative;
            top: 0;
            left: 0;
          }
        }
        .bg-image {
          position: absolute;
          top: -5rem;
          right: -10.2rem;
          z-index: 3;
          @include resp("s") {
            top: 100%;
            right: 100%;
            transform: translateX(100%);
          }
        }
      }
      .leftSide {
        padding: 5rem 1rem 6rem;
        @include resp("s") {
          text-align: center;
        }
        .text {
          padding-top: 1.95rem;
          font-family: $secondFont;
          font-size: 14px;
          word-spacing: 1px;
          letter-spacing: 1px;
          line-height: 25px;
          color: $veryLightGray;
          @include resp("s") {
            padding: 1rem 0.5rem 1rem;
          }
        }
        .button-container {
          padding: 2rem 0;
          @include resp("s") {
            padding: 1.3rem 0 0;
          }
        }
      }
    }
    .grid {
      position: relative;
      padding: 17.5rem 0 9.9rem 1.5rem;
      @include resp("s") {
        text-align: center;
        padding: 10.6rem 0 4rem;
      }
      .bg-image {
        position: absolute;
        top: -10.7rem;
        left: 0;
        z-index: 3;
        @include resp("s") {
          top: -9.7rem;
          left: 100%;
          transform: translateX(-100%);
        }
      }
      .grid-wrapper {
        padding-top: 6rem;
        @include resp("s") {
          padding-top: 5rem;
        }
      }
    }
    .additional-block {
      padding-bottom: 9rem;
      @include resp("s") {
        padding-bottom: 7.5rem;
      }
      .container {
        @include resp("s") {
          padding: 1rem 1.49rem;
        }
      }
      .wrapper {
        position: relative;
        background: $darkViolet;
        .bg-image {
          position: absolute;
          right: 0;
          top: 0;
        }
        .text-wrapper {
          .text {
            padding: 4.2rem 13rem 4rem 6rem;
            font-size: 56px;
            word-spacing: 3px;
            letter-spacing: 1px;
            line-height: 60px;
            color: $veryLightGray;
            @include resp("s") {
              padding: 4.5rem 2.6rem 2.5rem;
              font-size: 41px;
              letter-spacing: 0px;
              word-spacing: 0px;
              line-height: 40px;
              text-align: center;
            }
          }
        }
        .button-container {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: center;
          align-items: center;
          @include resp("s") {
            padding-bottom: 4.6rem;
          }
        }
      }
    }
  }
  #footer {
    background: $veryLightGray;
    position: relative;
    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .footer_head,
    .footer_bottom {
      position: relative;
      z-index: 5;
    }
    .footer_head {
      .container {
        padding: 4.5rem 0 1.5rem 1rem;
        border-bottom: 1px solid darken($color: $veryLightGray, $amount: 5);
        @include resp("s") {
          padding: 5.77rem 0 2.2rem;
        }
        .logo {
          @include resp("s") {
            padding-bottom: 1.75rem;
            text-align: center;
          }
        }
      }
    }
    .footer_bottom {
      padding: 2rem 0;
    }
  }
}
</style>
