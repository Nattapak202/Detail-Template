<template>
    <div class="fullscreen bg-white text-red text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 30vh">
            Oops. ...
        </div>
  
        <div class="text-h2" style="opacity:.4">
          The page is developing.
        </div>
  
        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </template>
  
  <script setup>
  defineOptions({
    name: 'ErrorNotFound'
  });
  </script>
  