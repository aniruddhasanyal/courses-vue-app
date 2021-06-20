<template>
  <div>{{ courseId }}</div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    props: ['id'],
    name: 'CourseDetails',
    setup(props) {
        const courseId = ref(props.id)
        return { courseId }
    }

}
</script>

<style>

</style>