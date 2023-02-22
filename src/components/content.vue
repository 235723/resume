<template>
    <div class="content-bd">
        <el-row>
            <el-col  class="item-border">
                <div class="item">
                    <el-divider>项目经历</el-divider>
                    <el-descriptions title="1.仿造学校官网">
                        <el-descriptions-item label="项目时间">2021年9月</el-descriptions-item>
                    </el-descriptions>
                    项目简介
                    <p class="introduction">
                        一个静态网页。基于html+css+JavaScript。<br>
                        实现的主要功能有：导航栏，轮播图，搜索框。
                    </p>

                    <el-descriptions title="2.产业大脑（web）">
                        <el-descriptions-item label="项目时间">2022年2月-2022年6月</el-descriptions-item>
                    </el-descriptions>
                    项目简介
                    <p class="introduction">
                        基于vue全家桶+element-ui+echarts+axios。 <br>
                        本人负责该项目的前端开发和维护。<br>
                        本人实现的主要功能有：项目官网，后台管理相关页面，登录页面。
                    </p>
                    <el-descriptions title="3.产业大脑（小程序）">
                        <el-descriptions-item label="项目时间">2022年2月-2022年6月</el-descriptions-item>
                    </el-descriptions>
                    项目简介
                    <p class="introduction">
                        基于uni-app+uView。 <br>
                        本人负责该项目的前端开发和维护。<br>
                        本人实现的主要功能有：首页，个人中心，详情页。
                    </p>
                    <el-descriptions title="4.个人简历（已开源）">
                        <el-descriptions-item label="项目时间">2023年2月</el-descriptions-item>
                    </el-descriptions>
                    开源地址：<a @click="openGithub('https://github.com/235723/resume')">https://github.com/235723/resume </a>  <br>
                    预览地址：<a @click="openGithub('http://ysbm.top')">http://ysbm.top </a> <br>
                    项目简介
                    <p class="introduction">
                        基于vue+element-ui+html2Canvas+jspdf。 <br>
                        一份优雅简约的简历 <br>
                        优化构建，页面秒开无闪烁 <br>
                        自适应屏幕兼容移动端 <br>
                        可在线浏览 <br>
                        自动生成 PDF，全自动化流程 <br>
                        本项目基于线上开源项目开发的VUE版本项目 <br>
                    </p>
                </div>
            </el-col>
            <el-col>
                <el-divider>工作经验</el-divider>
                <div class="work">
                    <h3>台州美路智能科技有限公司</h3>
                    <p class="introduction">
                        2022.2-2022.6 前端开发工程师<br>
                        负责网站前端开发，实现产品的页面交互及功能实现。参与项目的开发主要基于 vue  进行 web  前端开发，使用 uniAPP  开发小程序。
                    </p>
                </div>
                <div class="skill">
                    <el-divider>技能</el-divider>
                    <section>
                        <ul>
                            <li>有半年的小程序和web项目开发经验，熟练使用vue开发项目</li>
                            <li>
                                熟悉前端技术html、vue、js、css、flex，有实际项目中的前端开发、维护经验
                            </li>
                            <li>
                                掌握网页重构所需的css、scss
                            </li>
                            <li>
                                掌握前端流行框架vue、element-ui
                            </li>
                            <li>
                                熟知js基本语法与知识，熟悉js
                            </li>
                            <li>
                                熟练掌握git、github等工具使用
                            </li>
                        </ul>
                    </section>
                    <el-divider>致谢</el-divider>
                    <h3>
                        感谢您百忙之中阅读这份履历，诚挚的期望能得到面试的机会，希望有荣幸能为公司效力！再次致以我最诚挚的谢意！！
                    </h3>
                </div>
            </el-col>

        </el-row>


    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        openGithub(href){
            window.open(href)
        }
    }
}
</script>

<style scoped>
.content-bd {
    background-color: #fff;
    padding: 20px 30px;
}

.item-border {
    border-right: 1px solid #ededed;
}

.el-col {
    padding: 0 10px;
}

.el-divider__text {
    font-size: 22px !important;
}

.introduction {
    background: #f5f5f5;
    border-radius: 6px;
    padding: 4px 8px;
    color: #5f5f5f;
    font-family: "等线";
    font-size: 13px;
    line-height: 1.5rem;
}
ul li {
    font-size: 18px;
    line-height: 40px;
}
a {
    cursor: pointer;
}
a:hover {
    color: blue;
    text-decoration:underline;
}
.el-row {
    display: flex;
    justify-content: space-between;
}
@media (max-width: 600px) {
  .el-row {
        flex-direction: column;
    }
    .item-border {
        border: 0;
    }
  }
</style>