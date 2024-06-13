<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="q-mp-xl row">
            <div class="flex">
              <img src="../assets/logo.png" style="height: rem" />
            </div>
            <q-separator vertical />
            <div class="flex" v-for="link in linksList" :key="link.title">
              <q-separator vertical />
              <ButtonDropdown :class="{ hidden: link.link !=='/Instructions' }" :options='{serviceMenu}' />
              <q-btn-toggle
                :class="{ hidden: link.link =='/Instructions' }"
                v-bind="link"
                flat
                stretch
                toggle-color="yellow"
                :options="[{ label: link.title, value: link.title }]"
                @click="navigate(link.link)"
              />
              <q-separator vertical />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRouter } from "vue-router";
import { Menulist,serviceMenu } from "src/variable/variable";
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
