import { defineStore } from "pinia"
import { Names } from "../store-namespace"

import { Result } from "ant-design-vue"

// const { activate } = useWidget()
export const useTestStore = defineStore(Names.Test3, {
  state: () => {
    return {
      list: {
        gys: false,
        shili: false
      },
      showechart: true
    }
  },
  getters: {},
  actions: {
    // 展示不同的工点信息
    showgys() {
      this.list.gys = !this.list.gys
    },
    showshili() {
      this.list.shili = !this.list.shili
    },
    // 展示侧边栏
    ShowEcharts() {
      this.showechart = true
    },
    ShowInsar() {
      this.showechart = false
    }
  }
})
