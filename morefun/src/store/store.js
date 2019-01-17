import Vue from 'vue'
import Vuex from 'vuex'
// import blogModule from './modules/blogs'
import dogsModule from './module/dogs'
import catsModule from './module/cats'
import jokesModule from './module/jokes'
import usNewsModule from './module/USNews'
import cnNewsModule from './module/CNNews'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        dogsModule,
        catsModule,
        jokesModule,
        usNewsModule,
        cnNewsModule,
    },
    state:{

    },
    mutations:{

    },
    actions:{
    },
    getters:{
        
    }
})

