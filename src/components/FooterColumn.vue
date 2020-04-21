<template>
  <div class="footer-column">
    <div class="wrapper">
      <p class="list_heading">{{ heading }}</p>
      <ul class="list">
        <li class="list_item" v-for="item in links" :key="item.linkTitle">
          <a :href="item.link">{{ item.linkTitle }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterColumn",
  props: {
    heading: String,
    links: Array
  }
};
</script>
<style scoped lang="scss">
.footer-column {
  padding-right: 5rem;
  @include resp("s") {
    padding: 0;
  }
  .wrapper {
    padding: 1rem 5.4rem 0 0.9rem;
    @include resp("s") {
      padding: 0;
    }
    .list {
      color: $veryDarkViolet;
      padding-top: 2.3rem;
      &_heading {
        text-transform: uppercase;
        font-size: 14px;
        color: darken($color: $veryLightGray, $amount: 5);
        font-family: $secondFont;
        @include resp("s") {
          padding-top: 0.5rem;
          text-align: center;
        }
      }
      &_item {
        color: $veryDarkViolet;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1px;
        word-spacing: 1px;
        padding-bottom: 1rem;
        text-align: center;
        &:last-of-type {
          @include resp("s") {
            padding-bottom: 1.9rem;
          }
        }
        &:hover {
          transition: all 0.3s linear;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
