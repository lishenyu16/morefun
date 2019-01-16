<template>
    <div class="container-fluid mt-6">
        <div class="row">
            <div class="col-12 col-sm-2">
                <side-bar></side-bar>
            </div>
            <div class=" col-12 col-sm-10">
                <router-view></router-view>
            </div>
        </div>        
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue'
    import Content from './Content.vue'
    export default {
        components:{
            sideBar:Sidebar,
            appContent:Content
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
.mt-6{
    margin-top:5rem;
}
</style>
