const state = {
    dogs:[]
}
const mutations = {
    // UPDATE_BLOGS(state,payload){
    //     state.blogs.push(payload)
    // },
    // CURRENT_BLOG(state,payload){
    //     state.blog = payload
    // },
    // UPDATE_COMMENTS(state,payload){ 

    // },
    // EDIT_BLOG(state,payload){

    // }
}
const actions = {
    setDogs({state,commit},payload){
        state.dogs = payload
    }
}
const getters = {
    dogs(){
        return state.dogs
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}