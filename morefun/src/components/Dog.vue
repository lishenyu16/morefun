<template>
    <div class="container-fluid">
        <div class="container-fluid">
            <div class="random-btn">
                <button @click="randomDogs" class="btn btn-success">Show Random Dogs!</button>
            </div>          
        </div>
        <div class="container-fluid loading" v-if="loading">
            <img src="./spinner.gif" alt="">
        </div>
        <div class="container-fluid" v-if="!loading">
            <div class="img-box">
                <a :href="dogs[0]">
                    <div class="frame">
                        <img :src="dogs[0]" alt="this is a dog">
                    </div>                   
                </a>
            </div>
        </div>
        <div class="container-fluid" v-if="!loading">
            <div class="img-box">
                <a :href="dogs[1]">
                    <div class="frame">
                        <img :src="dogs[1]" alt="this is a dog">
                    </div>
                    
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // https://dog.ceo/dog-api/documentation/random
    created(){
        this.loading = true
        axios.get('https://dog.ceo/api/breeds/image/random/2')
            .then((dogs)=>{
                this.loading = false
                const dogsUrls = dogs.data.message
                this.$store.dispatch('setDogs',dogsUrls)
            })
            .catch(err=>{
                alert('Internal error occured, plz try again!')
            })
    },
    data() {
        return {
            loading:false
        }
    },
    methods: {
        randomDogs() {
            this.loading = true
            axios.get('https://dog.ceo/api/breeds/image/random/2')
                .then((dogs)=>{
                    this.loading = false
                    const dogsUrls = dogs.data.message
                    this.$store.dispatch('setDogs',dogsUrls)
                })
                .catch(err=>{
                    alert('Internal error occured, plz try again!')
                }) 
        }
    },
    computed: {
        dogs() {
            return this.$store.getters.dogs
        },
    },

}
</script>

<style scoped>

.random-btn{
    display: flex;
    justify-content: center;
}
@media (max-width: 576px)  {
    .random-btn{
        margin-top:0.5rem;
    }
}
.img-box{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:1rem auto;
}

img {
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
  max-height: 100%;
  max-width: 100%;
}

.frame {
  background-color: #ddc;
  border: solid 5vmin #eee;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset, 0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;

  position: relative;
  text-align: center;
}
.frame:before {
  border-radius: 2px;
  bottom: -2vmin;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
  content: "";
  left: -2vmin;
  position: absolute;
  right: -2vmin;
  top: -2vmin;
}
.frame:after {
  border-radius: 2px;
  bottom: -2.5vmin;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  content: "";
  left: -2.5vmin;
  position: absolute;
  right: -2.5vmin;
  top: -2.5vmin;
}

.loading img{
    display: block;
    margin:1rem auto;
    max-height: 10%;
    max-width: 10%; 
    border:none;
}
</style>
