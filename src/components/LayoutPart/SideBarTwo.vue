<script setup>

import SideBarTwoContent from './SideBarTwoContent.vue';

</script>

<template>
    <div class="container">
        <!-- 新增區塊部分 -->
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
        <!-- 各區塊 Icon 部分 -->
        <SideBarTwoContent/>
    </div>

</template>


<style scoped>
.container{
    display: flex;
    width:100%;
    height:100%;
    flex-direction: column;
    align-items: flex-start; 
    align-self: stretch; 
    background: #F8F2F2;
}
.blockPart{
    display: flex;
    height: 80px;
    padding: 24px;
    font-size:18px;
    align-items: center;
    align-self: stretch;
    margin-bottom: 1rem;
}

</style>