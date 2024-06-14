<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-color-menubar">
        <q-toolbar-title>
          <div class="q-mp-xl row">
            <div class="flex">
              <img src="../assets/logo.png" style="height: auto" />
            </div>
            <div
              class="flex q-mx-xl"
              v-for="link in linksList"
              :key="link.title"
            >
              <ButtonDropdown
                :class="{ hidden: link.link !== '/Instructions' }"
                :options="{ serviceMenu }"
              />
              <q-btn 
              :class="{ hidden: link.link == '/Instructions' }" 
              style="font-weight: 800 !important; position: relative !important;"
              :label= link?.title
              :value=link?.title 
              @click="navigate(link.link)" />
              <!-- <q-separator vertical /> -->
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>

    <q-footer class="bg-white text-black q-py-md">
      <q-toolbar class="container-lg">
        <q-toolbar-title class="row footerFontSize">
          <div class="col-5">
            <img src="../assets/logo.png" style="height: auto" />
            <div class="q-py-sm">SIAM DENSO MANUFACTURING CO.,LTD</div>
            <div class="q-py-sm">SIAM KYOSAN DENSO CO.,LTD</div>
            <q-icon class="q-px-sm" name="assignment_ind" size="2rem" />
            <q-icon class="q-px-sm" name="travel_explore" size="2rem" />
          </div>
          <div class="col-7">
            <div class="row">
              <div class="col-4">
                <div class="footerFontSizeheader">SERVICES</div>
                <div class="q-py-sm">APAL</div>
                <div class="q-py-sm">ESS</div>
              </div>
              <div class="col-4">
                <div class="footerFontSizeheader">ABOUT</div>
                <div class="q-py-sm">About us</div>
                <div class="q-py-sm">News</div>
                <div class="q-py-sm">Contact us</div>
              </div>
              <div class="col-4">
                <div class="footerFontSizeheader">CONTACT</div>
                <div class="q-py-sm">038-210-100</div>
              </div>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRouter } from "vue-router";
import { Menulist, serviceMenu } from "src/variable/variable";
import ButtonDropdown from "../components/ButtonDropdown.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = Menulist;

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const model = ref("one");

const router = useRouter();

function navigate(link) {
  router.push(link);
}
</script>

<style>
.bg-color-menubar {
  background-color: white !important;
  color: red;
}
.footerFontSize {
  font-size: clamp(10px, 2vw, 14px);
}
.footerFontSizeheader {
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 600;
}
.headerFontSizeheader {
  font-weight: 800 !important;
}
.q-btn:before{
  position: relative;
}
</style>
