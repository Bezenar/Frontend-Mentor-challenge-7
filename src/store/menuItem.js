/* eslint-disable prettier/prettier */
export default {
  state: {
    menu: [
      { name: "How we work", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Account", link: "#" },
      { name: "View plans", link: "#" },
    ],
  },
  getters: {
    menu(state) {
      return state.menu;
    },
  },
  action: {},
  mutation: {},
};
