<template>
  <div>
    <v-alert color="red darken-3 white--text text-center"> Last watched: {{ vogelname }}</v-alert>
  </div>
</template>

<script>
export default {
  props: {
    vogelname: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
