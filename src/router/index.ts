import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import JurusanPage from "@/components/JurusanPage.vue";
import DetikBerjaan from "@/components/DetikBerjalan.vue";
import BahasaPage from "@/components/BahasaPage.vue";
import KondisionalPage from "@/components/KondisionalPage.vue";
import EvenhandlerPage from "@/components/EvenhandlerPage.vue";


const routes = [
    {
        path: "/homePage",
        name: "HomePage",
        component: HomePage,
    }, {
        path: "/aboutPage",
        name: "AboutPage",
        component: AboutPage,
    },
    {
        path: "/jurusanPage",
        name: "JurusanPage",
        component: JurusanPage,
    },
    {
        path: "/detikberjalan",
        name: "DetikBerjalan",
        component: DetikBerjaan,
    },
    {
        path: "/bahasaPage",
        name: "BahasaPage",
        component: BahasaPage,
    },
    {
        path: "/kondisionalPage",
        name: "KondisionalPage",
        component: KondisionalPage,
    },
    {
        path: "/evenhandlerPage",
        name: "EvenhandlerPage",
        component: EvenhandlerPage,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;