import Vue from "vue"
import Router from "vue-router"
import Index from "@/templates/Welcome"
import Impressum from "@/templates/Impressum"
import Blog from "@/templates/BlogPage"
import NotFound from "@/templates/NotFound"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/Impressum",
      name: "Impressum",
      component: Impressum,
    },
    // {
    //   path: "/Blog",
    //   name:"Blog",
    //   component: BlogPage,
    // },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
})
