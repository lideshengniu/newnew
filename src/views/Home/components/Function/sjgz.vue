<template>
  <div class="sjgz">
    <h3>数据感知</h3>
    <li>
      <img src="../../../../assets/icon/边坡.png" alt="" />
      <div class="span">高边坡</div>
      <div class="sjyykid"></div>
    </li>
    <li>
      <img src="../../../../assets/icon/桥梁.png" alt="" />
      <div class="span">超大桥梁</div>
      <div class="sjyykid"></div>
    </li>
    <li>
      <img src="../../../../assets/icon/道路巡查.png" alt="" />
      <div class="span">深厚软基</div>
      <div class="sjyykid"></div>
    </li>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="less">
.sjgz {
  background-color: #ffffff0d;
  width: 110px;
  padding-bottom: 10px;
  // height: 80px;
  h3 {
    color: #ccc;
    font-weight: 700;
    text-align: center;
    margin-top: 13px;
    margin-bottom: 13px;
    font-size: 16px;
    font-weight: 700;
  }
  li {
    width: 80px;
    height: 80px;
    background-color: #ccc;
    margin-bottom: 10px;
    border-radius: 5px;
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #1e56a04d;
    border: 2px solid rgb(23, 73, 140);

    &:hover {
      cursor: pointer;
    }

    img {
      width: 40px;
      height: 40px;
      display: block;
    }
    .span {
      color: #2089fd;
    }
    .insar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // padding-bottom: 7px;
    }
  }
}
</style>
