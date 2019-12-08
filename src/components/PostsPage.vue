<template>
    <div>
        <h1>Post</h1>
        <ul>
            <li><router-link to="/posts/1">Post 1</router-link></li>
            <li><router-link :to="{name:'single-post',params:{id:2}}">Post 2</router-link></li>
        </ul>
    </div>
</template>