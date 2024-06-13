<template>
  <q-page>
    <section class="top-banners">
      <div class="top-banners-bg">
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
    <section>
      <TitleBar title="แนะนำบริการ"/>
    </section>
    <section class="services">
      <div class="row container-lg q-pb-xl">
        <ServiceList
          v-for="(props, index) in fakePropsArray"
          :key="index"
          v-bind="props"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import ButtonNoOutline from "src/components/ButtonQuasar.vue";
import TitleBar from "src/components/TitleBar.vue";
import ServiceList from "src/components/ServiceList.vue";
import { ref } from "vue";
defineOptions({
  name: "HomePage",
});
const fakePropsArray = [
  {
    icon: "settings",
    color: "blue",
    size: "lg",
    link: "/Q&A",
    title: "Home",
    detail: "Welcome to our home page",
  },
  {
    icon: "settings",
    color: "blue",
    size: "lg",
    link: "/Q&A",
    title: "Home",
    detail: "Welcome to our home page",
  },
  {
    icon: "settings",
    color: "red",
    size: "lg",
    link: "/Q&A",
    title: "Profile",
    detail: "View and edit your profile information",
  },
  {
    icon: "settings",
    color: "blue",
    size: "lg",
    link: "/Q&A",
    title: "Home",
    detail: "Welcome to our home page",
  },
  {
    icon: "settings",
    color: "red",
    size: "lg",
    link: "/Q&A",
    title: "Profile",
    detail: "View and edit your profile information",
  },
];
const loading = ref(false);
const handleClick = () => {
  console.log("CLick");
  loading.value = true;
};
</script>
<style scoped>
.bor {
  border: 1px solid red;
}
.top-banners-bg {
  background-color: #f2fdf2 !important;
  overflow: auto;
}
.title-head {
  margin-top: 70px;
  box-sizing: border-box;
  text-wrap: wrap;
  font-size: clamp(25px, 1vw, 35px);
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
  font-size: clamp(14px, 2vw, 18px);
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
  border-bottom: 1px rgb(159, 158, 158,0.3) solid;
  width: 35%;
}
</style>
<style lang="scss">
.register {
  color: $buttonnooutlinecolr;
  text-decoration: none;
}
.register:hover {
  text-decoration: underline;
}
</style>
