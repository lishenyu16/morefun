
const state = {
    usnews:[]
}
const mutations = {
}
const actions = {
    setUsnews({state,commit},payload){
        state.usnews = payload
    }
}
const getters = {
    usnews(){
        return state.usnews
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}