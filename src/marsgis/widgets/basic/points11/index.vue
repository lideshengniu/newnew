<template>
  <mars-dialog title="形变" top="90" left="10" bottom="300" width="1600">
    <div class="bg container-last-chart">
      <div class="right_item">
        <div class="_item_top item_bottom">
          <div class="_item_title">形变值曲线</div>
        </div>
        <div class="_item_full_box">
          <div class="bar">
            <div id="line" ref="line" class="bar_chart"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg container-last-chart">
      <div class="right_item">
        <div class="_item_top item_bottom">
          <div class="_item_title">形变速度值曲线</div>
        </div>
        <div class="_item_full_box">
          <div class="bar">
            <div id="line2" ref="line2" class="bar_chart"></div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="bg container-last-chart">
      <div class="right_item">
        <div class="_item_top item_bottom">
          <div class="_item_title">能耗趋势</div>
        </div>
        <div class="_item_full_box">
          <div class="bar">
            <div id="line3" ref="line3" class="bar_chart"></div>
          </div>
        </div>
      </div>
    </div> -->
  </mars-dialog>
</template>
<script lang="ts" setup>
import { nextTick, onMounted, ref, onBeforeMount } from "vue"
import * as echarts from "echarts"
import { useTestStore } from "@/store"
// 折线图
let points
onBeforeMount(() => {
  const Test = useTestStore()
  points = Test.point
  console.log("get points", points)
})
const line = ref()
// const line2 = ref()
// const line3 = ref()
onMounted(() => {
  nextTick(() => {
    initEcharts()
  })
})
function initEcharts() {
  const myChart1 = echarts.init(line.value, "dark")

  //   const myChart5 = echarts.init(line3.value, "dark")
  const option1 = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      show: true,
      confine: true,
      textStyle: {
        align: "left"
      },
      formatter: function (item: any) {
        let html = item[0].axisValue * 1 + "日"
        item.slice(0).forEach((s: any) => {
          if (s.seriesName.indexOf("series") === -1) {
            html += `<br/> ${s.seriesName}:${s.data}mm`
          }
        })
        return html
        // return  '{b0}<br/>{a1}: {c1}<br/>{a2}: {c2}'
      },
      // formatter: '{b0}<br/>{a1}: {c1}<br/>{a2}: {c2}',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "none" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      show: true,
      // data:[""]
      top: "0%",
      left: "center",
      icon: "circle",
      type: "scroll",
      itemHeight: fontSize(0.5),
      itemWidth: fontSize(0.5),
      textStyle: {
        fontSize: fontSize(0.6)
      }
    },
    grid: {
      left: "2%",
      right: "0%",
      top: "18%",
      bottom: "15%",
      containLabel: true
    },
    xAxis: {
      position: "bottom",
      type: "category",
      /* "points.D_20200112","points.D_20200124","points.D_20200205","points.D_20200217","points.D_20200229","points.D_20200312","points.D_20200324","points.D_20200405","points.D_20200417","points.D_20200429",
      "points.D_20200511","points.D_20200523",
      "points.D_20200604","points.D_20200616",
      "points.D_20200628","points.D_20200710",
      "points.D_20200722","points.D_20200803",
      "points.D_20200815","points.D_20200827",
      "points.D_20200908","points.D_20200920",
      "points.D_20201002","points.D_20201010",
      "points.D_20201026","points.D_20201107",
      "points.D_20201201","points.D_20201213",
      "points.D_20201225","points.D_20210106",
      "points.D_20210118","points.D_20210130",
      "points.D_20210211","points.D_20210118",
      "points.D_20210130","points.D_20210211",
      "points.D_20210223","points.D_20210307",
      "points.D_20210319","points.D_20210331",
      "points.D_20210412","points.D_20210424",
      "points.D_20210506","points.D_20210518",
      "points.D_20210530","points.D_20210611",
      "points.D_20210623","points.D_20210705",
      "points.D_20210717","points.D_20210729",
      "points.D_20210810","points.D_20210822",
      "points.D_20210903","points.D_20210927",
      "points.D_20211021","points.D_20211102",
      "points.D_20211114","points.D_20211220",
      "points.D_20220101","points.D_20220125",
      "points.D_20220206","points.D_20220314",
      "points.D_20220326","points.D_20220407",
      "points.D_20220419","points.D_20220501",
      "points.D_20220525","points.D_20220606",
      "points.D_20220630","points.D_20220724"



      */
      data: [
        "200112",
        "200124",
        "200205",
        "200217",
        "200229",
        "200312",
        "200324",
        "200405",
        "200417",
        "200429",
        "200511",
        "200523",
        "200604",
        "200616",
        "200628",
        "200710",
        "200722",
        "200803",
        "200815",
        "200827",
        "200908",
        "200920",
        "201002",
        "201014",
        "201026",
        "201107",
        "201201",
        "201213",
        "201225",
        "210106",
        "210118",
        "210130",
        "210211",
        "210223",
        "210307",
        "210319",
        "210331",
        "210412",
        "210424",
        "210506",
        "210518",
        "210530",
        "210611",
        "210623",
        "210705",
        "210717",
        "210729",
        "210810",
        "210822",
        "210903",
        "210927",
        "211009",
        "211021",
        "211102",
        "211114",
        "211220",
        "220101",
        "220125",
        "220206",
        "220314",
        "220326",
        "220407",
        "220419",
        "220501",
        "220525",
        "220606",
        "220630",
        "220724"
      ],
      axisTick: {
        // 坐标轴
        alignWithLabel: false,
        show: true,
        lineStyle: {
          color: "#ccc"
        }
      },
      minorTick: { splitNumber: 5, length: 3 },
      axisLine: {
        // show: "false",
        onZero: "false",
        // 坐标轴轴线相关设置
        lineStyle: {
          color: "#ccc"
        }
      },
      axisLabel: {
        // X轴文字样式
        fontSize: fontSize(0.6875),
        interval: 0,
        padding: [10, 0, 0, 0]
      },
      splitLine: {
        show: "false" // 平行y轴的分割线
      },
      show: true
    },
    yAxis: {
      //   min: -50,
      //   max: 0,
      type: "value",
      name: "mm",
      axisLabel: {
        fontSize: fontSize(0.6875),
        interval: 0,
        padding: [0, 0, 0, 0]
      },
      nameLocation: "end",
      nameTextStyle: {
        align: "center",
        verticalAlign: "middle",
        borderDashOffset: 0,
        padding: [6, 6, 6, 6]
      },
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#ccc"
        }
      },
      axisTick: {
        alignWithLabel: false,
        show: true,
        lineStyle: {
          color: "#ccc"
        }
      }
    },
    dataZoom: {
      type: "slider",
      id: "沉降",
      show: true,
      handleStyle: { color: "red" },
      start: 1,
      end: 35
    },
    series: [
      {
        name: "形变值",
        type: "line",
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "rgba(14,227,247,1)"
        },
        barGap: "-100%",
        barWidth: 12,
        z: -8,
        data: [
          points.D_20200112,
          points.D_20200124,
          points.D_20200205,
          points.D_20200217,
          points.D_20200229,
          points.D_20200312,
          points.D_20200324,
          points.D_20200405,
          points.D_20200417,
          points.D_20200429,
          points.D_20200511,
          points.D_20200523,
          points.D_20200604,
          points.D_20200616,
          points.D_20200628,
          points.D_20200710,
          points.D_20200722,
          points.D_20200803,
          points.D_20200815,
          points.D_20200827,
          points.D_20200908,
          points.D_20200920,
          points.D_20201002,
          points.D_20201014,
          // points.D_20201010,
          points.D_20201026,
          points.D_20201107,
          points.D_20201201,
          points.D_20201213,
          points.D_20201225,
          points.D_20210106,
          points.D_20210118,
          points.D_20210130,
          points.D_20210211,
          points.D_20210118,
          points.D_20210130,
          points.D_20210211,
          points.D_20210223,
          points.D_20210307,
          points.D_20210319,
          points.D_20210331,
          points.D_20210412,
          points.D_20210424,
          points.D_20210506,
          points.D_20210518,
          points.D_20210530,
          points.D_20210611,
          points.D_20210623,
          points.D_20210705,
          points.D_20210717,
          points.D_20210729,
          points.D_20210810,
          points.D_20210822,
          points.D_20210903,
          points.D_20210927,
          points.D_20211021,
          points.D_20211102,
          points.D_20211114,
          points.D_20211220,
          points.D_20220101,
          points.D_20220125,
          points.D_20220206,
          points.D_20220314,
          points.D_20220326,
          points.D_20220407,
          points.D_20220419,
          points.D_20220501,
          points.D_20220525,
          points.D_20220606,
          points.D_20220630,
          points.D_20220724
        ]
      },
      {
        type: "bar",
        itemStyle: {
          color: "rgba(0,0,0,0.2)"
        },
        barGap: "-100%",
        barWidth: 12,
        z: -9,
        showBackground: true,
        data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
      }
    ]
  }
  myChart1.setOption(option1)
  // const myChart2 = echarts.init(line2.value, "dark")
  // const option2 = {
  //   backgroundColor: "transparent",

  //   tooltip: {
  //     trigger: "axis",
  //     show: true,
  //     confine: true,
  //     textStyle: {
  //       align: "left"
  //     },
  //     formatter: function (item: any) {
  //       let html = item[0].axisValue * 1 + "月"
  //       item.slice(0).forEach((s: any) => {
  //         if (s.seriesName.indexOf("series") === -1) {
  //           html += `<br/> ${s.seriesName}:${s.data}%`
  //         }
  //       })
  //       return html
  //       // return  '{b0}<br/>{a1}: {c1}<br/>{a2}: {c2}'
  //     },
  //     // formatter: '{b0}<br/>{a1}: {c1}<br/>{a2}: {c2}',
  //     axisPointer: {
  //       // 坐标轴指示器，坐标轴触发有效
  //       type: "none" // 默认为直线，可选为：'line' | 'shadow'
  //     }
  //   },
  //   legend: {
  //     show: true,
  //     // data:[""]
  //     top: "0%",
  //     left: "center",
  //     icon: "circle",
  //     type: "scroll",
  //     itemHeight: fontSize(0.5),
  //     itemWidth: fontSize(0.5),
  //     textStyle: {
  //       fontSize: fontSize(0.6)
  //     }
  //   },
  //   grid: {
  //     left: "2%",
  //     right: "0%",
  //     top: "10%",
  //     bottom: "15%",
  //     containLabel: true
  //   },
  //   dataZoom: {
  //     type: "slider",
  //     id: "沉降",
  //     show: true,
  //     handleStyle: { color: "red" },
  //     start: 1,
  //     end: 35
  //   },
  //   xAxis: {
  //     type: "category",
  //     data: [
  //       "200112",
  //       "200124",
  //       "200205",
  //       "200217",
  //       "200229",
  //       "200312",
  //       "200324",
  //       "200405",
  //       "200417",
  //       "200429",
  //       "200511",
  //       "200523",
  //       "200604",
  //       "200616",
  //       "200628",
  //       "200710",
  //       "200722",
  //       "200803",
  //       "200815",
  //       "200827",
  //       "200908",
  //       "200920",
  //       "201002",
  //       "201026",
  //       "201107",
  //       "201201",
  //       "201213",
  //       "201225",
  //       "210106",
  //       "210118",
  //       "210130",
  //       "210211",
  //       "210223",
  //       "210307",
  //       "210319",
  //       "210331",
  //       "210412",
  //       "210424",
  //       "210506",
  //       "210518",
  //       "210530",
  //       "210611",
  //       "210623",
  //       "210705",
  //       "210717",
  //       "210729",
  //       "210810",
  //       "210822",
  //       "210903",
  //       "210927",
  //       "211009",
  //       "211021",
  //       "211102",
  //       "211114",
  //       "211220",
  //       "220101",
  //       "220125",
  //       "220206",
  //       "220314",
  //       "220326",
  //       "220407",
  //       "220419",
  //       "220501",
  //       "220525",
  //       "220606",
  //       "220630",
  //       "220724"
  //     ],
  //     axisTick: {
  //       alignWithLabel: false,
  //       show: true,
  //       lineStyle: {
  //         color: "#ccc"
  //       }
  //     },
  //     axisLine: {
  //       lineStyle: {
  //         color: "#ccc"
  //       }
  //     },
  //     axisLabel: {
  //       // X轴文字样式
  //       fontSize: fontSize(0.6875),
  //       interval: 0,
  //       padding: [10, 0, 0, 0]
  //     },
  //     splitLine: {
  //       show: false
  //     },
  //     show: true
  //   },
  //   yAxis: {
  //     max: 1,
  //     type: "value",
  //     name: "mm/day",
  //     axisLabel: {
  //       fontSize: fontSize(0.6875),
  //       interval: 0,
  //       padding: [0, 0, 0, 0]
  //     },
  //     nameLocation: "end",
  //     nameTextStyle: {
  //       align: "right",
  //       verticalAlign: "middle",
  //       borderDashOffset: 0,
  //       padding: [6, 6, 6, 6]
  //     },
  //     splitLine: { show: false },
  //     axisLine: {
  //       lineStyle: {
  //         color: "#ccc"
  //       }
  //     },
  //     axisTick: {
  //       alignWithLabel: false,
  //       show: true,
  //       lineStyle: {
  //         color: "#ccc"
  //       }
  //     }
  //   },
  //   series: [
  //     {
  //       name: "形变速度",
  //       type: "line",
  //       symbol: "circle",
  //       symbolSize: 5,
  //       itemStyle: {
  //         color: "rgba(14,227,247,1)"
  //       },
  //       barGap: "-100%",
  //       barWidth: 12,
  //       z: -8,
  //       data: [
  //         points.D_20200112,
  //         points.D_20200124,
  //         points.D_20200205,
  //         points.D_20200217,
  //         points.D_20200229,
  //         points.D_20200312,
  //         points.D_20200324,
  //         points.D_20200405,
  //         points.D_20200417,
  //         points.D_20200429,
  //         points.D_20200511,
  //         points.D_20200523,
  //         points.D_20200604,
  //         points.D_20200616,
  //         points.D_20200628,
  //         points.D_20200710,
  //         points.D_20200722,
  //         points.D_20200803,
  //         points.D_20200815,
  //         points.D_20200827,
  //         points.D_20200908,
  //         points.D_20200920,
  //         points.D_20201002,
  //         points.D_20201010,
  //         points.D_20201026,
  //         points.D_20201107,
  //         points.D_20201201,
  //         points.D_20201213,
  //         points.D_20201225,
  //         points.D_20210106,
  //         points.D_20210118,
  //         points.D_20210130,
  //         points.D_20210211,
  //         points.D_20210118,
  //         points.D_20210130,
  //         points.D_20210211,
  //         points.D_20210223,
  //         points.D_20210307,
  //         points.D_20210319,
  //         points.D_20210331,
  //         points.D_20210412,
  //         points.D_20210424,
  //         points.D_20210506,
  //         points.D_20210518,
  //         points.D_20210530,
  //         points.D_20210611,
  //         points.D_20210623,
  //         points.D_20210705,
  //         points.D_20210717,
  //         points.D_20210729,
  //         points.D_20210810,
  //         points.D_20210822,
  //         points.D_20210903,
  //         points.D_20210927,
  //         points.D_20211021,
  //         points.D_20211102,
  //         points.D_20211114,
  //         points.D_20211220,
  //         points.D_20220101,
  //         points.D_20220125,
  //         points.D_20220206,
  //         points.D_20220314,
  //         points.D_20220326,
  //         points.D_20220407,
  //         points.D_20220419,
  //         points.D_20220501,
  //         points.D_20220525,
  //         points.D_20220606,
  //         points.D_20220630,
  //         points.D_20220724
  //       ]
  //     },
  //     //   {
  //     //     name: "综合建筑",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(255,113,94, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: [0.8, 0.6, 1, 0.6, 0]
  //     //   },
  //     //   {
  //     //     name: "商场建筑",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(254,  217,  118, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: [0.6, 0.5, 0.8, 0.4, 0]
  //     //   },
  //     //   {
  //     //     name: "宾馆饭店",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(234,94,230, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: []
  //     //   },
  //     //   {
  //     //     name: "医疗卫生",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(94, 225, 186, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: [1, 1, 1]
  //     //   },
  //     //   {
  //     //     name: "文化教育",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(113, 204, 78, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: [1, 2, 1, 1, 2]
  //     //   },
  //     {
  //       type: "bar",
  //       itemStyle: {
  //         color: "rgba(0,0,0,0.2)"
  //       },
  //       barGap: "-100%",
  //       barWidth: 12,
  //       z: -9,
  //       showBackground: true,
  //       data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
  //     }
  //   ]
  // }
  // myChart2.setOption(option2)
  // //   myChart5.setOption(option5)
  // const myChart3 = echarts.init(line3.value, "dark")
  // const option3 = {
  //   backgroundColor: "transparent",

  //   tooltip: {
  //     trigger: "axis",
  //     show: true,
  //     confine: true,
  //     textStyle: {
  //       align: "left"
  //     },
  //     formatter: function (item: any) {
  //       let html = item[0].axisValue * 1 + "日"
  //       item.slice(0).forEach((s: any) => {
  //         if (s.seriesName.indexOf("series") === -1) {
  //           html += `<br/> ${s.seriesName}:${s.data}%`
  //         }
  //       })
  //       return html
  //       // return  '{b0}<br/>{a1}: {c1}<br/>{a2}: {c2}'
  //     },
  //     // formatter: '{b0}<br/>{a1}: {c1}<br/>{a2}: {c2}',
  //     axisPointer: {
  //       // 坐标轴指示器，坐标轴触发有效
  //       type: "none" // 默认为直线，可选为：'line' | 'shadow'
  //     }
  //   },
  //   legend: {
  //     show: true,
  //     // data:[""]
  //     top: "0%",
  //     left: "center",
  //     icon: "circle",
  //     type: "scroll",
  //     itemHeight: fontSize(0.5),
  //     itemWidth: fontSize(0.5),
  //     textStyle: {
  //       fontSize: fontSize(0.6)
  //     }
  //   },
  //   grid: {
  //     left: "11%",
  //     right: "0%",
  //     top: "18%",
  //     bottom: "5%",
  //     containLabel: true
  //   },
  //   xAxis: {
  //     type: "category",
  //     data: ["200111", "200123", "200204", "200216", "200228"],
  //     axisTick: {
  //       alignWithLabel: false,
  //       show: true,
  //       lineStyle: {
  //         color: "#ccc"
  //       }
  //     },
  //     axisLine: {
  //       lineStyle: {
  //         color: "#ccc"
  //       }
  //     },
  //     axisLabel: {
  //       // X轴文字样式
  //       fontSize: fontSize(0.6875),
  //       interval: 0,
  //       padding: [10, 0, 0, 0]
  //     },
  //     splitLine: {
  //       show: false
  //     },
  //     show: true
  //   },
  //   yAxis: {
  //     max: 0.03,
  //     type: "value",
  //     name: "",
  //     axisLabel: {
  //       fontSize: fontSize(0.6),
  //       interval: 0,
  //       padding: [0, 0, 0, 0]
  //     },
  //     nameLocation: "end",
  //     nameTextStyle: {
  //       align: "right",
  //       verticalAlign: "middle",
  //       borderDashOffset: 0,
  //       padding: [6, 6, 6, 6]
  //     },
  //     splitLine: { show: false },
  //     axisLine: {
  //       lineStyle: {
  //         color: "#ccc"
  //       }
  //     },
  //     axisTick: {
  //       alignWithLabel: false,
  //       show: true,
  //       lineStyle: {
  //         color: "#ccc"
  //       }
  //     }
  //   },
  //   series: [
  //     {
  //       name: "形变加速度",
  //       type: "line",
  //       symbol: "circle",
  //       symbolSize: 8,

  //       itemStyle: {
  //         color: "rgba(14,227,247,1)"
  //       },
  //       barGap: "-100%",
  //       barWidth: 15,
  //       z: -8,
  //       data: [0.021, -0.0067, -0.00345, 0.00393, 0.00496]
  //     },
  //     //   {
  //     //     name: "综合建筑",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(255,113,94, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: [0.8, 0.6, 1, 0.6, 0]
  //     //   },
  //     //   {
  //     //     name: "商场建筑",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(254,  217,  118, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: [0.6, 0.5, 0.8, 0.4, 0]
  //     //   },
  //     //   {
  //     //     name: "宾馆饭店",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(234,94,230, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: []
  //     //   },
  //     //   {
  //     //     name: "医疗卫生",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(94, 225, 186, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: [1, 1, 1]
  //     //   },
  //     //   {
  //     //     name: "文化教育",
  //     //     type: "line",
  //     //     symbol: "circle",
  //     //     symbolSize: 5,
  //     //     itemStyle: {
  //     //       color: "rgba(113, 204, 78, 1)"
  //     //     },
  //     //     barGap: "-100%",
  //     //     barWidth: 12,
  //     //     z: -8,
  //     //     data: [1, 2, 1, 1, 2]
  //     //   },
  //     {
  //       type: "bar",
  //       itemStyle: {
  //         color: "rgba(0,0,0,0.2)"
  //       },
  //       barGap: "-100%",
  //       barWidth: 12,
  //       z: -9,
  //       showBackground: true,
  //       data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
  //     }
  //   ]
  // }
  // myChart3.setOption(option3)
}
function fontSize(res: number) {
  return res * 16
}
</script>

<style scoped lang="less">
.mars {
  box-shadow: 0px 0px 500px rgba(rgb(86, 106, 197), green, blue, 0.7) !important;
}
.achart_container {
  position: absolute;
  background-color: #02e1ff;
  padding: 10px;
  top: 0;
  right: 0;
  width: 29rem;
  height: 100%;
  background: linear-gradient(to right, rgba(84, 97, 117, 0.5), rgba(42, 52, 69, 1));
}

._item_top {
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.22rem;
}

.item_bottom {
  margin-bottom: -2rem;
}

._item_title {
  position: relative;
  height: 1.56rem;
  padding-left: 1.25rem;
  line-height: 1.56rem;
  font-size: 1.25rem;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 1px;
  margin-bottom: 0.7rem;
}

._item_title::before {
  content: "";
  width: 0.5rem;
  height: 1rem;
  background: rgba(229, 237, 255, 1);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

._item_title::after {
  content: "";
  width: 26.5rem;
  height: 0.63rem;
  background: url("/img/icon/分割.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: calc(100% + 0.13rem);
}

._item_row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
}

._item_row_title {
  font-size: 0.88rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.25rem;
  letter-spacing: 2px;
  text-shadow: 0px 0px 0px #02e1ff;
}

.row1 {
  width: 10rem;
  align-items: center;
  display: flex;
  margin-bottom: 1.19rem;
}

.icon {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
}

.row1_right {
  margin-left: 0.75rem;
  text-align: left;
}

.ml {
  margin-left: 50px;
}

.right_title {
  font-size: 2rem;
  font-weight: bold;
  color: #febc04;
  line-height: 2rem;
  background: linear-gradient(180deg, #e5be38 0%, #ff882e 100%);
  -webkit-background-clip: text;
  white-space: nowrap;
  -webkit-text-fill-color: transparent;
  font-family: "UnidreamLED", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.right_sub_title {
  font-size: 0.88rem;
  color: #d8d8d8;
  line-height: 1;
  white-space: nowrap;
  background: linear-gradient(180deg, #e5be38 0%, #ff882e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

._item_full_box {
  width: 100%;
  height: 30rem;
  margin-top: 35px;
}

._item_full_box_width {
  width: 100%;
}

.row3 {
  flex: 1;
  position: relative;
}

._item_row_box3 {
  width: 12rem;
  height: 12rem;
}

._item_row_box2 {
  width: 10rem;
  margin-right: 40px;
  margin-top: 20px;
  transform: translateX(-1rem);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.box2_item,
.box2_item1,
.box2_item2,
.box2_item3,
.box2_item4,
.box2_item5 {
  position: relative;
  width: 100%;
  height: 1.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.box2_item::before,
.box2_item1::before,
.box2_item2::before,
.box2_item3::before,
.box2_item4::before,
.box2_item5::before {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border: 0.06rem solid #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
}

.box2_item::before {
  background: rgba(14, 227, 247, 0.58);
}

.box2_item1::before {
  background: rgba(255, 113, 94, 0.58);
}

.box2_item2::before {
  background: rgba(254, 217, 118, 0.64);
}

.box2_item3::before {
  background: rgba(234, 94, 230, 0.64);
}

.box2_item4::before {
  background: rgba(94, 225, 186, 0.58);
}

.box2_item5::before {
  background: rgba(113, 204, 78, 0.58);
}

.box2_item::after,
.box2_item1::after,
.box2_item2::after,
.box2_item3::after,
.box2_item4::after,
.box2_item5::after {
  content: attr(count);
  font-size: 1rem;
  font-weight: 600;
  color: #87c1fa;
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
}

.box2_item:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0);
}

.ring1 {
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  overflow: hidden;
}

#ring {
  width: 100%;
  height: 100%;
}
.bar {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.bar_chart {
  width: 100%;
  height: 100%;
}
#bar {
  width: 100%;
  height: 100%;
}
.container-last-chart {
  margin-top: 8px;
  box-shadow: 0px 0px 500px rgba(77, 200, 204, 0.4);
}
</style>
