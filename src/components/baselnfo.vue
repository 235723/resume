<template>
  <div class="content-bd">
    <img src="../assets/1.jpg" alt="">
    <div class="content-right">
      <div class="title">
        <span class="name">卢志瑶</span>
        <span class="post">前端开发工程师</span>
      </div>
      <section class="section-left">
        <ul>
          <li>男 / 2001.1</li>
          <li>台州科技职业学院</li>
          <li>信息安全与管理</li>
          <li>专科 / 2022年毕业</li>
        </ul>
      </section>
      <section class="section-right">
        <ul>
          <li>Github - 2357</li>
          <li>2357236437@qq.com</li>
          <li>15606582396 &nbsp;&nbsp;<i class="el-icon-phone"></i></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul,li {
  list-style: none;
  padding: 0;
}
.content-bd {
  padding: 38px 50px;
  height: 180px;
  background-image: linear-gradient(141deg,#c25dec,#198cde 51%,#3591e0 80%);
}
img {
  position: absolute;
  top:15%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.content-right {
  position: relative;
  float: right;
  width: 950px;
}
.title {
  color: #fff;
  border-bottom: 1px solid #fff;
}
.title .name {
  font-size: 50px;
}
.title .post {
  float: right;
  font-size: 30px;
  line-height: 79px;
}
.section-left {
  position: absolute;
  left: 0;
  line-height: 22px;
  color: #fff;
}
.section-right {
  position: absolute;
  right: 0;
  line-height: 22px;
  color: #fff;
}
</style>