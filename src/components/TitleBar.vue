<template>
  <div class="row items-center back">
    <div class="section d-none d-sm-block" :class="[typeNumber ? 'color1' : 'color2']"></div>
    <span class="bor"
      ><h5 class="q-px-md">{{ title }}</h5></span
    >
    <div class="bar col right" :class="[typeNumber ? 'color1' : 'color2']"></div>
  </div>
</template>

<script setup>
defineOptions({
  name: "TitleBar",
});
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  typeNumber: {
    type: Boolean,
    default: true,
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
/* Display as block on small screens and larger */
@media (min-width: 576px) {
  .d-sm-block {
    display: block !important;
  }
}
.section {
  border-radius: 0px 30px 30px 0px;
  height: 50px;
  width: calc((100% - 1170px) / 2);
}
.bar.right {
  height: 50px !important;
  border-radius: 30px 0px 0px 30px;
  width: calc(1002px + calc((100% - 1170px) / 2));
}
.color1 {
  background: rgb(255, 0, 0,0.7);
}
.color2 {
  background: rgba(255, 255, 255, 1)
}
</style>
