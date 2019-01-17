<template>
    <div class="container-fluid">
        <div class="container-fluid">
            <div class="random-btn">
                <button @click="randomJokes" class="btn btn-success">More Jokes!</button>
            </div>          
        </div>
        <div class="card" v-for="i in 3">
            <div class="card-header">
                <blockquote class="blockquote mb-0">
                    <p>{{jokes[i-1].setup}}</p>
                    <footer class="blockquote-footer">{{jokes[i-1].punchline}} <span style="font-size:1.5rem">&#9786;</span> </footer>
                </blockquote>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    //https://official-joke-api.appspot.com/random_ten
    beforeCreate(){
        axios.get('https://official-joke-api.appspot.com/random_ten')
            .then((jokes)=>{
                const jokesArr = jokes.data
                this.$store.dispatch('setJokes',jokesArr)
            })
            .catch(err=>{
                alert('Internal error occured, plz try again!')
            })
    },
    data() {
        return {
        }
    },
    methods: {
        randomJokes() {
            axios.get('https://official-joke-api.appspot.com/random_ten')
                .then((jokes)=>{
                    const jokesArr = jokes.data
                    this.$store.dispatch('setJokes',jokesArr)
                })
                .catch(err=>{
                    alert('Internal error occured, plz try again!')
                })
        }
    },
    computed: {
        jokes() {
            return this.$store.getters.jokes
        },
    },
}
</script>
<style scoped>
.container-fluid{
    padding: 1rem;
}
.random-btn{
    display: flex;
    justify-content: center;
}
@media (max-width: 576px)  {
    .random-btn{
        margin-top:0.5rem;
    }
}
.card{
    margin: 1rem 0;
    border-radius: 1rem;
}
.card-header{
    border-radius: 1rem;
}
.card-header:hover,
.card-header:active{
    background-color:khaki;
}
</style>
