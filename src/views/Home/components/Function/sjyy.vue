<template>
  <div id="right">
    <ul class="right-ul">
      <!-- <h3>数据应用</h3> -->
      <li class="li-1">
        <div class="li-1-title">
          <img src="../../../../assets/icon/工程检查.png" alt="" />
          <div class="span">勘查阶段</div>
        </div>
        <div class="li-1-btn">对症勘设</div>
      </li>
      <li class="li-2">
        <div class="li-2-title">
          <img src="../../../../assets/icon/施工.png" alt="" />
          <div class="span">施工阶段</div>
        </div>
        <div class="li-2-btn">边坡开挖监测</div>
        <div class="li-2-btn">软基预压效果</div>
      </li>
      <li class="li-3">
        <div class="li-3-title">
          <img src="../../../../assets/icon/运营管理.png" alt="" />
          <div class="span">运营阶段</div>
        </div>
        <div class="li-3-btn">靶向营养</div>
        <div class="li-3-btn li-3-btn-2">
          <div class="jianceyugao">监测预告</div>
          <div class="content">
            <div>橋梁</div>
            <div>邊坡</div>
            <div>軟基</div>
            <div>尾矿坝</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="less">
#right {
  width: 110px;
  // height: 600px;
  display: flex;
  // background-color: yellow;
  justify-content: center;
  margin-top: 80px;
  box-sizing: border-box;

  .right-ul {
    width: 90px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      width: 110px;
      // height: 80px;
      background-color: #ffffff0d;
      margin-bottom: 20px;
      border-radius: 5px;

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
    }

    .li-1 {
      padding-bottom: 13px;
      .li-1-title {
        display: flex;
        justify-content: center;
        margin-top: 10px;

        img {
          width: 25px;
          height: 25px;
        }
      }
      .li-1-btn {
        width: 80%;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin-left: 10px;
        margin-top: 10px;
        border-radius: 5px;
        background-color: #1e56a04d;
        border: 2px solid rgb(23, 73, 140);
      }
    }

    .li-2 {
      // height: 500px;
      padding-bottom: 13px;

      .li-2-title {
        display: flex;
        justify-content: center;
        margin-top: 10px;

        img {
          width: 25px;
          height: 25px;
        }
      }
      .li-2-btn {
        width: 80%;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin-left: 10px;
        margin-top: 10px;
        border-radius: 5px;
        background-color: #1e56a04d;
        border: 2px solid rgb(23, 73, 140);
        font-size: 12px;
      }
    }

    .li-3 {
      padding-bottom: 13px;

      .li-3-title {
        display: flex;
        justify-content: center;
        margin-top: 10px;

        img {
          width: 25px;
          height: 25px;
        }
      }
      .li-3-btn {
        width: 80%;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin-left: 10px;
        margin-top: 10px;
        border-radius: 5px;
        background-color: #1e56a04d;
        border: 2px solid rgb(23, 73, 140);
        font-size: 12px;
      }

      .li-3-btn-2 {
        width: 80%;
        height: 210px;
        padding: 5px;
        margin-left: 10px;
        margin-top: 10px;
        border-radius: 5px;
        background-color: #1e56a04d;
        border: 2px solid rgb(23, 73, 140);
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .content {
          padding: 5px;
          display: flex;
          flex-direction: column;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            margin-top: 5px;
            border-radius: 5px;
            background-color: #1e56a04d;
            border: 2px solid rgb(23, 73, 140);
          }
        }
      }
    }
  }
}
</style>
