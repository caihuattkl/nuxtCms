export default {
  mode: "universal",
  target: "server",
  head: {
    // title: "中金产业投资咨询网" || "",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1,IE=edge,chrome=1"},
      { name: "charset", content: "text/html;charset=utf-8" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // script: [{src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"}]
  },
  router: {
    // 全局禁用所有链接上的预取
    // prefetchLinks: false
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/404.vue")
      });
    }
  },
  // "~/assets/css/reports_channel.css"
  css: ["iview/dist/styles/iview.css", { src: "~assets/scss/common.scss", lang: "scss" }],
  // { src: '~/plugins/localStorage.js', ssr: false }
  plugins: ["@/plugins/iview", "~/plugins/axios", "@/plugins/tools"],
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: { proxy: true },
  proxy: {
    "/v1": {
      target: "http://192.168.3.21:5000/v1",
      changeOrigin: true,
      pathRewrite: { "^/v1": "" }
    }
  },
  styleResources: {
    scss: "./assets/scss/common.scss"
  },
  build: {
    cache: true,
    parallel: true
  }
};
