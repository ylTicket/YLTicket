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
                component:()=>import('../views/home/index/ticketIndex')
            },
            {
                path:'classify',
                name:'classify',
                component:()=>import('../views/home/classify/ticketClassify')
            },
            {
                path:'search',
                name:'search',
                component:()=>import('../views/home/search/ticketSearch')
            },
            {
                path:'profile',
                name:'profile',
                component:()=>import('../views/home/profile/ticketProfile')
            }
        ]
    },
    {
        path:'/city',
        name:'city',
        component:()=>import(City)
    }
]

const router=new VueRouter({
    mode:'history',
    routes,
})


export default router