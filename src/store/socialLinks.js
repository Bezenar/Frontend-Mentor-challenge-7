/* eslint-disable prettier/prettier */
export default {
  state: {
    socialIcons: [
      {
        id: 1,
        icon: {
          src: "./images/icons/icon-facebook.svg",
          alt: "Facebook",
          title: "Facebook",
        },
        link: "#",
      },
      {
        id: 2,
        icon: {
          src: "./images/icons/icon-twitter.svg",
          alt: "Twitter",
          title: "Twitter",
        },
        link: "#",
      },
      {
        id: 3,
        icon: {
          src: "./images/icons/icon-pinterest.svg",
          alt: "Pinterest",
          title: "Pinterest",
        },
        link: "#",
      },
      {
        id: 4,
        icon: {
          src: "./images/icons/icon-instagram.svg",
          alt: "Instagram",
          title: "Instagram",
        },
        link: "#",
      },
    ],
  },
  getters: {
    socialIcons(state) {
      return state.socialIcons;
    },
  },
};
