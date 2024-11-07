<script setup>
   let titles=['台北','桃園','台中','彰化','台南','高雄','花蓮']
   import InputBar from '../OutputPart/InputBar.vue'
  import { showCellPhoneStore } from '../../stores/showCellPhone';
  const closeCellPhone=showCellPhoneStore()
  function closeCellPhoneButton(){
    closeCellPhone.closeShowMainPart()
    console.log('再次確認已經關閉了')
  }
  

</script>


<template>
  <div class="container">
      <div class="checkInputContainer">
        <InputBar/>
      </div>
      <div class="MainPart" >
        <img src="https://picsum.photos/440/960?random=1" alt="背景圖片" class="background-image"> 
        <!-- 頭像與電子信箱部分 -->

        <div class="profilePart">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9suWzjhexZofbyuZQWz8MQcolZOqq7vHvBg&s" alt="自我簡介圖片" class="profile-image">
          <p class="description">g0972222165@gmail.com</p>
        </div>
      <!-- 傳送按鈕部分 -->
        <div class="buttonPart">
            <button v-for="(value,index) in titles" class="clickButton" :key="index">
                {{ value }}
            </button>
      </div>
    </div>
  </div>

  <div class="container2" >
       <div class="closeIcon"  @click="closeCellPhoneButton">
              <span class="material-symbols-outlined" style="font-size: 45px;">
                  close
              </span>
        </div>
        <div class="MainPart2" >
        <img src="https://picsum.photos/440/960?random=1" alt="背景圖片" class="background-image"> 
       
        <!-- 頭像與電子信箱部分 -->

        <div class="profilePart" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9suWzjhexZofbyuZQWz8MQcolZOqq7vHvBg&s" alt="自我簡介圖片" class="profile-image">
          <p class="description">g0972222165@gmail.com</p>
        </div> 
       
      <!-- 傳送按鈕部分 -->
        <div class="buttonPart">
            <button v-for="(value,index) in titles" class="clickButton" :key="index">
                {{ value }}
            </button>
        </div>
</div>
     
  </div> 


</template>


<style scoped>
*{
    position: relative;
    box-sizing: border-box;
}
.container{
    text-align: center;
    width:100%;
    height:100%;
    display:block;
    overflow: hidden;
    padding-top:30px;
    border-radius: 20px;
    box-sizing: border-box;  
}
.container2{
    text-align: center;
    width:100%;
    height:100%; 
    display:none;
    padding-top:30px;
    border-radius: 20px;
    box-sizing: border-box;
    position: relative;
    padding-top:1.5rem;
}
.MainPart{
   width:73.25%;
   height:90%; 
   position: relative;
   box-sizing: border-box;
   margin: 0 auto;
   padding-top:1.5rem; 
}
.MainPart2{
   width:100%;
   height:90%; 
   position: relative;
   box-sizing: border-box;
   margin: 0 auto;
   padding-top:1.5rem;
}
.closeIcon{
   cursor: pointer;  
   position: absolute;
   top:0;
   right:0;
   cursor: pointer;
}


.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: -1; 
    border-radius: 30px;
}
.profilePart{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    height:20%;
}
.profile-image {
    display: flex;
    width: 130px;
    height: 130px; 
    border-radius: 50%;
}
.description {
    font-size: 18px;
    color:#0b0b0b;
    letter-spacing:.15em;
}
.buttonPart{
   box-sizing: border-box;
   width:100%;
   height:80%;
   padding-top:2rem;
   padding-left:1rem;
   padding-right:1rem;
}
.clickButton{
  width:100%;
  height:10%;
  font-size:24px;
  text-align: center;
  margin-top:.5rem;
  margin-bottom:.5rem;
  border:1px solid #babab0;
  border-radius: 20px;
  cursor: pointer;
  background-color: #f1f1a1;
}
.clickButton:hover{
  background-color: #adffeb;
}
.checkInputContainer{
   display:block
}


@media(max-width:1200px){
  .container{
     display:none;
  }
  .checkInputContainer{
     display:none;
  }
  .checkPhone{
    display:none;
  } 
  .container2{
     display:block;
  }
}



</style>