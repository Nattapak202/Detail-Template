<template>
  <q-page>
    <section class="top-banners">
      <div class="top-banners-bg">
        <img src="/src/assets/denmaru.svg" alt="Denmaru" class="denmaru" />
        <div class="container-lg flex column wrap q-px-lg">
          <section class="title">
            <h2 class="title-head">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h2>
          </section>
          <section class="but">
            <div class="q-py-sm request-button flex row">
              <div class="width-but">
                <ButtonNoOutline
                  to="/Instructions"
                  label="ยื่นแบบฟอร์ม"
                  @onClick="handleClick"
                  :loadingCheck="loading"
                  :outline="false"
                  size="lg"
                />
              </div>
              <div class="width-but large">
                <ButtonNoOutline
                  to="/Instructions"
                  label="ตรวจสอบสถานะ"
                  @onClick="handleClick"
                  :loadingCheck="loading"
                  :outline="true"
                  size="lg"
                />
              </div>
            </div>
          </section>
          <section class="no-id text">
            <div class="no-regis q-pt-md q-pb-sm">
              ไม่มีบัญชี?
              <router-link to="#" class="register">สมัครสมาชิก</router-link>
            </div>
            <div class="line"></div>
            <div class="text q-pb-xl q-pt-sm">
              <span class="manual"
                ><span style="font-weight: bold">คู่มือการใช้งาน </span>
                <router-link to="#" class="register">สมัครสมาชิก</router-link>
                <span class="n-line q-pl-xs"></span>
                <router-link to="#" class="register q-pl-xs"
                  >วิดิโอแนะนำ</router-link
                >
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section
      class="services q-pb-md"
      :class="{ color2: index % 2 !== 0 }"
      v-for="(category, index) in categoryService"
      :key="index"
    >
      <TitleBar :title="category.service" :typeNumber="index % 2 === 0" />
      <div
        class="row container-xl padd-service"
        v-if="!serViceMenuData[index].nested"
      >
        <ServiceList
          v-for="(props, indexNoNested) in serViceMenuData[index].serviceDetail"
          :key="indexNoNested"
          v-bind="props"
        />
      </div>
      <div v-if="serViceMenuData[index].nested">
        <div
          v-for="(propsNested, indexNested) in serViceMenuData[index]
            .serviceDetail"
          :key="indexNested"
        >
          <div class="row container-xl padd-service text-nested">
            {{ propsNested.name }}
          </div>
          <div class="row container-xl padd-service">
            <ServiceList
              v-for="(propsBoxNested, indexBoxNest) in serViceMenuData[index]
                .serviceDetail[indexNested].serviceNested"
              :key="indexBoxNest"
              v-bind="propsBoxNested"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import ButtonNoOutline from "src/components/ButtonQuasar.vue";
import TitleBar from "src/components/TitleBar.vue";
import ServiceList from "src/components/ServiceList.vue";
import { categoryService, serViceMenuData } from "src/variable/variable";
import { ref } from "vue";
defineOptions({
  name: "HomePage",
});
const loading = ref(false);
const handleClick = () => {
  console.log("CLick");
  loading.value = true;
};
</script>
<style scoped>
@media (min-width: 1200px) {
  .padd-service {
    padding-left: calc((100% - 1170px) / 2);
  }
}
.color2 {
  background: rgba(191, 191, 191, 0.2);
}
.top-banners-bg {
  background-color: rgba(255, 0, 0, 0.2) !important;
  overflow: auto;
}
.text-nested {
  align-items: center;
  color: grey;
  font-size: clamp(18px, 2vw, 25px);
  font-weight: 600;
  margin-left: 20px;
  position: relative;
}
.text-nested::before {
  content: "";
  background: red;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  filter: drop-shadow(0 0 2px crimson);
}
.title-head {
  z-index: 99;
  margin-top: 70px;
  box-sizing: border-box;
  text-wrap: wrap;
  font-size: clamp(25px, 3vw, 35px);
  font-weight: 600;
  color: #1b2234de;
  line-height: 1;
  padding-bottom: 10px;
  letter-spacing: -0.5px;
}
.request-button {
  box-sizing: border-box;
  gap: 2rem;
}
.width-but {
  min-width: 200px;
}
&,
.large {
  min-width: 250px;
}
.text {
  font-size: clamp(14px, 2vw, 16px);
}
&,
.no-regis {
  color: gray;
}

.manual {
  color: #787878;
}
.n-line {
  border-right: 1.3px solid #787878;
}
.line {
  display: inline-block;
  border-bottom: 1px rgb(159, 158, 158, 0.3) solid;
  width: 35%;
}
.denmaru {
  position: absolute;
  right: 0;
  top: 100px;
  margin-right: 25px;
  z-index: 0;
  filter: drop-shadow(0 1rem 10px crimson);
}
@media only screen and (max-width: 700px) {
  .denmaru {
    display: none;
  }
}
</style>
<style lang="scss">
.register {
  color: #121957;
  text-decoration: none;
  font-weight: 600;
}
.register:hover {
  text-decoration: underline;
}
</style>
