
const state = {
    cat:null
}
const mutations = {
}
const actions = {
    setCat({state,commit},payload){
        state.cat = payload
    }
}
const getters = {
    cat(){
        return state.cat
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}