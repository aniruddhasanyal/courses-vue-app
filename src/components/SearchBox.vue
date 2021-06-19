<template>
  <div class="wrapper">
        <div class="search-input" ref="searchWrapper">
            <input 
                type="text" 
                v-model="txtInput" 
                placeholder="Type to search..">
            <div 
                v-if="suggestList" 
                class="autocom-box">
                <ul>
                    <li v-for="sugg in suggestList" :key="sugg" @click="select">
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
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
export default {
    name: 'SearchBox',
    props: ['dataList'],
    setup(props) {
        const searchWrapper = ref(null)
        const suggestList = []
        let txtInput = ref('')
        
        const suggestions = ref(props.dataList)
        
        
        let active = true

        watchEffect(() => {
            if (txtInput.value && !active && suggestList) {
                active = !active
            } else if(txtInput.value) {
                suggestList.length = 0;
                suggestList.push(...suggestions.value.filter(sugg => sugg.toLowerCase().startsWith(txtInput.value.toLowerCase())));
                if (suggestList.length) {
                    searchWrapper.value.classList.add("active"); //show autocomplete box
                } else {
                    searchWrapper.value.classList.remove("active"); //hide autocomplete box
                }
            }else if (searchWrapper.value) {
                 searchWrapper.value.classList.remove("active"); //hide autocomplete box
             }
        })

        const handleIconClick = () => {
            let webLink = `https://www.google.com/search?q=${txtInput.value}`;
            window.open(webLink, '_blank').focus();
        }

        const select = (element) => {
            searchWrapper.value.classList.remove("active");
            txtInput.value = element.currentTarget.innerText;
            suggestList.length = 0;
            active = false
        }

        return { searchWrapper, txtInput, select, suggestList, handleIconClick }
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

.search-input.active input{
  border-radius: 5px 5px 0 0;
}

.search-input .autocom-box{
  padding: 0;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;
}

.search-input.active .autocom-box{
  padding: 10px 8px;
  opacity: 1;
  pointer-events: auto;
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

.search-input.active .autocom-box li{
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