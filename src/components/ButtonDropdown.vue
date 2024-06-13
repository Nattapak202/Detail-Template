<template>
    <q-btn-dropdown color="primary" label="Service">
      <div class="q-pa-md">
      <q-list v-for="(option, index) in serviceMenu" :key="index">
        <q-item  clickable v-close-popup @click="navigate(option?.link)">
          <q-item-section>
            <q-item-label>{{ option?.title }}</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-list>
        <q-item
          clickable
          v-close-popup
          @click="onItemClick(options?.link)"
         
        >
          <q-item-section>
            <q-item-label>{{ option?.title }}</q-item-label>
          </q-item-section>
        </q-item> -->
      </q-list>
    </div>
    </q-btn-dropdown>

</template>

<script setup>
import { serviceMenu } from "../variable/variable";

import { useRouter } from "vue-router";

defineOptions({
  name: "ButtonDropdown",
});

const router = useRouter();

function navigate(link) {
  router.push(link);
}

const props = defineProps({
  options: {
    title: {
      type: String,
    },
    detail: {
      type: String,
    },
    icon: {
      type: String,
    },
    link: {
      type: String,
    },
    default: serviceMenu,
  },
});
console.log(serviceMenu)
</script>
