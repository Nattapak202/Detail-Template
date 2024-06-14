<template>
  <div class="serviceBodyBackgroud q-pb-md">
    <q-page class="flex column text">
      <IntroductionService :class="{ backgroudHeader: dataPageServices?.IntroductionService?.bgColor }"
        :title="dataPageServices?.IntroductionService?.title"
        :subTitle="dataPageServices?.IntroductionService?.subtitle"
        :bgColor="dataPageServices?.IntroductionService?.bgColor"
      />
      <div class="container-lg flex justify-center items-center">
        <ImageService :srcImg="dataPageServices?.srcImg" />
      </div>
      <IntroductionService
        :title="dataPageServices?.note"
        :subTitle="dataPageServices?.detailNode"
        textSize="clamp(23px, 1vw, 30px)"
        :linebuttom="true"
      />
      <div
        class="container-lg q-mt-md"
        :bgColor="dataPageServices?.IntroductionService?.bgColor"
        :class="{ hidden: !dataPageServices?.needCardDowload }"
      >
        <CardDowload
          :head="dataPageServices?.DataCardDowload?.head"
          :datas="dataPageServices?.DataCardDowload?.datas"
        />
      </div>
      <div class="flex justify-center items-center q-ma-md" :class="{ hidden: !dataPageServices?.buttonToForm }">
        <ButtonNoOutline
          :label="dataPageServices?.ButtonLabel?.label"
          :link="dataPageServices?.ButtonLabel?.link"
          class="button-size-service"
        />
      </div>
      <div>
        <TableService :row="dataPageServices?.rows" :titleTable="dataPageServices?.titleTable" class="container-lg" />
      </div>
    </q-page>
  </div>
</template>

<script setup>
import IntroductionService from "../../components/IntroductionService.vue";
import ImageService from "../../components/ImageService.vue";
import CardDowload from "src/components/CardDowload.vue";
import ButtonNoOutline from "src/components/ButtonQuasar.vue";
import { dataPageService } from "../../variable/dataService.js";
import { useRoute } from "vue-router";
import TableService from "src/components/TableService.vue"

const route = useRoute();

const dataPageServices = dataPageService[0][route.params.service];
defineOptions({
  name: "InstructionPage",
});

console.log(route.params.service);
</script>

<style>
.button-size-service {
  width: auto !important;
}
.text {
  font-size: clamp(14px, 2vw, 18px);
}
.serviceBodyBackgroud {
  background-image: linear-gradient(
    180deg,
    #ffffff 400px,
    #e2e2e2 100%
  ) !important;
  width: auto;
  height: auto;
}
.backgroudHeader {
  background-color: #FFCCCC !important;
}
</style>
