import { ref } from'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/post/' + id)
        console.log(data)
        if (!data.ok) {
          throw Error('no data available')
        }

        // update post
        post.value = await data.json()
      } catch(err) {
        error.value = err.message
        console.log(err)
      }
    }
    return {
        post,
        error,
        load
    }
}

export default getPost