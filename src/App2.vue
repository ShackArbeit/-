<script setup> 
  import {ref,computed} from 'vue'
  const isVisible=ref(false)
  const inputValue = ref(''); 
  const linkValue = ref('');
  const isDisabled=ref(true)
  const show_container=ref(false)
  const format_link = computed(() => {
   if (linkValue.value) {
      if (!linkValue.value.startsWith('https://') && !linkValue.value.startsWith('http://')) {
        return 'https://' + linkValue.value;
      }
      return linkValue.value; 
    }
      return ''; 
 }); 


  function toggleVisibility(){
       isVisible.value = !isVisible.value; 
       show_container.value=!show_container.value;
  }
  function deleteBlock(){
    isVisible.value = false;
    show_container.value=false;
    inputValue.value='';
    linkValue.value=''; 
  }
  function toggleCheckbox(){  
    isDisabled.value = !isDisabled.value;
      if (isDisabled.value) {
        inputValue.value = '';
        linkValue.value = '';
        show_container.value = false; 
        console.log('清除成功!!');
      } else {
        show_container.value = true; 
      }
  }
</script>

<template>
     <div class="home-link-block">
      <div class="editor">
        <div class="content-blocks-card-states-outlined">
          <div class="state-layer">
          </div>
        </div>
        <!-- 標記開始 -->
        <div v-if="isVisible" class="content-blocks-card-states-filled">
          <div class="state-layer2">
            <div class="drag-layer">
            </div>
            <div class="container">
              <div class="text-layer">
                <div class="text-field">
                  <input type="text" v-model="inputValue" :disabled="isDisabled" placeholder="連結標題" class="text-field2"/>
                </div>
                <div class="text-field">
                  <input type="text" v-model="linkValue" :disabled="isDisabled" placeholder="連結網址" class="text-field2"/>
                </div>
              </div>
              <div class="botton-layer">
                <div class="icon-button">
                  <div class="container2">
                    <div v-on:click="deleteBlock()" class="state-layer4">
                      <span id="i2ezf" class="material-symbols-outlined">
                        delete
                      </span>
                    </div>
                  </div>
                </div>
                <!-- 標籤標記開始 -->
                <div class="panel panel-default">
                  <div class="panel-body">
                    <!-- 只需此標籤 -->
                    <label class="switch2"><input type="checkbox" v-on:click="toggleCheckbox"/><div class="slider round">
                      </div></label>
                    <p>{{ checkbox }}
                    </p>
                  </div>
                </div>
                <!-- 標籤標記結束-->
              </div>
            </div>
          </div>
        </div>
        <!-- 標記結束 -->
      </div>
      <div class="preview">
        <div class="button">
          <div class="state-layer6">
            <div class="label-text2">https://mobiweb.x/xxxxxxx
            </div>
          </div>
        </div>
        <div class="i-phone-14-15-pro-max-2">
          <div v-if="show_container">
            <p>Your Title ：
              <a :href="format_link" target="_blank">
                {{ inputValue }}
              </a>
            </p>
          </div>
          <!-- 這裡添加了結束標籤 -->
        </div>
      </div>
      <div class="side-sheet">
        <div class="header">
          <div class="content2">
            <div class="headline-text">新增區塊
            </div>
            <div class="button2">
              <div class="state-layer7">
                <div class="label-text3">0/15
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content3">
          <div class="nav-item-1">
            <div v-on:click="toggleVisibility()" class="state-layer8">
              <span class="material-symbols-outlined">
                link
              </span>
              <label class="label">網址連結</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation-rail">
      <div class="logo">
        <img src="https://iotapp.ttu.edu.tw/ionic-project/test1/logo.png"/>
      </div>
      <div class="frame-35">
        <div class="building-blocks-nav-item">
          <div class="container2">
            <div class="state-layer9">
              <span class="material-symbols-outlined">
                bolt
              </span>
            </div>
          </div>
        </div>
        <div class="building-blocks-nav-item">
          <div class="container2">
            <div class="state-layer9">
              <span class="material-symbols-outlined">
                settings
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="destinations">
        <div class="nav-item-12">
          <div class="container4">
            <div class="state-layer10">
              <span class="material-symbols-outlined">
                home
              </span>
            </div>
          </div>
          <div class="label2">主頁
          </div>
        </div>
        <div class="nav-item-2">
          <div class="container5">
            <div class="state-layer10">
              <span class="material-symbols-outlined">
                storefront
              </span>
              <!-- <i class="material-icons">storefront</i>  -->
            </div>
          </div>
          <div class="label3">商店
          </div>
        </div>
        <div class="nav-item-3">
          <div class="container5">
            <div class="state-layer10">
              <!-- <i class="material-icons">format_paint</i> -->
              <span class="material-symbols-outlined">
                format_paint
              </span>
            </div>
          </div>
          <div class="label3">外觀
          </div>
        </div>
        <div class="nav-item-4">
          <div class="container5">
            <div class="state-layer10">
              <span class="material-symbols-outlined">
                analytics
              </span>
            </div>
          </div>
          <div class="label3">數據
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
    @import './index2.css'
</style>
