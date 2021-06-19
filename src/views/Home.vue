<template>
  <div class="home">
    <div class="header-ribbon stick-header">
      <p class="page-header">Home</p>
    </div>
  </div>
  <SearchBox 
    :dataList="dataList" 
    @update="logUpdate"
    @select="logSelect"
    @submit="logSubmit"/>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import { ref } from '@vue/reactivity'
export default {
  components: {
    SearchBox
  },

  setup() {
    const dataList = ref(
      [
        "Channel",
        "CodingLab",
        "CodingNepal",
        "YouTube",
        "YouTuber",
        "YouTube Channel",
        "Blogger",
        "Bollywood",
        "Vlogger",
        "Vechiles",
        "Facebook",
        "Freelancer",
        "Facebook Page",
        "Designer",
        "Developer",
        "Web Designer",
        "Web Developer",
        "Login Form in HTML & CSS",
        "How to learn HTML & CSS",
        "How to learn JavaScript",
        "How to become Freelancer",
        "How to become Web Designer",
        "How to start Gaming Channel",
        "How to start YouTube Channel",
        "What does HTML stands for?",
        "What does CSS stands for?"
      ]
    )

    const logUpdate = (e) => {
      console.log('homeupdate: ' + e)
    }

    const logSelect = (e) => {
      console.log('homeselect: ' + e)
    }

    const logSubmit = (e) => {
      console.log('homesubmit: ' + e)
    }

    return { dataList, logUpdate, logSelect, logSubmit }
  }
}
</script>
