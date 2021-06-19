<template>
  <div class="wrapper">
        <div class="search-input">
            <input 
                type="text" 
                v-model="txtInput" 
                placeholder="Type to search..">
            <div 
                v-if="showDropdown" 
                class="autocom-box">
                <ul>
                    <li v-for="sugg in searchSuggest" :key="sugg" @click="select">
                        {{ sugg }}
                    </li>
                </ul>
            </div>
            <div class="icon" @click="handleIconClick">
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>


<script>
// Emmit events: submit, select, update

import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
    name: 'SearchBox',
    props: ['dataList'],
    setup(props) {
      let txtInput = ref('')
      let clickedValue = ref('')
        
      const suggestions = ref(props.dataList)

      const showDropdown = computed(() => {
        if (txtInput.value === clickedValue) {
          return false
        } else {
          clickedValue = '';
          return true
        }
      })

      const searchSuggest = computed(() => {
        return (txtInput.value) ? suggestions.value.filter(sugg => sugg.toLowerCase().startsWith(txtInput.value.toLowerCase())) : []
      })

      const handleIconClick = () => {
        let webLink = `https://www.google.com/search?q=${txtInput.value}`;
        window.open(webLink, '_blank').focus();
      }

      const select = (element) => {
        txtInput.value = element.currentTarget.innerText;
        clickedValue = txtInput.value
      }

      return { txtInput, select, handleIconClick, searchSuggest, showDropdown }
    }
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.wrapper{
  max-width: 450px;
  margin: 150px auto;
}

.wrapper .search-input{
  background: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);
}

.search-input input{
  height: 55px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
}

.search-input .autocom-box{
  pointer-events: auto;
  max-height: 280px;
  overflow-y: auto;
}

.autocom-box li{
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}

.autocom-box {
    list-style-type: none;
    text-align: left;
}

.search-input .autocom-box li{
  display: block;
}

.autocom-box li:hover{
  background: #efefef;
}

.search-input .icon{
  position: absolute;
  right: 0px;
  top: 0px;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 20px;
  color: #644bff;
  cursor: pointer;
}
</style>