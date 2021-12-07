<template>
  <div class="home">
    Home
    <!-- <div v-for="name in names" :key="name">{{ name }}</div> -->
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  // add composition api
  setup() {
    // will run before any other lifecycle method
    
    const search = ref('')
    const names = ref(['mickey', 'donald', 'goofy', 'pluto', 'minnie'])

    // // watch to "watch for" change in the data
    // watch(search, () => {
    //   console.log('watch function run')
    // })

    // watchEffect(() => {
    //   console.log('watchEffect function run', search.value)
    // })

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    return {
      names,
      matchingNames,
      search
    }
  }
}
</script>
