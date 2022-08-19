<template>
  <Header />
  <div class="home">
    <div class="zuo" v-show="Test.showechart">
      <div class="zuo-zuo zuo-1">
        <left1 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
      <div class="zuo-zuo zuo-2">
        <left2 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
      <div class="zuo-zuo zuo-3">
        <left3 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
    </div>
    <div class="zhong">
      <div class="middle-big-box">
        <div class="top">
          <div id="left">
            <ul class="left-ul">
              <li class="liinsar">
                <img src="../../assets/icon/边坡.png" alt="" />
                <div class="span insar">
                  <div>InSAR</div>
                  <div>数据感知</div>
                </div>
                <div class="sjyykid"></div>
              </li>
              <sjgz></sjgz>
              <div class="open span"><img src="../../assets/icon/全屏.png" /></div>
            </ul>
          </div>
          <div id="zhong">
            <div class="zhuangshi"></div>
            <div class="ditu">
              <div class="ditucontent">
                <mars />
              </div>
              <!-- ishow === -->
              <div class="erjicaidan" v-show="ishow === true">
                <h2>{{ title }}</h2>
                <div class="erjicaidandata" v-for="(v, ind) in namedata2.children" :key="ind">
                  {{ v.title }}
                </div>
                <div class="btn" @click="ishow = false" v-show="ishow === true">关闭</div>
              </div>
            </div>
          </div>
          <sjyy></sjyy>
        </div>
        <div class="bottom"></div>
      </div>
      <div class="panel-zhong">
        <div class="inner-zhong"></div>
      </div>
    </div>
    <div class="you" v-show="Test.showechart">
      <div class="you-you you-1">
        <right1 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
      <div class="you-you you-2">
        <right2 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
      <div class="you-you you-3">
        <right3 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/Header.vue"
import sjyy from "./components/Function/sjyy.vue"
import chart from "./chart/index.vue"
import mars from "@mars/views/index.vue"
import left1 from "./components/Left/ec1.vue"
import left2 from "./components/Left/ec2.vue"
import left3 from "./components/Left/ec3.vue"
import right1 from "./components/Right/ec1.vue"
import right2 from "./components/Right/ec2.vue"
import right3 from "./components/Right/ec3.vue"
import { useTestStore } from "@/store/home/index"
import sjgz from "./components/Function/sjgz.vue"
import { ref, Ref, onMounted } from "vue"
const getImageUrl = (name) => {
  return new URL(`${name}`, import.meta.url).href
}

// 数据模拟
const namedata: any = ref([
  {
    id: 1,
    name: "数据感知",
    children: [
      {
        title: "高边坡",
        imgsss: "../../assets/icon/边坡.png",
        key: 1,
        children: []
      },
      {
        title: "特大桥梁",
        imgsss: "../../assets/icon/桥梁.png",
        key: 2,
        children: []
      },
      {
        title: "深厚软基",
        imgsss: "../../assets/icon/道路巡查.png",
        key: 3,
        children: []
      }
    ]
  },
  {
    id: 2,
    name: "数据应用",
    children: [
      {
        title: "勘查阶段",
        img: "../../assets/icon/工程检查.png",
        key: 1,
        children: [
          {
            title: "对症勘设",
            img: "../../assets/icon/边坡.png",
            key: 1
          }
        ]
      },
      {
        title: "施工阶段",
        img: "../../assets/icon/施工.png",
        key: 2,
        children: [
          {
            title: "边坡开挖监测",
            img: "../../assets/icon/边坡.png",
            key: 1
          },
          {
            title: "日软基预压效果",
            img: "../../assets/icon/边坡.png",
            key: 2
          }
        ]
      },
      {
        title: "运营阶段",
        img: "../../assets/icon/运营管理.png",
        key: 3,
        children: [
          {
            title: "靶向营养",
            img: "../../assets/icon/边坡.png",
            key: 1,
            children: []
          },
          {
            title: "监测预警",
            img: "../../assets/icon/边坡.png",
            key: 2,
            children: [
              {
                title: "桥梁",
                img: "../../assets/icon/边坡.png",
                key: 1,
                children: []
              },
              {
                title: "边坡",
                img: "../../assets/icon/边坡.png",
                key: 2,
                children: []
              },
              {
                title: "软基",
                img: "../../assets/icon/边坡.png",
                key: 3,
                children: []
              },
              {
                title: "尾矿坝",
                img: "../../assets/icon/边坡.png",
                key: 4,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
])

// 点击事件
const ishow = ref(false)
const namedata2: any = ref({})
const title: any = ref()
const getData = (items) => {
  if (ishow.value === false) {
    ishow.value = true
    title.value = items.title
    namedata2.value = items
    console.log(namedata2.value)
  } else {
    ishow.value = false
  }
}

console.log()
const Test = useTestStore()
</script>
<style scoped lang="less">
.panel {
  position: absolute;
  top: 4%;
  left: 2%;
  border: 35px solid transparent;
  border-width: 80px 60px 20px 150px;
  border-image-source: url(./images/border.png);
  border-image-slice: 51 38 20 132;
  margin-bottom: 20px;
  color: red;
  width: 96%;
  height: 92%;
  z-index: 1;
  pointer-events: none; // 禁止鼠标事件

  .inner {
    position: absolute;
    /* 将边框的宽度设置负值 */
    top: 20px;
    left: 100px;
    bottom: 100px;
    right: 100px;
    padding: 100px;
  }
}

.home {
  display: flex;
  width: 100%;
  height: calc(100% - 110px);

  .zuo {
    height: 100%;
    flex: 2.5;
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;

    &-zuo {
      box-sizing: border-box;
      padding: 10px;
      flex: 3.3;
      position: relative;

      .Zinex {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    }

    &-1 {
      width: 100%;
      height: 33%;
    }

    &-2 {
      width: 100%;
      height: 34%;
    }

    &-3 {
      width: 100%;
      height: 33%;
    }
  }

  .zhong {
    height: 100%;
    flex: 5;
    padding: 20px;
    position: relative;
    border-radius: 0 100px 0 100px !important;
    // overflow: hidden !important;

    .middle-big-box {
      position: absolute;
      top: 2%;
      left: 2%;
      width: 96%;
      height: 96%;

      .top {
        width: 100%;
        height: 85%;
        display: flex;

        #left {
          width: 110px;
          // height: 100%;
          display: flex;
          justify-content: center;
          margin-top: 80px;
          box-sizing: border-box;

          .left-ul {
            width: 90px;
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: center;

            .liinsar {
              width: 110px;
              height: 100px;
              background-color: #ffffff0d;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              img {
                width: 40px;
                height: 40px;
                display: block;
              }
              .span {
                color: #2089fd;
              }
              .insar {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                // padding-bottom: 7px;
              }
            }
            .sjgz {
              background-color: #ffffff0d;
              width: 110px;
              padding-bottom: 10px;
              // height: 80px;
              h3 {
                color: #ccc;
                font-weight: 700;
                text-align: center;
                margin-top: 13px;
                margin-bottom: 13px;
                font-size: 16px;
                font-weight: 700;
              }
              li {
                width: 80px;
                height: 80px;
                background-color: #ccc;
                margin-bottom: 10px;
                border-radius: 5px;
                margin-left: 18px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                border-radius: 5px;
                background-color: #1e56a04d;
                border: 2px solid rgb(23, 73, 140);

                &:hover {
                  cursor: pointer;
                }

                img {
                  width: 40px;
                  height: 40px;
                  display: block;
                }
                .span {
                  color: #2089fd;
                }
                .insar {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  // padding-bottom: 7px;
                }
              }
            }
            .open {
              width: 110px;
              height: 80px;
              text-align: center;
              background-color: #ffffff0d;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 20px;
              img {
                width: 50px;
                height: 50px;
                margin-left: 10px;
              }
            }
            span {
              color: #2089fd;
            }
          }
        }
        #zhong {
          flex: 1;

          .zhuangshi {
            height: 30px;
            width: 100%;
          }

          .ditu {
            height: calc(100% - 30px);
            // height: 100%;
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            position: relative;

            .erjicaidan {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(75, 182, 236, 0.241);
              animation: erjicaidandataDH 0.3s;
              .btn {
                position: absolute;
                width: 150px;
                border-radius: 15px 15px;
                background-color: rgba(56, 196, 238, 0.6);
                height: 80px;
                bottom: 50%;
                left: 50%;
                transform: translate(-50%, 400%);
                font-size: 35px;
                line-height: 80px;
                text-align: center;
              }
              h2 {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                font-weight: 700;
                margin-top: 20px;
                margin-bottom: 50px;
              }

              .erjicaidandata {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 280px;
                height: 80px;
                background-color: #ccc;
                margin-bottom: 30px;
                position: relative;
                margin-left: 70px;
                animation: erjicaidandataDH 0.3s;
                &:hover {
                  cursor: pointer;
                }
              }

              .erjicaidandata:nth-child(1) {
                margin-top: 80px;
              }
            }
            @keyframes erjicaidandataDH {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            .ditucontent {
              height: 100%;
              width: 100%;
              background-color: #ccc;
              position: relative;
            }
          }
        }
      }

      .bottom {
        width: 100%;
        height: 15%;
      }
    }

    //边框图片装饰
    .panel-zhong {
      position: absolute;
      top: 2%;
      left: 2%;
      border: 35px solid transparent;
      border-width: 80px 60px 20px 150px;
      border-image-source: url(./images/border.png);
      border-image-slice: 51 38 20 132;
      margin-bottom: 20px;
      color: red;
      width: 96%;
      height: 96%;
      pointer-events: none; // 禁止鼠标事件

      .inner-zhong {
        position: absolute;
        /* 将边框的宽度设置负值 */
        top: 20px;
        left: 100px;
        bottom: 100px;
        right: 100px;
        padding: 100px;
      }
    }
  }

  .you {
    height: 100%;
    flex: 2.5;
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
    &-you {
      box-sizing: border-box;
      padding: 10px;
      flex: 3.3;
      position: relative;
      // pointer-events: none; // 禁止鼠标事件

      // .Zinex {
      //   // position: absolute;
      //   // top: 0;
      //   // left: 0;
      //   // width: 100%;
      //   // height: 100%;
      //   // z-index: 9999 !important;
      // }
    }

    &-1 {
      width: 100%;
      height: 33%;
    }

    &-2 {
      width: 100%;
      height: 34%;
    }

    &-3 {
      width: 100%;
      height: 33%;
    }
  }
}
</style>
