export default {
  mode: "universal",
  target: "server",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      }
    ]
  },
  css: ["iview/dist/styles/iview.css","~/assets/css/reports_channel.css",{src: '~assets/scss/common.scss', lang: 'scss'}],
  // { src: '~/plugins/localStorage.js', ssr: false }
  plugins: ["@/plugins/iview",'~/plugins/axios'],
  components: true,
  buildModules: [],
  modules: [ '@nuxtjs/style-resources','@nuxtjs/axios','@nuxtjs/proxy'],
  axios: { proxy: true },
  proxy:{
    '/v1': {
      target: 'http://localhost:5000/v1',
      changeOrigin: true,
      pathRewrite: { '^/v1': '' },
    },
  },
  styleResources: {
	    scss: './assets/scss/common.scss'
	  },
  build: {
    
  }
};
