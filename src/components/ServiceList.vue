<template>
  <router-link
    style="text-decoration: none; color: inherit"
    :to="link"
    class="col-lg-4 col-md-4 col-xl-3 col-sm-12 col-xs-12 q-px-md q-py-md"
  >
    <div class="full-h">
      <q-card class="my-card full-h onhover">
        <q-card-section horizontal class="full-h q-py-sm">
          <div class="flex flex-center q-px-xs" style="border: none">
            <q-card-section>
              <q-icon :name="icon" :color="color" :size="size" />
            </q-card-section>
          </div>
          <q-separator vertical style="background: red" />
          <q-card-section class="full-h full-width">
            <q-card-section class="textwith titlehead q-pa-none">{{
              title
            }}</q-card-section>
            <q-card-section class="textwith subtitle q-px-none">{{
              detail
            }}</q-card-section>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
defineOptions({
  name: "ServiceList",
});
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "grey",
  },
  size: {
    type: String,
    default: "md",
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    default: "",
  },
  typeNumber: {
    type: Boolean,
    default: true,
  },
});
</script>
<style scoped>
.q-separator {
  flex-shrink: 1 !important;
}
.onhover {
  transition: all 0.3s ease;
}
.onhover:active {
  background: rgba(57, 226, 252, 0.1);
}
.onhover:hover {
  transform: scale(1.05);
  box-shadow: 3px 3px 6px 4px rgb(196, 195, 195, 0.4) !important;
}
.full-h {
  height: 100% !important;
}
.textwith.titlehead {
  font-size: clamp(14px, 2vw, 18px);
  font-weight: bold;
  word-wrap: break-word;
}
.textwith.subtitle {
  font-size: clamp(14px, 2vw, 16px);
  font-weight: normal;
  word-wrap: break-word;
}
</style>
<style lang="scss">
.vertical-line {
  border-color: $buttonnooutlinecolr !important;
}
</style>
