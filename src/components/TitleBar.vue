<template>
  <div class="flex row items-center">
    <div class="green-bar left d-none d-sm-block col-2"></div>
    <h5 class="q-px-md">{{ title }}</h5>
    <div class="green-bar col right"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineOptions({
  name: "TitleBar",
});
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
h5 {
  font-size: clamp(25px, 2vw, 35px) !important;
  font-weight: bold;
  color: #1b2234de;
}
.d-none {
  display: none !important;
}
.display-block {
  display: block;
}
/* Display as block on small screens and larger */
@media (min-width: 500px) {
  .d-sm-block {
    display: block !important;
  }
}
.green-bar.left {
  height: 50px !important;
  background: #dcf7db;
  border-top-right-radius: 80px 80px;
  border-bottom-right-radius: 80px 80px;
}
.green-bar.right {
  height: 50px !important;
  background: #dcf7db;
  border-top-left-radius: 80px 80px;
  border-bottom-left-radius: 80px 80px;
}
</style>
