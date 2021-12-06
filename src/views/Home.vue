<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // add composition api
  setup() {
    // will run before any other lifecycle method
    let name = 'Daffy'
    let age = 12

    const handleClick = () => {

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
