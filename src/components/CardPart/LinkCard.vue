<script setup>
// 使用 Pinia Store ，從 AddAndRemoveLinkCard.js 中引入 useLinkCardStore
import {useLinkCardStore} from '@/stores/AddAndRemoveLinkCard'
const linkCardStore=useLinkCardStore()
const props=defineProps({
   cardId:Number
})
function deleteCard(){
     linkCardStore.deleteLinkCard(props.cardId)
     console.log('已經刪除卡片了')
}

</script>

<template>
<div class="container">
  <div class="leftBar"> 
     <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
          <div>
            <span style="margin-right:.2rem">●</span>
            <span>●</span>
          </div>
          <div>
            <span  style="margin-right:.2rem">●</span>
            <span>●</span>
          </div>
          <div>
            <span style="margin-right:.2rem">●</span>
            <span>●</span>
          </div>
      </div>
   </div> 
 <div class="rightPart">
    <div class="inputContainer">
                 <!-- 標題 -->
        <input class="inputStyle" placeholder="網站標題"  type="text">

    <!-- 網址 -->
        <input class="inputStyle" placeholder="連結網址"  type="text">
    </div>
    <!-- Icon 容器部分 -->
    <div class="iconContainer">
        <div class="deleteContainer" @click="deleteCard">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 24" fill="none">
                <mask id="mask0_59224_5529" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                <rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_59224_5529)">
                <path d="M7.5 21C6.95 21 6.47917 20.8042 6.0875 20.4125C5.69583 20.0208 5.5 19.55 5.5 19V6C5.21667 6 4.97917 5.90417 4.7875 5.7125C4.59583 5.52083 4.5 5.28333 4.5 5C4.5 4.71667 4.59583 4.47917 4.7875 4.2875C4.97917 4.09583 5.21667 4 5.5 4H9.5C9.5 3.71667 9.59583 3.47917 9.7875 3.2875C9.97917 3.09583 10.2167 3 10.5 3H14.5C14.7833 3 15.0208 3.09583 15.2125 3.2875C15.4042 3.47917 15.5 3.71667 15.5 4H19.5C19.7833 4 20.0208 4.09583 20.2125 4.2875C20.4042 4.47917 20.5 4.71667 20.5 5C20.5 5.28333 20.4042 5.52083 20.2125 5.7125C20.0208 5.90417 19.7833 6 19.5 6V19C19.5 19.55 19.3042 20.0208 18.9125 20.4125C18.5208 20.8042 18.05 21 17.5 21H7.5ZM17.5 6H7.5V19H17.5V6ZM10.5 17C10.7833 17 11.0208 16.9042 11.2125 16.7125C11.4042 16.5208 11.5 16.2833 11.5 16V9C11.5 8.71667 11.4042 8.47917 11.2125 8.2875C11.0208 8.09583 10.7833 8 10.5 8C10.2167 8 9.97917 8.09583 9.7875 8.2875C9.59583 8.47917 9.5 8.71667 9.5 9V16C9.5 16.2833 9.59583 16.5208 9.7875 16.7125C9.97917 16.9042 10.2167 17 10.5 17ZM14.5 17C14.7833 17 15.0208 16.9042 15.2125 16.7125C15.4042 16.5208 15.5 16.2833 15.5 16V9C15.5 8.71667 15.4042 8.47917 15.2125 8.2875C15.0208 8.09583 14.7833 8 14.5 8C14.2167 8 13.9792 8.09583 13.7875 8.2875C13.5958 8.47917 13.5 8.71667 13.5 9V16C13.5 16.2833 13.5958 16.5208 13.7875 16.7125C13.9792 16.9042 14.2167 17 14.5 17Z" fill="#4E4545"/>
                </g>
            </svg>
        </div>
        <div class="panel panel-default">
                  <div class="panel-body">
                    <label class="switch2"><input type="checkbox" /><div class="slider round">
                    </div></label>
                  </div>
                </div>
        </div>
   
 </div>

</div>


</template>



<style scoped>

.container{
    display:flex;
    height:35.37%; 
    width:88.88%;
    margin: 0 auto; 
    align-items: flex-start; 
    top:3rem;
    border-radius:28px;
    background:  #E6E1E1;
    margin-bottom:1rem;
}
.leftBar{
   width:15%;
   height:100%;  
   position: relative;
}
.rightPart{
    width:85%;
    height:100%; 
}
.inputContainer{
    width:100%;
    height:75%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inputStyle{
    width:90.19%;
    height:48px;
    margin-top:15px;
    margin-bottom:15px;
    border:none;
    border-radius: 20px;
    padding-left:1.5rem;
    background-color:#f2f2f2;
    position: relative;
    cursor: pointer;
}
.inputStyle::placeholder{
    font-size:18px;
    color:black;
    letter-spacing:.15em;
}
.inputStyle:hover{
    border:1px solid #ff4343;
}
.iconContainer{
    width:100%;
    height:25%;
    display:flex;
    justify-content: flex-end;
    padding-right:2rem;
    box-sizing: border-box;

}
.deleteContainer{
    cursor: pointer;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items:center;
    height:35px;
    width:35px;
    margin-right:1rem;
    border:2px solid red;
}
.switch2{
  cursor: pointer;
  position:relative;
  display:inline-block;
  top:.6rem;
  width:60px;
  height:34px;
}
.switch2 input{
  display:none;
}
.slider{
  position:absolute;
  cursor:pointer;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:#ccc;
  transition:0.4s;
}
.slider:before{
  position:absolute;
  content:'';
  height:26px;
  width:26px;
  left:4px;
  bottom:4px;
  background-color:white;
  transition:0.4s;
}
input:checked + .slider{
  background-color:#101010;
}
input:focus + .slider{
  box-shadow:0 0 1px #101010;
}
input:checked + .slider:before{
  transform:translateX(26px);
}
.slider.round{
  border-radius:34px;
}
.slider.round:before{
  border-radius:50%;
}

 @media (max-width: 1200px) {
    .container {
        width: 86.54%;
        height:35.37%; 
    }
    .rightPart {
        height: 100%; 
    }
    .leftBar{
      height:200px;
    } 
    .inputStyle{
      width:80%;
      height:38px;
    }
    .inputStyle::placeholder{
      font-size:15px;
      color:black;
      letter-spacing:.12em;
    }
    .deleteContainer{
        width:30px;
        height:30px
    }
    .switch2{
        width:48px;
        height:27px;
    }
    .slider:before{
      position:absolute;
      content:'';
      height:20px;
      width:20px;
      left:4px;
      bottom:4px;
      background-color:white;
      transition:0.4s;
     }
     input:checked + .slider:before{
       transform:translateX(20px);
}
    
}



 @media (max-width: 768px){
    .container{
        width:60.60%;
        height:auto;
    }
    .rightPart {
        height: 100%; 
    }
    .leftBar{
      height:250px;
    } 
    .inputStyle{
      width:70%;
      height:30px;
    }
    .inputStyle::placeholder{
      font-size:12px;
      color:black;
      letter-spacing:.1em;
    }
    .deleteContainer{
        width:25px;
        height:25px;
    }
    .switch2{
        width:38px;
        height:21.53px;
    }
    .slider:before{
      position:absolute;
      content:'';
      height:15px;
      width:15px;
      left:4px;
      bottom:4px;
      background-color:white;
      transition:0.4s;
     }
     input:checked + .slider:before{
       transform:translateX(15px);
     } 
} 

</style>