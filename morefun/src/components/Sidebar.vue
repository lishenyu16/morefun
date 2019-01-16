<template>
<div style="width:100%">
    <div class="mobile-sidebar dropdown">
        <button class="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown">
            &#9776;
        </button>
        <div class="dropdown-menu">
            <router-link to="/dog" tag="li" class="dropdown-item side-nav-item">
                Dog
            </router-link> 
            <router-link to="/cat" tag="li" class="dropdown-item side-nav-item">
                Cat
            </router-link> 
            <router-link to="/jokes" tag="li" class="dropdown-item side-nav-item">
                Jokes
            </router-link> 
            <router-link to="/news" tag="li" class="dropdown-item side-nav-item">
                News
            </router-link> 
        </div>
    </div>
    <div class="side-nav">
        <ul>
            <router-link to="/dog" tag='li' class="side-nav-item">
                <p>Dog</p>
            </router-link> 
            <router-link to="/cat" tag="li" class="side-nav-item">
                <p>Cat</p>
            </router-link> 
            <router-link to="/jokes" tag="li" class="side-nav-item">
                <p>Jokes</p>
            </router-link> 
            <router-link to="/news" tag="li" class="side-nav-item">
               <p>News</p>
            </router-link> 
        </ul>
        
    </div>
</div>

</template>

<script>
    export default {
    
    }
</script>

<style scoped>
    @media (max-width: 576px) {
        .mobile-sidebar{
            display:block;
            text-align: center;
        }
        .side-nav{
            display: none;
        }
        .dropdown-menu{
            background:#6c757d;
            position:absolute;
            top:0px !important;
            left:-16% !important;
            text-align: center;
        }
    }
    @media (min-width: 576px) {
        .side-btn{
            width:100%;
            background-color:inherit;
            border:none;
        }
        .side-nav{
            margin-top:0;
            width:100%;
            border:none;
            border-top:1px solid rgb(146, 142, 142);
            border-bottom:1px solid rgb(146, 142, 142);
            border-right:1px solid rgb(146, 142, 142);
            background-color:#FFF;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }
        .side-nav ul{            
            width:100%;
            padding-left:0;
            margin-bottom: 0;
        }
        .side-nav-item{
            text-decoration: none;
            text-align: center;
            list-style: none;
            color:#000;
        }
        .side-nav li p{
            padding:0;
            margin:0;
        }
        .side-nav li p:hover{
            transform: scale(1.5)
        }
        .side-nav li:hover,
        .side-nav li.router-link-active,
        .side-nav li.router-link-exact-active {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            background-color:#000;
            color:#FFF;
            cursor: pointer;
        }

        .mobile-sidebar{
            display:none;
        }
    }
</style>
