<template>
    <div class="container-fluid">
        <div class="container"><a href="https://newsapi.org" target="_blank">Powered by News API</a></div>
        <div class="newsblock" v-for="item in news">
            <div class="container-fluid">
                <h3>{{item.title}}</h3>
                <!-- <h6>news FROM VOA</h6> -->
            </div>
            <div class="container-fluid" v-if="item.urlToImage!=null">
                <div class="img-box">
                    <img :src="item.urlToImage" alt="image">
                </div>
            </div>
            <div class="container-fluid">
                <p>{{item.description}}<span><a :href="item.url" target="_blank">Read More</a></span></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import news_key from '@/api-key'
export default {
    beforeCreate(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+news_key)
            .then(result=>{
                const newsList = result.data.articles
                this.$store.dispatch('setUsnews',newsList)
            })
            .catch(err=>{
                alert('Internal error occured, plz try again!')
            })
    },
    computed: {
        news() {
            return this.$store.getters.usnews
        }
    },
}
</script>

<style scoped>
.container{
    padding:1rem;
}
.newsblock{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
}
/* .img-box{
    display: flex;
    justify-content: center;
} */
.img-box img{
    max-width: 70%;
    max-height:70%;
    display: block;
    margin: 0 auto;
}

</style>
