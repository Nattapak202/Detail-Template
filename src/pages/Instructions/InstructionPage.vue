<template>
  <q-page class="flex container-lg column">
    <IntroductionService
      :title="dataPageServices?.IntroductionService?.title"
      :subTitle="dataPageServices?.IntroductionService?.subtitle"
      :bgColor="dataPageServices?.IntroductionService?.bgColor"
    />
    <div class="container flex justify-center items-center">
      <ImageService :srcImg="dataPageServices?.srcImg" />
    </div>
    <div class="column" :class="{ hidden: !dataPageServices?.needCardDowload }">
      <CardDowload
        :head="dataPageServices?.DataCardDowload?.head"
        :datas="dataPageServices?.DataCardDowload?.datas"
      />
    </div>
    <div class="flex justify-center items-center q-ma-md">
      <ButtonNoOutline
        :label="dataPageServices?.ButtonLabel?.label"
        :link="dataPageServices?.ButtonLabel?.link"
      />
    </div>
  </q-page>
</template>

<script setup>
import IntroductionService from "../../components/IntroductionService.vue";
import ImageService from "../../components/ImageService.vue";
import CardDowload from "src/components/CardDowload.vue";
import ButtonNoOutline from "src/components/ButtonNoOutline.vue";
import { dataPageService } from "../../variable/variable.js";
import { useRoute } from "vue-router";

const route = useRoute();

const dataPageServices = dataPageService[0][route.params.service];
defineOptions({
  name: "InstructionPage",
});

console.log(dataPageServices);
</script>