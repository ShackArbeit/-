<script setup>

</script>


<template>
<input type="text" placeholder="mobiweb.x/xxxxxxx" class="inputStyle">

</template>

<style scoped>
.inputStyle{
    width:73.25%;
    height:60px;
    border:none;
    border-radius: 20px;
    background-color:#c8949d;
    margin-bottom:24px;
    cursor: pointer;
}
.inputStyle::hover{
    border:1px solid #fc2247;
}
.inputStyle::placeholder{
    font-size:18px;
    color:black;
    letter-spacing:.15em;
    padding-left:1.5rem; 
}
@media(max-width:1200px){
    .inputStyle{
        padding-left:0;
        margin:none;
        /* width:65.65%; */
        width:75%;
        height:48px;
        margin-right:1.5rem;
    }
}
@media(max-width:768px){
    .inputStyle{
        margin:none;
        height:48px;
        width:80%;
    }
    .inputStyle::placeholder{
        text-align: center;
    }
    .inputStyle::placeholder{
        font-size: 12px;
    }
}
/* @media(max-width:576px){
    .inputStyle{
        margin:none;
    }
    .inputStyle::placeholder{
        font-size: 12px;
    }
} */
</style>