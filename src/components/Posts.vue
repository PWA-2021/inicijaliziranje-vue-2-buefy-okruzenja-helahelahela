<template>
  <ul class="posts">
    <li v-for="post in posts" :key="post.title">
      <span>{{ post.title }}</span>
      <span>{{ post.category }}</span>
      <span>{{ post.entry }}</span>
      <span>{{ post.date }}</span>
      <!-- <div class="tooltip">{{ letter.alt }}</div> -->
    </li>
  </ul>
</template>
