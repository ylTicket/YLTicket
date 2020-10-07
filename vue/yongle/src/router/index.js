import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/home/Home';
import City from '../views/city/City'

const routes=[
    {
        path:'/',
        name:'home',
        component:Home,
        redirect:'/sy',
        children:[
            {
                path:'sy',
                name:'home',
                component:()=>import('../views/home/index/TicketIndex')
            },
            {
                path:'classify',
                name:'classify',
                component:()=>import('../views/home/classify/TicketClassify')
            },
            {
                path:'search',
                name:'search',
                component:()=>import('../views/home/search/TicketSearch')
            },
            {
                path:'profile',
                name:'profile',
                component:()=>import('../views/home/profile/TicketProfile')
            }
        ]
    },
    {
        path:'/city',
        name:'city',
        component:()=>import('../views/city/City')
    },
    {
        path:'/detail',
        name:'detail',
        component:()=>import('../views/detile/ticketDetail')
    }
]

const router=new VueRouter({
    mode:'hash',
    routes,
})


export default router