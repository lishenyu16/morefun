
const state = {
    cnnews:[]
}
const mutations = {
}
const actions = {
    setCnnews({state,commit},payload){
        state.cnnews = payload
    }
}
const getters = {
    cnnews(){
        return state.cnnews
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}