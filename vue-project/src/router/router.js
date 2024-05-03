import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import Component1 from "@/components/Component1.vue";

const routes = [
{ path: '/', component: HelloWorld },
{ path: '/', component: Component1 }
]

export const router = createRouter({
history: createMemoryHistory(),
routes,
})