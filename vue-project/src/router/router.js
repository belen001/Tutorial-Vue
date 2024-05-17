import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from "@/components/V-if.vue";
import Component1 from "@/components/Component1.vue";
import ComponentePadre from '@/components/ComponentePadre.vue';
import ComponenteHijo from '@/components/ComponenteHijo.vue';
import Bienvenida from '@/components/Bienvenida.vue';
import VBind from '@/components/V-bind.vue';
import VFor from '@/components/V-for.vue';
import VIf from '@/components/V-if.vue';
import VModel from '@/components/V-model.vue';
import VOn from '@/components/V-on.vue';
import VShow from '@/components/V-show.vue';

const routes = [
{ path: '/', component: HelloWorld },
{ path: '/component1', component: Component1 },
{ path: '/componentePadre', component: ComponentePadre },
{ path: '/ComponenteHijo', component: ComponenteHijo },
{ path: '/Bienvenida', component: Bienvenida },
{ path: '/VBind', component: VBind },
{ path: '/VFor', component: VFor },
{ path: '/VIf', component: VIf },
{ path: '/VModel', component: VModel },
{ path: '/VOn', component: VOn },
{ path: '/VShow', component: VShow }
]

export const router = createRouter({
history: createMemoryHistory(),
routes,
})