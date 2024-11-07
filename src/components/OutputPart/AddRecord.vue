<script setup>


</script>

<template>
 <div class="blockPart">
                <p style="flex: 1 0 0;color:  #4E4545;
                            font-family: Noto Sans TC;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height:  24px;
                            letter-spacing:  0.15px;">已新增的區塊</p>
                <p style="display: flex;flex-direction: column;justify-content: center;align-items: center;gap: 8px;align-self: stretch;">0/15</p>
         </div>
    
</template>


<style scoped>
.blockPart{
    display: flex;
    height: 80px;
    padding: 24px;
    font-size:18px;
    align-items: center;
    align-self: stretch;
    margin-bottom: 1rem;
}
@media(max-width:768px) {
    .blockPart{
        margin-bottom: 3rem;
        flex-direction: column;
    }
} 

</style>