<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item key="1" class="menu-item" @click="sy">
      <pie-chart-outlined />
      <span>首页</span>
    </a-menu-item>
    <a-menu-item key="12" class="menu-item">
      <WarningOutlined />

      <span @click="insarsjgz">InSAR数据感知</span>
    </a-menu-item>
    <a-sub-menu key="sub3" class="menu-item">
      <template #title>
        <span>
          <AreaChartOutlined />
          <span>地表数据感知</span>
        </span>
      </template>
      <a-menu-item key="6" @click="gbp()">高边坡</a-menu-item>
      <a-menu-item key="7" @click="tdql()">特大桥梁</a-menu-item>
      <a-menu-item key="8" @click="shruanji()">深厚软基</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub4" class="menu-item">
      <template #title>
        <span>
          <team-outlined />
          <span>数据应用</span>
        </span>
      </template>
      <a-sub-menu key="sub5" class="menu-item">
        <template #title>
          <span> 勘察设计阶段 </span>
        </template>
        <a-menu-item key="116" @click="dzks()">对症勘设</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub6" class="menu-item">
        <template #title>
          <span> 施工阶段 </span>
        </template>

        <a-menu-item key="10" @click="bpkw()">边坡开挖监测</a-menu-item>
        <a-menu-item key="101" @click="rjyy()">软基预压效果</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub7" class="menu-item">
        <template #title>
          <span> 运营阶段 </span>
        </template>

        <a-menu-item key="11" @click="bxyy()">靶向管养</a-menu-item>
        <a-sub-menu key="sub16" class="menu-item">
          <template #title>
            <span> 监测预警 </span>
          </template>

          <a-menu-item key="1000">桥梁</a-menu-item>
          <a-menu-item key="1001" @click="yyjdjcyjbp()">边坡</a-menu-item>
          <a-menu-item key="1002" @click="yyjdjceyjrj()">软基</a-menu-item>
          <a-menu-item key="1003">尾矿坝</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-sub-menu>
    <a-menu-item key="122" class="menu-item">
      <user-outlined />

      <span>用户管理</span>
    </a-menu-item>
  </a-menu>
</template>
<script setup lang="ts">
import { Emitter } from "mitt"
import { useRouter, useRoute, Router, RouteRecordName } from "vue-router"
import { ref, reactive, Ref, computed, toRaw, markRaw, onUnmounted, onMounted, nextTick, watch, watchEffect } from "vue"
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  EnvironmentOutlined,
  WarningOutlined,
  AreaChartOutlined
} from "@ant-design/icons-vue"
// import { showinsar } from "./insar/index"
import { useWidgetStore, useWidget } from "@mars/common/store/widget"
import { useTestStore } from "@/store/home/index"
const Test = useTestStore()
const selectedKeys = ref<string[]>(["2"])
const router = useRouter()
const curRoute = useRoute()
const { activate, isActivate, disable, disableAll } = useWidget()
const gaopo = ref("gaopo")
const file = ref("file")
const Mine = ref("Mine")
const road = ref("road")
const bridge = ref("bridge")
const sy = () => {
  Test.ShowEcharts()
  disableAll(true)
  activate("toolbar")
  console.log(Test.showechart, "s")
}
const insarsjgz = () => {
  Test.ShowInsar()
  disableAll(true)
  activate("demo-manage-layers")
  activate("insarsjgzechart")
  activate("insarsjgzallroad")
}

const shruanji = () => {
  console.log(1)
  Test.ShowInsar()
  disableAll(true)

  activate("rjcjqx")
  activate("rjcgq")
  // activate("road")
  activate("dbsjgzgdb")
}
const bpkw = () => {
  Test.ShowInsar()
  disableAll(true)
  // disableAll(true)
  activate("bpkw")
}
const rjyy = () => {
  Test.ShowInsar()
  disableAll(true)
  activate("rjyy")
}
function dzks() {
  Test.ShowInsar()
  disableAll(true)
  activate("dzks")
}

const gbp = () => {
  Test.ShowInsar()
  disableAll(true)
  activate("dbsjgzgbpcgq")
  activate("dbsjgzgbplayer")
  activate("dbsjgzgbpgdb")
}
const tdql = () => {
  Test.ShowInsar()
  disableAll(true)
  activate("dbsjgztdqlcgq")
  activate("dbsjgztdqllayer")
  activate("dbsjgztdqlgdb")
}
const bxyy = () => {
  Test.ShowInsar()
  disableAll(true)

  activate("bxyy")
  activate("bxyydt")
}
// const jcbp = () => {
//   Test.showechart()
//   disableAll(true)
//   activate("jcbp")
// }
// const showgbp = ref(false)
function yyjdjceyjrj() {
  Test.ShowInsar()
  disableAll(true)
  activate("yyjdjceyjrj")
  activate("yyjdjceyjrjys")
  activate("yyjdjceyjrjcgq")
  activate("yyjdjcyjrjditu")
}
function yyjdjcyjbp() {
  Test.ShowInsar()
  disableAll(true)
  activate("yyjdjcyjbpcgq")
  activate("yyjdjcyjbpditu")
  activate("yyjdjcyjbpyujing")
  activate("yyjdjcyjbp")
}

console.log("yes")
// function showinsar() {}
const buildshow = ref(false)
function Building() {
  buildshow.value = !buildshow.value
  if (buildshow.value) {
    activate("file")
  } else {
    disable("file")
  }
}
const sensorsshow = ref(false)
function Sensors() {
  sensorsshow.value = !sensorsshow.value
  if (sensorsshow.value) {
    activate("jiance")
  } else {
    disable("jiance")
  }
}
const mineshow = ref(false)

const mineshows = ref(false)
function MineSee() {
  mineshows.value = !mineshows.value
  if (mineshows.value) {
    activate("road")
  } else {
    disable("road")
  }
}
// const showAreas = ref(false)

// function showinsar(show: boolean): void {}
</script>
<style scoped lang="less">
.menu-item {
  font-size: 15px !important;
  // width:1rem
  margin-top: 40px !important;
  /* color: rgb(35, 99, 219) !important; */
}

.bbody {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  /* 100%的窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* 渐变背景 */
  background-color: aqua;
}
</style>
