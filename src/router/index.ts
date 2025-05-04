import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import DetikBerjaan from "@/components/DetikBerjalan.vue";
import JurusanPage from "@/components/JurusanPage.vue";
import BahasaPage from "@/components/BahasaPage.vue";

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
        path: "/detikberjalan",
        name: "DetikBerjalan",
        component: DetikBerjaan,
    },
    {
        path: "/jurusanPage",
        name: "JurusanPage",
        component: JurusanPage,
    },
    {
        path: "/bahasaPage",
        name: "BahasaPage",
        component: BahasaPage,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;