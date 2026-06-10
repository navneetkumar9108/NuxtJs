<script setup></script>

<template>
  <div>
    <NuxtLink to="/" active-class="hello" exact-active-class="hii"
      >Home</NuxtLink
    >
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <NuxtLink to="https://geekyshows.com" target="_blank"
      >Go to geekyshows</NuxtLink
    >
    <MyNuxtLink to="/contact">new Contact</MyNuxtLink>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: chartreuse;
  color: black;
}
.hello {
  background-color: chartreuse;
  color: black;
}
</style>
