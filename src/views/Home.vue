<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  // add composition api
  setup() {
    // will run before any other lifecycle method

    // template refs
    // const p = ref(null)

    // now reactive variables
    const name = ref('Daffy')
    const age = ref(12)

    const handleClick = () => {
      name.value = 'Bugs'
      age.value = 21
    }

    return {
      // name: name,
      name,
      // age: age,
      age,
      handleClick
    }
  }
}
</script>
