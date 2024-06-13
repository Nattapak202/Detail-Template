<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="row">
            <img src="../assets/logo.png" class="q-mr-xl" />
            <q-btn-toggle
              class="col"
              v-for="link in linksList"
              :key="link.title"
              v-bind="link"
              v-model="model"
              flat
              stretch
              toggle-color="yellow"
              :options="[{ label: link.title, value: link.title }]"
              @click="navigate(link.link)"
            />
            <div class="col-2 justify-end items-center"><q-btn outline style="color: red" label="Login" size="22px" class="q-px-xl q-py-sm " /></div>
            
              
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRouter } from "vue-router";
import { Menulist } from "src/variable/variable";

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
