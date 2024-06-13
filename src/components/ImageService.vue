<template>
        <q-img
          :src="srcImg"
          :ratio="1"
          style="width: 75%; height: auto;"
          class=''
        />
        <!-- :src="srcImg" -->
  </template>

  
<script setup>
defineOptions({
  name: "ImageService",
});

const props = defineProps({
  srcImg: {
    type: String,
    default:"/src/assets/IT_EQUIPMENT_PROCUREMENT_REQUEST_CONTROL1.png",
  },
});

</script>