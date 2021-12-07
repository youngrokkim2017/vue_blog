<template>
  <div class="home">
    Home
    <!-- <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div> -->

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
// import { ref, computed } from 'vue'
import PostList from '../components/PostList.vue' 
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList },
  // add composition api
  setup() {
    // will run before any other lifecycle method
    
    // // search
    // const search = ref('')
    // const names = ref(['mickey', 'donald', 'goofy', 'pluto', 'minnie'])

    // const matchingNames = computed(() => {
    //   return names.value.filter(name => name.includes(search.value))
    // })

    // composables getPost
    const { posts, error, load } = getPosts()

    load()

    return {
      // names,
      // matchingNames,
      // search,
      posts,
      error
    }
  }
}
</script>
