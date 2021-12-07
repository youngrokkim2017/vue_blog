<template>
    <div class="post">
        <router-link :to="{ name: 'Details', params: { id: post.id } }">
            <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
</template>

<script>
import { computed } from 'vue'
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'

export default {
    props: ['post'],
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