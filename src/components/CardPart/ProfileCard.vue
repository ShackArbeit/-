<script setup>

</script>

<template>
<div class="card-container">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dAhStiHcrHApsHPn4NzbbrQ7GkfOgnBPMQ&s" alt="自我簡介圖片" 
    class="profile-image">
    <p class="description">寫下你的自我簡介吧!</p>
</div>


</template>


<style scoped>
 .card-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 28px;
    box-sizing: border-box;
    border: 1px solid v #D1C3C3;
    margin: 0 auto;;
    background:  #FEF8F7;
    border:1px solid #bdc2c3;
    display: flex;
 }
@media(min-width:1200px){
 .card-container {
    width:88.88%;
    height:35.71%;   
}
.profile-image {
    width:25%;
    height:50%;
    border-radius: 50%;
}
.description {
    font-size: 20px;
    color: #333;
    width:25%;
    letter-spacing:.15em;
}
}
@media (max-width: 1200px){
    .card-container{
        width:86.54%;
        height: auto;  
        padding-top:1rem;
        padding-bottom:1rem;
    }
    .profile-image{
        width:25%;
        height: auto;
        border-radius: 50%; 
    }
    .description{
        font-size: 12px;
    }
}
@media (max-width: 768px){
    .card-container{
        width:60.60%;
    }
}

</style>