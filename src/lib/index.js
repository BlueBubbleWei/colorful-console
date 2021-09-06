import luck from './luck.vue'
const luckyObj = {
    install(Vue, options) { 
        Vue.component(luck.name, luck)
    }
}

if (typeof window !== 'undefined' && window.vue) { 
    window.luckyObj = luckyObj
    Vue.use(luckyObj)
}

export default luckyObj