<script setup>
const title = ref("Home");
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Link rel="stylesheet" href="style.css" />
    </Head>
    <h1>Home Page</h1>
  </div>
</template>

<style scoped></style>
