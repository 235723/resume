<template>
  <div class="content-bd">
    <div class="content-right">
      <div class="title">
        <span class="name">卢志瑶</span>
        <span class="post">前端开发工程师</span>
      </div>
      <div class="personal">
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
            <li>Github - 235723</li>
            <li>2357236437@qq.com</li>
            <li>15606582396 &nbsp;&nbsp;<i class="el-icon-phone"></i></li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul,
li {
  list-style: none;
  padding: 0;
}

.content-bd {
  padding: 38px 50px;
  /* height: 180px; */
  white-space: nowrap;
  background-image: linear-gradient(141deg, #c25dec, #198cde 51%, #3591e0 80%);
}

.content-right {
  display: flex;
  flex-direction: column;
}

.personal {
  width: 100%;
  /* height: 200px; */
  display: flex;
  justify-content: space-between;
}

.title {
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  color: #fff;
  border-bottom: 1px solid #fff;
}

.title .name {
  font-size: 50px;
}

.title .post {
  font-size: 30px;
  line-height: 79px;
}

.section-left {
  line-height: 22px;
  color: #fff;
}

.section-right {
  line-height: 22px;
  color: #fff;
}

@media (max-width: 600px) {
  .title {
    flex-direction: column;
  }
  .personal {
    flex-direction: column;
  }
}</style>