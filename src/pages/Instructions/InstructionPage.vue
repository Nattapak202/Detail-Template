<template>
  <q-page class="flex container-lg column text">
    <IntroductionService
      :title="dataPageServices?.IntroductionService?.title"
      :subTitle="dataPageServices?.IntroductionService?.subtitle"
      :bgColor="dataPageServices?.IntroductionService?.bgColor"
    />
    <div class="container-lg flex justify-center items-center">
      <ImageService :srcImg="dataPageServices?.srcImg" />
    </div>
    <div class="container-lg" :class="{ hidden: !dataPageServices?.needCardDowload }">
      <CardDowload
        :head="dataPageServices?.DataCardDowload?.head"
        :datas="dataPageServices?.DataCardDowload?.datas"
      />
    </div>
    <div class="flex justify-center items-center q-ma-md">
      <ButtonNoOutline
        :label="dataPageServices?.ButtonLabel?.label"
        :link="dataPageServices?.ButtonLabel?.link"
        class="button-size-service"
      />
    </div>
  </q-page>
</template>

<script setup>
import IntroductionService from "../../components/IntroductionService.vue";
import ImageService from "../../components/ImageService.vue";
import CardDowload from "src/components/CardDowload.vue";
import ButtonNoOutline from "src/components/ButtonQuasar.vue";
import { dataPageService } from "../../variable/variable.js";
import { useRoute } from "vue-router";

const route = useRoute();

const dataPageServices = dataPageService[0][route.params.service];
defineOptions({
  name: "InstructionPage",
});

console.log(route.params.service);
</script>

<style>
.button-size-service{
  width: auto !important;
}
.text {
  font-size: clamp(14px, 2vw, 18px);
}
</style>