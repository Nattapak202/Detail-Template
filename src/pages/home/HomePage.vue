<template>
  <q-page>
    <section class="top-banners">
      <div class="top-banners-bg">
        <div class="container top-banner-flex">
          <div class="season bor">
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          </div>
          <div class="bor">
            <q-btn style="background: #61C161; color:white;" label="Secondary"  />
          </div>
          <div class="bor">ปุ่ม</div>
        </div>
      </div>
    </section>
    <section class="services">service</section>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "HomePage",
});
</script>
<style scoped>
.bor {
  border: 1px solid red;
}
.top-banners-bg {
  background-color: #f2fdf2 !important;
  /* padding-bottom: 25rem; */
  overflow: auto;
}
.season {
  margin-top: 70px;
  box-sizing: border-box;
}
.season h2 {
  font-size: clamp(18px, 2vw, 28px);
  font-weight: 600;
  color: #1b2234de;
  line-height: 0;
  padding-bottom: 10px;
  letter-spacing: -0.5px;
}
.top-banner-flex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>
