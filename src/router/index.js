import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/",
            component: resolve =>
                require(["../components/common/Home.vue"], resolve),
            meta: { title: "首页详情" },
            children: [
                {
                    path: "/dashboard",
                    component: resolve =>
                        require(["../components/page/Dashboard.vue"], resolve),
                    meta: { title: "系统首页" }
                },

            ]
        },
        {
            path: "/login",
            component: resolve =>
                require(["../components/page/Login.vue"], resolve)
        },
        {
            path: "/serverProtocol",
            component: resolve =>
                require(["../components/page/ServerAgreement.vue"], resolve)
        },

    ]
});
