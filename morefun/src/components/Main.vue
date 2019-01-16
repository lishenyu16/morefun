<template>
    <div class="container-fluid mt">
        <div class="row">
            <div class="col-12 col-sm-2 mt-10">
                <side-bar></side-bar>
            </div>
            <div class=" col-12 col-sm-10 mt-6">
                <router-view></router-view>
            </div>
        </div>        
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue'
    export default {
        components:{
            sideBar:Sidebar
        }
    }
</script>

<style scoped>
.container-fluid{
    padding-left:0;
}
.col-2{
    padding-left:0;
    padding-right:0;
}
@media (max-width: 576px) {
    .mt{
        margin-top:4rem;
    }
}
@media (min-width: 576px) {
    .mt-10{
        font-size:1.5rem;
        margin-top:10rem;
    }
    .mt-6{
        margin-top:5rem;
    }
}

</style>
