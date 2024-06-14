<template>
  <div class="img-position">
    <q-img :src="srcImg" style=" height: auto" />
  </div>
  <!-- :src="srcImg" -->
</template>

<script setup>
defineOptions({
  name: "ImageService",
});

const props = defineProps({
  srcImg: {
    type: String,
    default: "/src/assets/IT_EQUIPMENT_PROCUREMENT_REQUEST_CONTROL1.png",
  },
});
</script>

<style>
.img-position {
  position: static !important;
  height: auto;
  width: 100vh;
}
</style>
