<template>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-card flat bordered style="width: 100vw">
          <q-card-section>
            <div class="text-h6">{{ title ?? "Not Data" }}</div>
          </q-card-section>
  
          <q-separator inset />
  
          <q-card-section>
            {{ subTitle ?? "Not Have Data" }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>

<script setup>
defineOptions({
  name: 'IntroductionService'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  title: {
    type: Boolean,
    default: false
  }
})
</script>