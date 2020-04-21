<template>
  <li class="menu-item">
    <a :href="src">{{ name }}</a>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    name: String,
    src: String
  }
};
</script>
<style scoped lang="scss">
.menu-item {
  padding: 0 2rem 0 0;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  color: $darkGrayishViolet;
  font-family: $secondFont;
  @include resp("s") {
    color: $veryLightGray;
    padding: 1.25rem 0 1.6rem;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    word-spacing: 3px;
  }
  cursor: pointer;
  &:hover {
    transition: all 0.3s linear;
    color: $veryDarkViolet;
  }
  &:last-of-type {
    padding: 0.7rem 1.74rem 0.7rem 1.4rem;
    border: 2px solid $veryDarkViolet;
    letter-spacing: 1px;
    color: $veryDarkViolet;
    @include resp("s") {
      color: $veryLightGray;
      border-color: $veryLightGray;
      padding: 1.1rem 6rem;
      margin-top: 0.5rem;
      letter-spacing: 3px;
      word-spacing: 3px;
    }
    &:hover {
      transition: all 0.3s linear;
      color: white;
      background: $veryDarkViolet;
    }
  }
}
</style>
