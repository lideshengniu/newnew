<template>
  <teleport to="body" v-if="Test.list.shili">
    <!-- 这个 -->
    <shili></shili>
  </teleport>
  <div class="ec3">
    <div class="title">
      <div>名字</div>
      <div>位置</div>
      <div>状态</div>
    </div>
    <div class="content">
      <div class="M" v-for="(items, index ) in data" :key="index">
        <div class="highlight"><a @click="ShowMessage(items.name)">{{ items.name }}</a></div>
        <div>{{ items.weizhi }}</div>
        <div class=" tag">{{ items.tags }}</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue"
import { useTestStore } from "@/store/home/index"
import shili from "./gongdian/shili.vue"
const Test = useTestStore()
const ShowMessage = (name: string) => {
  if (name === "示例1") {
    Test.list.shili = !Test.list.shili
  }

}
const data = ref([
  { key: "1", name: "示例1", weizhi: "Kxx+xxx-Kxx+xxx", tags: "预警" },
  {
    key: "8",
    name: "葛羊山",
    weizhi: "32",
    tags: "正常"
  },
  {
    key: "2",
    name: "马鞍山北互通",
    weizhi: "K43+200~k44+500",
    tags: "正常"
  },
  {
    key: "3",
    name: "太白服务器右侧",
    weizhi: "K43+200~k44+500",
    tags: "正常"
  },
  {
    key: "4",
    name: "黄梅山隧道",
    weizhi: "K43+200~k44+500",
    tags: "正常"
  },
  {
    key: "5",
    name: "钟山排土场",
    weizhi: "Y6K59+600-Y6K60+500右侧",
    tags: "正常"
  },
  {
    key: "6",
    name: "大青山尾矿库",
    weizhi: "宁芜高速K54+200-K55+600段右侧",
    tags: "正常"
  },
  {
    key: "7",
    name: "大青山尾矿库",
    weizhi: "宁芜高速K54+200-K55+600段右侧",
    tags: "正常"
  }
])
</script>
<style scoped lang='less'>
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #0e1630;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3); */
  background-color: #ccc;
}

.ec3 {
  width: 100%;
  height: 100%;
  // background-color: #ccc;
  padding: 10px 20px;
  color: #fff;
  // position: absolute;
  // top: 0;
  // left: 0;
  // z-index: 999 !important;


  .title {
    width: 100%;
    height: 50px;
    // background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
      font-weight: 700;
    }
  }

  .content {
    width: 100%;
    height: 80%;
    overflow-y: auto;

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #0e1630;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3); */
      background-color: #ccc;
    }

    .M {
      display: flex;
      // justify-content: space-around;
      // align-items: center;
      height: 60px;
      justify-content: center;

      line-height: 40px;

      .highlight {
        // background-color: red;
      }

      div {
        flex: 2;
        box-sizing: border-box;
        // margin-left: 5px;
        border-bottom: 2px solid black;
        // background-color: red;
        text-align: center;



        a:hover {
          color: red
        }
      }

      & :nth-child(1) {
        flex: 3;
        // background-color: red;

      }

      & :nth-child(2) {
        flex: 5;
        // background-color: red;
      }


    }
  }
}
</style>

