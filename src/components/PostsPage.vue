<template>
    <div>
        <h1>Post</h1>
        <ul>
            <li><router-link to="/posts/1?=1&name=test1">Post 1</router-link></li>
            <li><router-link :to="{name:'single-post',params:{id:2},query:{q:2,name:'test2'}}">Post 2</router-link></li>
        </ul>
    </div>
</template>