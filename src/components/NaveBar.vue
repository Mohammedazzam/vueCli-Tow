<template>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link" active-class="active" exact href="#">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link" active-class="active" href="#">About Us</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/Posts" class="nav-link" active-class="active" href="#">Posts</router-link>
      </li>

            <li><router-link to="/posts/1">Post 1</router-link></li>
            <li><router-link to="/posts/2">Post 2</router-link></li>

      <li class="nav-item">
        <router-link to="/Users" class="nav-link" active-class="active" href="#">Users</router-link>
      </li>
    </ul>
</template>