<template>
  <div class="q-pa-md textheadsize" >{{ head ?? "Header" }}</div>
  <div class="row">
    <q-card
      v-for="(data, index) in datas"
      :key="index"
      class="no-shadow col-5 q-ma-md textBrackwork col-lg-5 col-md-5 col-sm-8 col-xs-11 q-px-md q-py-md"
      bordered
    >
      <q-item class="column justify-center" style="height: 100%">
        <div class="row q-px-md">
          <q-item-section avatar>
            <q-avatar size="70px">
              <q-icon :name="data.icon" />
            </q-avatar>
          </q-item-section>
          <q-separator vertical />
          <q-item-section class="q-ml-md textBrackwork">
            <q-item-label class="textheadsize">{{ data.title }}</q-item-label>
            <q-item-label class="textdeteilsize">
              {{ data.detail }}
            </q-item-label>
          </q-item-section>
        </div>
        <div class="col column items-center justify-end">
          <q-card-actions class="q-ma-sm">
            <div>
              <q-btn
                label="ดาวน์โหลดแบบฟอร์ม"
                size="md"
                outline
                :style="{
                  color: '#FF4C4C',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                }"
                class="positionButtonCard"
                @click="dowload(data?.link)"
              ></q-btn>
            </div>
          </q-card-actions>
        </div>
      </q-item>
    </q-card>
  </div>
</template>

<script setup>

defineOptions({
  name: "CardDowload",
});

const dowload = (link) => {
  window.open(link, "_blank");
};

const props = defineProps({
  head: {
    type: String,
    required: true,
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
  },
});
</script>

<style>
.textBrackwork {
  word-wrap: break-word;
}
.textdeteilsize{
  font-size: 0.75rem;
}
.textheadsize{
  font-weight: bold;
}
.positionButtonCard::before{
  border: 0;
}
</style>
