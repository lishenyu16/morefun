const state = {
    jokes:[]
}
const mutations = {

}
const actions = {
    setJokes({state,commit},payload){
        state.jokes = payload
    }
}
const getters = {
    jokes(){
        return state.jokes
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}