<template>
  <q-btn
    :label="label"
    :style="{
      backgroundColor: outline ? 'white !important' : 'rgba(255, 0, 0, 0.8) !important',
      color: outline ? 'rgba(255, 0, 0, 0.8) !important' : 'white',
      borderWidth: outline ? '2px' : '0',
      borderStyle: 'solid', 
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
    }"
    :to="to"
    :loading="loadingCheck"
    :size="size"
    @click="$emit('onClick')"
  />
</template>

<script setup>
import { defineProps } from "vue";
import { ref } from "vue";
defineOptions({
  name: "ButtonNoOutline",
});
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: "#",
  },
  loadingCheck: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
});
</script>
