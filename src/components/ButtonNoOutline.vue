<template>
  <q-btn style="background: #61c161; color: white" :label="props.label"/>
</template>

<script setup>
defineOptions({
  name: "ButtonNoOutline",
});
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "#",
  },
});
</script>
<style lang="scss">
q-btn{

}
</style>