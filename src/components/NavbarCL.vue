<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">{{ sectionName }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarCL",
  data() {
    return {};
  },
  props: ["sectionName"],
};
</script>

<style lang="scss">
@import "src/scss/variables";

.navbar {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
.navbar-brand {
  font-family: $style5;
}
</style>
