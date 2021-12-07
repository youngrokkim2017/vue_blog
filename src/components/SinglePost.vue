<template>
  <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
export default {
    props: [post],
    setup(props) {
        // snippet for body
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + "..."
        })
        return { snippet }

        // // lifecyle hooks in setup
        // onMounted(() => {})

        // onUnmounted(() => {})

        // onUpdated(() => {})
    },
}
</script>

<style>

</style>