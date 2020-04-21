<template>
  <div class="social-link">
    <a :href="link">
      <img :src="icon.src" :alt="icon.alt" :title="icon.title" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    icon: Object,
    link: String
  }
};
</script>
<style scoped lang="scss">
.social-link {
  padding-left: 1rem;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>
