<template>
  <van-nav-bar title="Trello Board">
    <template #left>
      <router-link to="/">Board</router-link>
    </template>
    <template #right>
      <router-link to="/about">About</router-link>
    </template>
  </van-nav-bar>
  <router-view />
</template>

<script setup>
</script>

<style lang="less" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-background-soft);
}
</style>
