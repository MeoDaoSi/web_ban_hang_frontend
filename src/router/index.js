import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/product",
        name: "product",
        component: Product,
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
    },
    {
        path: "/contacts",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;