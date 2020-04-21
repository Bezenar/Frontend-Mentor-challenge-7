/* eslint-disable prettier/prettier */
export default {
  state: {
    footerColumns: [
      {
        heading: "Our company",
        links: [
          {
            linkTitle: "How we work",
            link: "#",
          },
          {
            linkTitle: "Why Insure?",
            link: "#",
          },
          {
            linkTitle: "View plans",
            link: "#",
          },
          {
            linkTitle: "Reviews",
            link: "#",
          },
        ],
      },
      {
        heading: "Help me",
        links: [
          {
            linkTitle: "FAQ",
            link: "#",
          },
          {
            linkTitle: "Terms of use",
            link: "#",
          },
          {
            linkTitle: "Privacy policy",
            link: "#",
          },
          {
            linkTitle: "Cookies",
            link: "#",
          },
        ],
      },
      {
        heading: "Contact",
        links: [
          {
            linkTitle: "Sales",
            link: "#",
          },
          {
            linkTitle: "Support",
            link: "#",
          },
          {
            linkTitle: "Live chat",
            link: "#",
          },
        ],
      },
      {
        heading: "Others",
        links: [
          {
            linkTitle: "Careers",
            link: "#",
          },
          {
            linkTitle: "Press",
            link: "#",
          },
          {
            linkTitle: "Licenses",
            link: "#",
          },
        ],
      },
    ],
  },
  getters: {
    footerColumns(state) {
      return state.footerColumns;
    },
  },
  mutations: {},
  actions: {},
};
