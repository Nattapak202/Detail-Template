<template>
  <q-btn-dropdown
    color="white"
    text-color="red"
    label="Service"
    class="not-absorot"
    style="font-weight: 800 !important"
    :options="serviceMenu"
  >
    <div class="q-pa-md horizontal-dropdown setPositionSubmenu">
      <q-list v-for="(option, index) in serviceMenu" :key="index">
        <q-item clickable v-close-popup @click="navigate(option?.link)">
          <q-item-section>
            <q-item-label style="color: red; font-weight: 600 !important;">{{ option?.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-btn-dropdown>
</template>

<script setup>
import { serviceMenu } from "../variable/variable";
import { useRouter } from "vue-router";

const router = useRouter();

function navigate(link) {
  router.push(link);
}
</script>

<style>
.not-absorot::before {
  position: relative !important;
}
.horizontal-dropdown {
  display: flex;
  flex-wrap: wrap;
}
[role=menu]{
  left: 0px !important;
  width: 100vw !important;
  max-width: 100vw !important;
}
</style>
