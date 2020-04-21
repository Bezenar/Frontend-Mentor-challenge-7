<template>
  <div class="wid-33 resp s-wid-100">
    <div class="wrapper">
      <div class="icon-wrapper">
        <img :src="icon.src" :alt="icon.alt" :title="icon.title" />
      </div>
      <div class="heading-wrapper">
        <h2 class="heading__small">{{ heading }}</h2>
      </div>
      <div class="text-wrapper">
        <p class="text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    heading: String,
    text: String,
    icon: Object
  }
};
</script>
<style scoped lang="scss">
.wrapper {
  @include resp("s") {
    padding-bottom: 3.5rem;
    padding-right: 1rem;
  }
  .heading-wrapper {
    .heading__small {
      padding: 2rem 0 1rem;
      font-size: 28px;
    }
  }
  .text-wrapper {
    .text {
      padding-top: 0.25rem;
      padding-right: 0.75rem;
      font-family: $mainFont;
      line-height: 25px;
      word-spacing: -2px;
      letter-spacing: 0.5px;
      @include resp("s") {
        font-size: 17px;
        padding: 0 0.75rem;
        line-height: 27px;
      }
    }
  }
}
</style>
