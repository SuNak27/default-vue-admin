import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Echart from "vue-echarts";

import "bootstrap-icons/font/bootstrap-icons.css";

import "jquery";
import "@/assets/css/style.bundle.css";
import "@/assets/plugins/global/plugins.bundle.css";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.css";
import "@/assets/plugins/custom/datatables/datatables.bundle.css";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import ECharts from "vue-echarts";
import { use } from "echarts/core";

// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
  ToolboxComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
  GridComponent,
  VisualMapComponent,
  ToolboxComponent,
]);

// register globally (or you can do it locally)
Vue.component("v-chart", ECharts);

Vue.component("chart", Echart);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
