import { mapOptions } from "@/components/title"
import { Maya } from "@icon-park/svg"
import { group } from "console"
import * as mars3d from "mars3d"

export let graphicLayer
export let map
export const eventTabel = new mars3d.BaseClass()
let btroad
let threed
/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance
  map.flyToPoint([118.536224, 31.6079, 0], { pitch: -90, radius: 1000, heading: 50, roll: 90 })
  //  加倾斜
  threed = map.getLayerById(204012)
  threed.show = true
  map.addLayer(threed)
  // 加天眼
  btroad = map.getLayerById(10002)
  map.addLayer(btroad)
  // const overviewMap = new mars3d.control.OverviewMap({
  //   id: 1000,
  //   basemap: {
  //     name: "天地图影像",
  //     type: "group",

  //     layers: [
  //       { name: "底图", type: "tdt", layer: "img_d" },
  //       { name: "注记", type: "tdt", layer: "img_z" }
  //       // { name: "注记", type: "tdt", layer: "img_z" }
  //     ]
  //   },
  //   layers: [
  //     // { type: "group", id: "100", name: "Insar" },
  //     // { type: "graphic", name: "graphicLayer" },
  //     { type: "geojson", name: "btroad", id: 10002 }
  //   ],

  //   rectangle: {
  //     color: "#fecd78",
  //     opacity: 0.4,
  //     outline: true,
  //     outlineWidth: 3,
  //     outlineColor: "black"
  //   },
  //   style: {
  //     left: "5px",
  //     top: "5px",
  //     width: "200px",
  //     height: "150px"
  //   }
  // })
  // //
  // map.addControl(overviewMap)
  // map.flyToPoint([118.536718, 31.602555], { pitch: -40, radius: 5000, heading: 60, roll: 150 })
  // btroad = map.getLayerById(10002)
  // btroad.show = true
  // map.addLayer(btroad)
  map.eachLayer((e) => {
    if (e.id === 10001 || e.id === 10005) {
      e.show = false
    }
  })
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)
  // add1(graphicLayer)
  bindLayerPopup()
  // graphicLayer = map.getLayer(1002, "id")
  console.log("123123", graphicLayer)
  // add1(graphicLayer)

  bindLayerEvent()
  add(
    graphicLayer,
    [
      [118.5354755411002, 31.61011592697937, 0],
      [118.5355732178627, 31.61015675502223, 0],
      [118.5356341282736, 31.61015401430647, 0],
      [118.5356418359882, 31.61013179773266, 0],
      [118.5356589539971, 31.61010952178628, 0],
      [118.535676250761, 31.61005963424387, 0],
      [118.5356896758211, 31.61002091265057, 0],
      [118.5356992503744, 31.60999329784497, 0],
      [118.5357088124801, 31.60996571857488, 0],
      [118.5357146614816, 31.6099218852695, 0],
      [118.5357148956977, 31.60986750520245, 0],
      [118.5357250486621, 31.60981367162963, 0],
      [118.53571900713, 31.60975593981381, 0],
      [118.5357206562533, 31.60966985802433, 0],
      [118.535710614439, 31.60964289260138, 0],
      [118.5357172538567, 31.60959402454184, 0],
      [118.5357297678766, 31.60955594333314, 0],
      [118.5357458198773, 31.6095070957755, 0],
      [118.5357488027654, 31.60946953258967, 0],
      [118.5357559089082, 31.60944792431944, 0],
      [118.5357529659269, 31.60940018264225, 0],
      [118.5357600454586, 31.60937868840254, 0],
      [118.5357783268708, 31.60935142701625, 0],
      [118.5358275267049, 31.60934388777039, 0],
      [118.5358639705845, 31.60934753949047, 0],
      [118.5358945476716, 31.6093408168375, 0],
      [118.5359128254088, 31.6092873065031, 0],
      [118.5359183799358, 31.60927134871589, 0],
      [118.5359302848852, 31.60918205990064, 0],
      [118.5359297673842, 31.6091561204404, 0],
      [118.5359287368675, 31.60910446199377, 0],
      [118.5359379050699, 31.60907820852443, 0],
      [118.5359392088691, 31.60904730602694, 0],
      [118.5359430229467, 31.6090051670108, 0],
      [118.5359605822237, 31.60894592739592, 0],
      [118.5359702361674, 31.60891378853325, 0],
      [118.5359798706015, 31.60888171475709, 0],
      [118.5359750689069, 31.60883519805694, 0],
      [118.5359814644756, 31.60881394842103, 0],
      [118.5359894469652, 31.60878742649495, 0],
      [118.5360067411777, 31.60872907846567, 0],
      [118.5360172623076, 31.6086917470494, 0],
      [118.5360203895411, 31.60868118687029, 0],
      [118.5360281981723, 31.60865481803111, 0],
      [118.536043775187, 31.60860221612678, 0],
      [118.536045211736, 31.60856652286459, 0],
      [118.5360607028647, 31.60851426361953, 0],
      [118.5360574693088, 31.60849448084364, 0],
      [118.5360588722665, 31.60845917606905, 0],
      [118.5360734254299, 31.60840683291581, 0],
      [118.5360694108769, 31.60835714954445, 0],
      [118.536074264504, 31.60832450448618, 0],
      [118.5360893167236, 31.6082506262698, 0],
      [118.5360905006591, 31.60822807193495, 0],
      [118.5361094463458, 31.6081853007211, 0],
      [118.5361237225762, 31.60815180205747, 0],
      [118.5361414885145, 31.60810845192992, 0],
      [118.5361513482991, 31.60808439336256, 0],
      [118.5361592308486, 31.60806515926917, 0],
      [118.5361782658295, 31.60803964885232, 0],
      [118.5362059070208, 31.60803518568627, 0],
      [118.5362688780816, 31.60802953837458, 0],
      [118.5363003350193, 31.60803807553991, 0],
      [118.536335278095, 31.60803657004322, 0],
      [118.5363542538965, 31.60801052044326, 0],
      [118.5363581421291, 31.60800074687669, 0],
      [118.5363590539402, 31.60795523351412, 0],
      [118.536354155398, 31.60792449203383, 0],
      [118.5363478079667, 31.60787617729109, 0],
      [118.5363535992077, 31.60786165466519, 0],
      [118.5363304179178, 31.60783468353945, 0],
      [118.5362729911901, 31.60780999322432, 0],
      [118.536265860518, 31.60780692729266, 0],
      [118.5362664068655, 31.60778473624012, 0],
      [118.5362770518157, 31.60771666800542, 0],
      [118.5362789620454, 31.60771190503232, 0],
      [118.5362833081563, 31.60768038477069, 0],
      [118.5363011445317, 31.60763261712681, 0],
      [118.5362985544136, 31.60760961577781, 0],
      [118.5363119984426, 31.60758764754931, 0],
      [118.5363280855245, 31.60756123802222, 0],
      [118.5363402110029, 31.60752776012045, 0],
      [118.5363523333597, 31.60749429013964, 0],
      [118.536359170177, 31.60744243487704, 0],
      [118.536365912794, 31.6074178331188, 0],
      [118.536372652039, 31.60739324510079, 0],
      [118.5363860591909, 31.60737119988567, 0],
      [118.536387429979, 31.60735544261897, 0],
      [118.5363941611289, 31.60733087835322, 0],
      [118.5364009348721, 31.60727931870655, 0],
      [118.5364049746987, 31.60725921959918, 0],
      [118.5364143672976, 31.607230314308, 0],
      [118.5364237820422, 31.6071745501371, 0],
      [118.5364318303162, 31.60713450189422, 0],
      [118.5364519014393, 31.60708802773988, 0],
      [118.5364692990767, 31.60704596121432, 0],
      [118.5364799885116, 31.60700160526033, 0],
      [118.5365028024896, 31.60694005612777, 0],
      [118.5365217088507, 31.60689845529217, 0],
      [118.5365292591538, 31.60687436223661, 0],
      [118.5365235076361, 31.6068459453651, 0],
      [118.536532019977, 31.60683280486871, 0],
      [118.5365376096873, 31.60678695017896, 0],
      [118.5365451430672, 31.60676291700668, 0],
      [118.5365516946353, 31.60672802616414, 0],
      [118.5365648962043, 31.60669523595141, 0],
      [118.536568598572, 31.60666478390736, 0],
      [118.5365732837753, 31.60664518100655, 0],
      [118.5365731559729, 31.60660838172023, 0],
      [118.5365750017279, 31.60659320721721, 0],
      [118.5365749998705, 31.60655654732533, 0],
      [118.5365791010203, 31.60652637227957, 0],
      [118.5365869836788, 31.60650255178068, 0],
      [118.5365814614442, 31.60647486275624, 0],
      [118.5365838161751, 31.6064234871364, 0],
      [118.5365945891929, 31.60639535612725, 0],
      [118.5365986671955, 31.60636535757213, 0],
      [118.5366123493614, 31.60633285216258, 0],
      [118.5366172961108, 31.60631348732094, 0],
      [118.5366271800616, 31.60627477569387, 0],
      [118.5366386849423, 31.60622107454742, 0],
      [118.5366463549611, 31.60619732453912, 0],
      [118.5366502138485, 31.60616744587605, 0],
      [118.5366704244656, 31.60613663527257, 0],
      [118.5366858290735, 31.60608915181972, 0],
      [118.5366915833136, 31.60604443236667, 0],
      [118.5367143682645, 31.60597325630957, 0],
      [118.5367362406901, 31.6059274005674, 0],
      [118.5367535140577, 31.60590081524671, 0],
      [118.5367640456819, 31.60587264359023, 0],
      [118.5367908827784, 31.60580740254332, 0],
      [118.5368118137742, 31.60575101697511, 0],
      [118.5368135805171, 31.60573618140373, 0],
      [118.5368306396155, 31.60570942921004, 0],
      [118.5368409358827, 31.60568121276637, 0],
      [118.5368558342123, 31.60563371669445, 0],
      [118.5368747648433, 31.6055920914977, 0],
      [118.5368823654729, 31.60556835192667, 0],
      [118.5368928443462, 31.60554013828645, 0],
      [118.5368975626735, 31.60552088339028, 0],
      [118.5369202736943, 31.60548500470391, 0],
      [118.5369084396345, 31.60546763372667, 0],
      [118.5369203851203, 31.60542470187027, 0],
      [118.5369277715549, 31.605401002132, 0],
      [118.5369323231876, 31.60538179702657, 0],
      [118.536940302325, 31.60533320968264, 0],
      [118.5369522212899, 31.60529038139334, 0],
      [118.5369443213549, 31.60527902803228, 0],
      [118.5369179832567, 31.60524958174409, 0],
      [118.5368996389895, 31.60523154050269, 0],
      [118.5368775228445, 31.60520797881176, 0],
      [118.5368498834657, 31.60519344308668, 0],
      [118.5368223966001, 31.60517898722202, 0],
      [118.5367829069277, 31.6051723704629, 0],
      [118.5367502123768, 31.60516689176288, 0],
      [118.536720537952, 31.60519114445194, 0],
      [118.5366946674258, 31.60522082317171, 0],
      [118.5366651836702, 31.60524490502153, 0],
      [118.5366504811241, 31.60525691389218, 0],
      [118.5366394641425, 31.60527442369248, 0],
      [118.5366119623723, 31.60531813369047, 0],
      [118.5365845166198, 31.60536175588287, 0],
      [118.5365862904885, 31.60538159637157, 0],
      [118.5365807160308, 31.60542449301286, 0],
      [118.5365706194109, 31.60545187854421, 0],
      [118.5365760179469, 31.60547744318887, 0],
      [118.5365686568577, 31.60550050461354, 0],
      [118.5365667907451, 31.60551485945267, 0],
      [118.5365593267479, 31.60553792832114, 0],
      [118.5365509560568, 31.6055509821655, 0],
      [118.5365147565179, 31.60560744849066, 0],
      [118.5365009875387, 31.60562912921337, 0],
      [118.536498923113, 31.60567795926442, 0],
      [118.5364805001803, 31.60571834304531, 0],
      [118.5364766996405, 31.60574715280119, 0],
      [118.5364728951497, 31.6057759948974, 0],
      [118.5364617230215, 31.60579328415012, 0],
      [118.5364597195022, 31.60580770694042, 0],
      [118.536453702255, 31.60585102111965, 0],
      [118.5364433046991, 31.60587842244031, 0],
      [118.536433691413, 31.60591597306576, 0],
      [118.5364113560892, 31.6059504368399, 0],
      [118.5363972607857, 31.60600681042287, 0],
      [118.5363889695316, 31.60601971513647, 0],
      [118.5363786262774, 31.60604709405572, 0],
      [118.5363773537335, 31.60607179831032, 0],
      [118.5363732732641, 31.60610082416029, 0],
      [118.5363748034993, 31.60612130033804, 0],
      [118.5363559207213, 31.60616156388498, 0],
      [118.5363602457619, 31.60617780618997, 0],
      [118.5363434116095, 31.60620350447002, 0],
      [118.5363413609146, 31.60621806165711, 0],
      [118.5363400627351, 31.60624292046435, 0],
      [118.5363323978563, 31.60626605588031, 0],
      [118.5363282872178, 31.60629523650814, 0],
      [118.5363206844163, 31.60631839861851, 0],
      [118.5363149245349, 31.606397824686, 0],
      [118.5363048691732, 31.60642538441528, 0],
      [118.5362890966097, 31.60646145033271, 0],
      [118.5362815959968, 31.60648468539615, 0],
      [118.5362685202969, 31.6065164458206, 0],
      [118.5362629490905, 31.60652496514331, 0],
      [118.5362490321662, 31.60654624652516, 0],
      [118.5362351309072, 31.60656750359212, 0],
      [118.5362212450827, 31.60658873645509, 0],
      [118.5362182030917, 31.60662864752229, 0],
      [118.536212647998, 31.60663713340074, 0],
      [118.5362151549076, 31.60666863687721, 0],
      [118.5361965368978, 31.60670883901369, 0],
      [118.5361870828814, 31.60674685283731, 0],
      [118.5361795770988, 31.60677010216554, 0],
      [118.5361764886111, 31.60681026930883, 0],
      [118.5361634194228, 31.60684200303709, 0],
      [118.5361614588677, 31.60685682673075, 0],
      [118.5361531298588, 31.60686950280682, 0],
      [118.5361364889946, 31.60689482917534, 0],
      [118.5361289788093, 31.60691809052456, 0],
      [118.5361250392616, 31.60694776996636, 0],
      [118.5361175237908, 31.60697104927205, 0],
      [118.5361154791782, 31.60701182029661, 0],
      [118.536111385774, 31.60703114879556, 0],
      [118.5361034989697, 31.60704393185349, 0],
      [118.5361058219702, 31.60706557998149, 0],
      [118.5360976182055, 31.60710432178438, 0],
      [118.5360961457585, 31.6071194493686, 0],
      [118.5360943552009, 31.60716063908363, 0],
      [118.5360849698009, 31.60718860381446, 0],
      [118.5360744310812, 31.60720564745793, 0],
      [118.5360793697812, 31.60722325448927, 0],
      [118.5360726109813, 31.60724699111917, 0],
      [118.5360722747663, 31.607273191083, 0],
      [118.5360643588717, 31.6072859766065, 0],
      [118.5360628677731, 31.60730122690157, 0],
      [118.5360444065814, 31.6073310375296, 0],
      [118.5360466836547, 31.60735306443818, 0],
      [118.5360346301304, 31.60738538248924, 0],
      [118.5360270734095, 31.60742482793632, 0],
      [118.5360284264517, 31.60743599765779, 0],
      [118.5360211809383, 31.60747567885158, 0],
      [118.536012575159, 31.60750419738881, 0],
      [118.5360064535885, 31.60752840809224, 0],
      [118.5360066527123, 31.60755524407521, 0],
      [118.536000520327, 31.60757950724695, 0],
      [118.5360007137596, 31.60760643179011, 0],
      [118.5359857478806, 31.60763241801583, 0],
      [118.5359845898754, 31.60764807497354, 0],
      [118.5359793437701, 31.60767285361032, 0],
      [118.5359723878523, 31.60770796625477, 0],
      [118.5359643795971, 31.60772630175945, 0],
      [118.5359679175392, 31.60775517966411, 0],
      [118.5359626637682, 31.6077857559899, 0],
      [118.5359586469718, 31.60779495867635, 0],
      [118.535942828272, 31.60783192501536, 0],
      [118.5359309712104, 31.60785968236824, 0],
      [118.5359336747393, 31.60787194589645, 0],
      [118.5359218000763, 31.60789975115051, 0],
      [118.5359118979016, 31.60792293795148, 0],
      [118.5359092631345, 31.60796617671874, 0],
      [118.5359050619355, 31.60797534830695, 0],
      [118.535892454435, 31.60800287070187, 0],
      [118.5358761640307, 31.6080398930446, 0],
      [118.5358680704369, 31.60805844844043, 0],
      [118.5358579484, 31.60808165422896, 0],
      [118.5358729298214, 31.60822037312063, 0],
      [118.5358561547655, 31.60825950643545, 0],
      [118.5358340792909, 31.60842862218148, 0],
      [118.5357794579506, 31.6085167750987, 0],
      [118.5357464716769, 31.60863700548299, 0],
      [118.5356919870812, 31.60901442500162, 0],
      [118.5356399375646, 31.60913563496777, 0],
      [118.5356083258998, 31.60931635523901, 0],
      [118.5354939427236, 31.60996762041879, 0],
      [118.5354755411002, 31.61011592697937, 0]
    ],
    1,
    "k43+300~k43+900",
    "6mm",
    "轻微沉降",
    1,
    "btr"
  )
  // insar(graphicLayer)
}
export function onUnmounted() {
  // const btroad = map.getLayerById(10002)
  // btroad.show = false
  const control = map.getControl(1000, "id")
  threed.show = false
  console.log("niubi", control)
  graphicLayer.remove(true)
  map.removeControl(control)
  map = null
  table = []
}
/// insar
function insar(graphicLayer) {
  const graphic = new mars3d.graphic.RectangleEntity({
    positions: [
      [118.53543869, 31.6114219863],
      [118.531838834, 31.6114219863],
      [118.531838834, 31.6094720643],
      [118.53543869, 31.6094720643],
      [118.53543869, 31.6114219863]
    ],
    style: {
      clampToGround: true,
      image: "img/bpkw/insar/btx.png"
    },
    id: 2000,
    name: "保通线",
    show: true,
    attr: { xuhao: 2, bpmc: "葛羊山边坡", jgxx: "该处沉降较缓" }
  })
  graphicLayer.addGraphic(graphic)
}

/// //

// function add1(graphicLayer) {
//   const graphic = new mars3d.graphic.CurveEntity({
//     positions: [
//       [118.5379346562134, 31.599464869868722],
//       [118.5377319991984, 31.598057254940347]
//     ],
//     style: {
//       color: "#ffff00",
//       diffHeight: 2000, // 高度
//       speed: 20, // 速度
//       clampToGround: true,

//       // 高亮时的样式（默认为鼠标移入，也可以指定type:'click'单击高亮），构造后也可以openHighlight、closeHighlight方法来手动调用
//       highlight: {
//         color: "#ff0000"
//       }
//     },

//     id: 1,
//     name: "葛羊山",
//     show: false,
//     attr: { xuhao: 1, cjl: "-16.2mm", zhuanghao: "k43+00~k43+500", beizhu: "检查" }
//   })
//   graphicLayer.addGraphic(graphic)
//   addTableItem(graphic)
// }
function add(graphicLayer, positions, xuhao, cgyzqy, cjl, bz, id, name) {
  const graphic = new mars3d.graphic.PolylineEntity({
    positions: positions,
    style: {
      color: "red",
      width: 6,
      opacity: 1,
      clampToGround: true
    },
    attr: {
      xuhao: xuhao,
      cgyzqy: cgyzqy,
      cjl: cjl,
      bz: bz
    },
    id: id,
    name: name,
    show: false
  })
  graphicLayer.addGraphic(graphic)
  addTableItem(graphic)
}
export function bindLayerPopup() {
  graphicLayer.bindPopup(function (event) {
    const attr = event.graphic.attr || {}

    return mars3d.Util.getTemplateHtml({ title: "边坡", template: "all", attr: attr })
  })
}
let table = []
function addTableItem(item) {
  // console.log("itemitem", item.attr.chenjiang)
  table.push({
    key: item.id,
    cgyzqy: item.attr.cgyzqy,
    cjl: item.attr.cjl,
    bz: item.attr.bz,
    xuhao: item.attr.xuhao
  })
  console.log(table, "table")
  eventTabel.fire("tableObject", { table })
}
export function changeTable(data) {
  table = data
}
export function showHideArea(id, selected) {
  const graphic = graphicLayer.getGraphicById(id)
  if (selected) {
    graphic.show = true
  } else {
    graphic.show = false
  }
}
export function flyToGraphic(item) {
  const graphic = graphicLayer.getGraphicById(item)
  const options = { pitch: -110, radius: 50, heading: 30, roll: 70 }
  map.flyToGraphic(graphic, options)
}
export function deletedGraphic(item) {
  const graphic = graphicLayer.getGraphicById(item)
  graphicLayer.removeGraphic(graphic)
}

function bindLayerEvent() {
  graphicLayer.on(
    [mars3d.EventType.editStart, mars3d.EventType.editMovePoint, mars3d.EventType.editStyle, mars3d.EventType.editRemovePoint],
    function (e) {
      eventTabel.fire("graphicEditor-update", e)
    }
  )

  graphicLayer.on([mars3d.EventType.editStop, mars3d.EventType.removeGraphic], function (e) {
    eventTabel.fire("graphicEditor-stop", e)
  })
}
