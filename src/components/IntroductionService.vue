<template>
  <div class="q-pa-md" style="width: 100%">
    <div class="q-gutter-md flex items-start">
      <q-card
        flat
        :bordered="bgColor"
        style="width: 100%"
        :class="{ backgroudHeader: bgColor }"
      >
        <q-card-section>
          <div style="width: fit-content">
            <h5 class="q-mb-sm">{{ title ?? "Not Data" }}</h5>
            <q-separator class="separator-color" size="3px" />
          </div>
        </q-card-section>

        <q-card-section>
          {{ subTitle ?? "Not Have Data" }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "IntroductionService",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  bgColor: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
.backgroudHeader {
  background-color: #BEF0FE !important;
}
.separator-color {
  background-color: #7ee1ff !important;
}
</style>
