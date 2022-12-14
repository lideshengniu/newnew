import path, { resolve } from "path"
import type { ConfigEnv } from "vite"
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import eslintPlugin from "vite-plugin-eslint"
import mars3dCesium from "vite-plugin-mars3d"
import postCssPxToRem from "postcss-pxtorem"
import { createStyleImportPlugin, AndDesignVueResolve } from "vite-plugin-style-import"
import postcsspxtoviewport from "postcss-px-to-viewport" // 移动端适配
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir)
}
export default ({ mode }: ConfigEnv) => {
  const root = process.cwd()

  const ENV = loadEnv(mode, root)

  console.log(`当前环境信息：`, mode)
  console.log(`ENV：`, ENV)

  return defineConfig({
    base: ENV.VITE_BASE_URL,
    server: {
      host: "localhost",
      https: false,
      port: 3002,
      proxy: {
        "/test": {
          target: "http://124.221.236.190:9001/geoserver/wfs",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        },
        "/xy": {
          target: "http://124.221.236.190:8642/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/xy/, "")
        }
      }
    },
    define: {
      "process.env": {
        mode: mode,
        BASE_URL: ENV.VITE_BASE_URL,
        API_BASE: ENV.VITE_API_BASE
      },
      buildTime: new Date()
    },
    resolve: {
      alias: [
        // "@photo": path.join(__dirname, "public"),
        // {"@mars": path.join(__dirname, "src/marsgis"},
        {
          find: /@\//,
          replacement: pathResolve("src") + "/"
        },
        {
          find: /@mars\//,
          replacement: pathResolve("src/marsgis") + "/"
        },
        {
          find: /@photo\//,
          replacement: pathResolve("public") + "/"
        }
      ],
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json"]
    },
    optimizeDeps: {
      include: ["kml-geojson", "@mars/common/store/widget"]
    },
    json: {
      // 支持从 .json 文件中进行按名导入
      namedExports: true,
      stringify: false
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${path.resolve(__dirname, "src/marsgis/components/mars-ui/base.less")}";`
        }
      },
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 1920, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            exclude: [],
            landscape: false // 是否处理横屏情况
          })
        ]
      }
    },
    build: {
      // 输出路径
      outDir: path.join("./dist", ENV.VITE_BASE_URL),
      // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项，
      assetsInlineLimit: 4096,
      // 启动 / 禁用 CSS 代码拆分
      cssCodeSplit: true,
      // 构建后是否生成 soutrce map 文件
      sourcemap: false,
      // 自定义rollup-commonjs插件选项
      commonjsOptions: {
        include: /node_modules|src\/marsgis\/common\/store/
      },
      // 自定义底层的 Rollup 打包配置
      // rollupOptions: {
      //   input: {
      //     index: path.resolve(__dirname, "index.html"),
      //     demo: path.resolve(__dirname, "demo.html")
      //   }
      // },
      // 当设置为 true, 构建后将会生成 manifest.json 文件
      manifest: false,
      // 设置为 false 可以禁用最小化混淆,或是用来指定是应用哪种混淆器 boolean | 'terser' | 'esbuild'
      minify: "terser",
      // 传递给 Terser 的更多 minify 选项
      terserOptions: {},
      // 设置为false 来禁用将构建好的文件写入磁盘
      write: true,
      // 默认情况下 若 outDir 在 root 目录下， 则 Vite 会在构建时清空该目录。
      emptyOutDir: true
    },
    plugins: [
      vue(),
      eslintPlugin({ cache: false }),
      // postCssPxToRem({
      //   rootValue: 16,
      //   propList: ["*"]
      // }),
      mars3dCesium(),
      createStyleImportPlugin({
        resolves: [AndDesignVueResolve()],
        libs: [
          {
            libraryName: "ant-design-vue",
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`
            }
          }
        ]
      })
    ]
  })
}
