/* eslint-disable prettier/prettier */
export default {
  state: {
    grid: [
      {
        icon: {
          src: "./images/icons/icon-snappy-process.svg",
          alt: "Snappy Process",
          title: "Snappy Process",
        },
        heading: "Snappy Process",
        text:
          "Our application process can be completed in minutes, not hours. Don’t get " +
          "stuck filling in tedious forms.",
      },
      {
        icon: {
          src: "./images/icons/icon-affordable-prices.svg",
          alt: "Affordable Prices",
          title: "Affordable Prices",
        },
        heading: "Affordable Prices",
        text:
          "We don’t want you worrying about high monthly costs. Our prices may be low, " +
          "but we still offer the best coverage possible.",
      },
      {
        icon: {
          src: "./images/icons/icon-snappy-process.svg",
          alt: "People First",
          title: "People First",
        },
        heading: "People First",
        text:
          "Our plans aren’t full of conditions and clauses to prevent payouts. We make " +
          "sure you’re covered when you need it.",
      },
    ],
  },
  getters: {
    grid(state) {
      return state.grid;
    },
  },
  action: {},
  mutation: {},
};
