<template>
  <v-btn color="blue darken-2" dark tile large @click="goBack()"
    >Come back <v-icon right dark> mdi-arrow-left</v-icon></v-btn
  >
</template>

<script>
export default {
  name: "ComebackBtn",
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#come-back-btn {
  margin: 0 auto;
}
</style>
