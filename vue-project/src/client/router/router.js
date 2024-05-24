import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from "@/client/components/V-if.vue";
import Component1 from "@/client/components/Component1.vue";
import ComponentePadre from '@/client/components/ComponentePadre.vue';
import ComponenteHijo from '@/client/components/ComponenteHijo.vue';
import Bienvenida from '@/client/components/Bienvenida.vue';
import VBind from '@/client/components/V-bind.vue';
import VFor from '@/client/components/V-for.vue';
import VIf from '@/client/components/V-if.vue';
import VModel from '@/client/components/V-model.vue';
import VOn from '@/client/components/V-on.vue';
import VShow from '@/client/components/V-show.vue';

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