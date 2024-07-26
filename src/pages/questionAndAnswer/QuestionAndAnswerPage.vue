<template>
  <q-page>
    <section class="container qt" style="margin-top: 3px">
      <div class="box">
        <div>
          <div class="title">
            <h4>
              <b class="underline"> Question-Answer </b>
            </h4>
          </div>
          <form style="margin-top: 40px">
            <div class="row">
              <div class="col-8 offset-4">
                <q-input
                  rounded
                  outlined
                  v-model="search"
                  placeholder="Search">
                  <template v-slot:append>
                    <q-icon name="search"/>
                  </template>
                </q-input>
              </div>
            </div>
          </form>
        </div>
        <div class="content">
          <div class="row">
            <div>
              <h4 class="col-3" style="margin-top: 10px">Category</h4>
 
              <!-- tab -->
              <q-splitter>
                <template v-slot:before>
                  <q-tabs v-model="currentTab"
                  vertical
                  class="text">
                    <q-tab v-for="tab in tabs" :key="tab.name" :name="tab.name" style="font-size: 20px; margin-top: 20px;">
                      {{ tab.label }}
                    </q-tab>
                  </q-tabs>
                </template>
 
                <!-- question-answer -->
                <template v-slot:after>
                  <q-tab-panels v-model="currentTab"
                  animated
                  swipeable
                  transition-prev="jump-up"
                  transition-next="jump-up">
                    <q-tab-panel v-for="tab in tabs" :key="tab.name" :name="tab.name">                      
                      <div class="text-blue text-h5 q-mb-md" style="margin-left: 50px;">{{ tab.label }}</div> <!-- ชื่อหัวข้อ -->
                      <!-- loop คำถามและคำตอบ -->
                      <q-expansion-item
                        v-for="(question, index) in tab.questions"
                        :key="index"
                        style="font-size: 20px; margin-top: 20px; margin-left: 60px;"
                        expand-separator
                        hide-expand-icon
                        :label="question.label">
                        <q-card-section>{{ question.answer }}</q-card-section>
                      </q-expansion-item>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>
 
<script setup>
import { ref } from 'vue';
 
const tabs = ref([
  { name: 'text1', label: 'ระบบ New PRM', questions: [
    { label: '1. ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ เปิดให้บริการเมื่อใด',
      answer: 'ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ หรือ New เปิดให้บริการตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '2. ระบบเดิมใช้ได้ถึงวันที่ 5 ตุลาคม 2564 ใช่หรือไม่',
      answer: 'ระบบเดิมใช้ได้ถึงวันที่ 30 มิถุนายน 2564 และเริ่มใช้ตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '3. ระบบ New PRM พร้อมให้บริการทุกประเภทแบบแสดงรายการหรือไม่',
      answer: 'ตั้งแต่วันที่ 6 ตุลาคม 2564 พร้อมให้บริการทุกประเภทแบบ ยกเว้นแบบ ภ.ง.ด 93 และแบบแสดงรายการภาษีเงินได้ปิโตรเลียม และแบบภาษีการรับมรดก' }
  ] },
  { name: 'text2', label: 'โปรแกรมใช้งาน', questions: [
    { label: '1. ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ เปิดให้บริการเมื่อใด',
      answer: 'ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ หรือ New เปิดให้บริการตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '2. ระบบเดิมใช้ได้ถึงวันที่ 5 ตุลาคม 2564 ใช่หรือไม่',
      answer: 'ระบบเดิมใช้ได้ถึงวันที่ 30 มิถุนายน 2564 และเริ่มใช้ตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '3. ระบบ New PRM พร้อมให้บริการทุกประเภทแบบแสดงรายการหรือไม่',
      answer: 'ตั้งแต่วันที่ 6 ตุลาคม 2564 พร้อมให้บริการทุกประเภทแบบ ยกเว้นแบบ ภ.ง.ด 93 และแบบแสดงรายการภาษีเงินได้ปิโตรเลียม และแบบภาษีการรับมรดก' }
  ] },
  { name: 'text3', label: 'สมัครใช้บริการ', questions: [
    { label: '1. ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ เปิดให้บริการเมื่อใด',
      answer: 'ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ หรือ New เปิดให้บริการตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '2. ระบบเดิมใช้ได้ถึงวันที่ 5 ตุลาคม 2564 ใช่หรือไม่',
      answer: 'ระบบเดิมใช้ได้ถึงวันที่ 30 มิถุนายน 2564 และเริ่มใช้ตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '3. ระบบ New PRM พร้อมให้บริการทุกประเภทแบบแสดงรายการหรือไม่',
      answer: 'ตั้งแต่วันที่ 6 ตุลาคม 2564 พร้อมให้บริการทุกประเภทแบบ ยกเว้นแบบ ภ.ง.ด 93 และแบบแสดงรายการภาษีเงินได้ปิโตรเลียม และแบบภาษีการรับมรดก' }
  ] },
  { name: 'text4', label: 'การยืนยันตัวตน', questions: [
    { label: '1. ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ เปิดให้บริการเมื่อใด',
      answer: 'ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ หรือ New เปิดให้บริการตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '2. ระบบเดิมใช้ได้ถึงวันที่ 5 ตุลาคม 2564 ใช่หรือไม่',
      answer: 'ระบบเดิมใช้ได้ถึงวันที่ 30 มิถุนายน 2564 และเริ่มใช้ตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '3. ระบบ New PRM พร้อมให้บริการทุกประเภทแบบแสดงรายการหรือไม่',
      answer: 'ตั้งแต่วันที่ 6 ตุลาคม 2564 พร้อมให้บริการทุกประเภทแบบ ยกเว้นแบบ ภ.ง.ด 93 และแบบแสดงรายการภาษีเงินได้ปิโตรเลียม และแบบภาษีการรับมรดก' }
  ] },
  { name: 'text5', label: 'เข้าสู่ระบบ', questions: [
    { label: '1. ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ เปิดให้บริการเมื่อใด',
      answer: 'ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ หรือ New เปิดให้บริการตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '2. ระบบเดิมใช้ได้ถึงวันที่ 5 ตุลาคม 2564 ใช่หรือไม่',
      answer: 'ระบบเดิมใช้ได้ถึงวันที่ 30 มิถุนายน 2564 และเริ่มใช้ตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '3. ระบบ New PRM พร้อมให้บริการทุกประเภทแบบแสดงรายการหรือไม่',
      answer: 'ตั้งแต่วันที่ 6 ตุลาคม 2564 พร้อมให้บริการทุกประเภทแบบ ยกเว้นแบบ ภ.ง.ด 93 และแบบแสดงรายการภาษีเงินได้ปิโตรเลียม และแบบภาษีการรับมรดก' }
  ] },
  { name: 'text6', label: 'จัดการบัญชีสมาชิก', questions: [
    { label: '1. ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ เปิดให้บริการเมื่อใด',
      answer: 'ระบบยื่นแบบและชำระภาษีออนไลน์ระบบใหม่ หรือ New เปิดให้บริการตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '2. ระบบเดิมใช้ได้ถึงวันที่ 5 ตุลาคม 2564 ใช่หรือไม่',
      answer: 'ระบบเดิมใช้ได้ถึงวันที่ 30 มิถุนายน 2564 และเริ่มใช้ตั้งแต่วันที่ 6 ตุลาคม 2564' },
    { label: '3. ระบบ New PRM พร้อมให้บริการทุกประเภทแบบแสดงรายการหรือไม่',
      answer: 'ตั้งแต่วันที่ 6 ตุลาคม 2564 พร้อมให้บริการทุกประเภทแบบ ยกเว้นแบบ ภ.ง.ด 93 และแบบแสดงรายการภาษีเงินได้ปิโตรเลียม และแบบภาษีการรับมรดก' }
  ] },
]);
 
const currentTab = ref('text1'); // Default tab
 
const search = ref(''); // Search input model
 
</script>
 
<style scoped>
.form-control {
  width: calc(90% - 50px);
  /* color: rgba(27, 34, 53, 0.87); */
  border-radius: 100px 0 0 100px;
  padding: 0 20px;
  height: 55px;
  border: 1px solid #e2e2e2;
}
.box .title .underline {
  border-bottom: 3px solid Crimson;
  padding: 5px;
  margin: 20px auto;
}
.nav,
.flex-column {
  /* display: -ms-flexbox; */
  flex-direction: column !important;
  display: flex;
  /* -ms-flex-wrap: wrap; */
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.container {
  max-width: 1170px;
  padding: 0;
  padding-bottom: 100px;
}
.qt .content {
  margin-top: 40px;
}
.pl-5 {
  padding-left: 3rem !important;
}
</style>
 