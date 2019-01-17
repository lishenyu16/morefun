<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="https://lishenyu16.github.io/aboutMe" target="_blank">About Me</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="nav navbar-nav mr-auto">
                <router-link to="/main/" tag="li" class="nav-item">
                    <a class="nav-link">Home</a>
                </router-link> 
                <!-- <li class="nav-item">
                    <a class="nav-link" href="/main" target="_blank">Home <span class="sr-only">(current)</span></a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link" href="http://shenyu16.com" target="_blank">Blog</a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                    <a class="nav-link" href="#">Welcome </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
