<template>
  <div class="q-pa-md" style="width: 100%">
    <div class="q-gutter-md flex items-start container">
      <q-card
        flat
        style="width: 100%"
        :class="{ backgroudHeader: bgColor }"
      >
        <q-card-section>
          <div :class="{ linebuttonHeader:linebuttom }" >
            <div class="q-mb-sm title-size-text" :style="{ fontSize: textSize }">{{ title ?? "Not Data" }}</div>
            <q-separator class="separator-color" size="3px" />
          </div>
        </q-card-section>

        <q-card-section>
          <div class="subtitleBrackwork">{{ subTitle ?? "Not Have Data" }}</div>
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
  textSize:{
    type: String,
    default: "clamp(25px, 1vw, 35px)"
  },
  linebuttom:{
    type: Boolean,
    default: true
  }
});
</script>

<style>
.separator-color {
  background-color: #FF4C4C !important;
}
.title-size-text {
  font-weight: 600;
}
.subtitleBrackwork {
  word-wrap: break-word;
}
.linebuttonHeader{
  width: fit-content;
}
</style>
