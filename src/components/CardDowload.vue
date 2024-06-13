<template>
  <div class="q-pa-md">{{ head ?? "Header" }}</div>
  <div class="row justify-center no-wrap">
    <q-card v-for="(data, index) in datas" :key="index" class="no-shadow col-5 q-ma-md" bordered>
        <q-item>
        <q-item-section avatar>
          <q-avatar size="70px">
            <q-icon :name="data.icon" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ data.title }}</q-item-label>
          <q-item-label caption>
            {{ data.detail }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item-section side class="items-center q-ma-sm">
        <q-btn
          label="Dowload"
          size="md"
          class="bg-indigo-8 text-capitalize text-white"
          @click="dowload( data?.link )"

        ></q-btn>
      </q-item-section>
    </q-card>
  </div>
</template>

<script setup>
// import { dataDowload } from "../variable/variable.js";

// export default defineComponent({
//   name: "CardDowload",

//   props: ["head", "datas", "dowload"],
// });

defineOptions({
  name: "CardDowload",
});

const dowload = ()=>{
    console.log('click Dowload')
}

const props = defineProps({
  head: {
    type: String,
    required: true,
    // default: dataDowload[0].head,
  },
  datas: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    deteil: {
      type: String,
    },
    link: {
      type: String,
    },
    // default: dataDowload[0].data,
  },
});
</script>
