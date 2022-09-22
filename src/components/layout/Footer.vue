<template>
  <div class="footer">
    <div class="footer-content wrapper">
      <div class="item-content">
        <div v-for="(item, index) in footer" :key="index" class="item">
          <p>{{ item.title }}</p>
          <span v-for="(child, idx) in item.children" :key="idx" @click="router.push({ name: child.router })">{{
            child.title
          }}</span>
        </div>
      </div>
      <div class="contact">
        <p class="contact-title">联系我们</p>
        <p class="contact-qrcode">
          <img src="@/assets/qrcode.png" alt="" />
        </p>
        <p class="contact-desc">公司地址：西安市高新区唐延南路I都会1号楼1单元19楼</p>
      </div>
    </div>
    <div class="m-footer-content wrapper">
      <div class="m-footer-title">芯算一体(西安)科技有限公司</div>
      <div class="m-footer-desc">公司地址：西安市高新区唐延南路I都会1号楼1单元19楼</div>
      <div class="m-footer-qrcode"><img src="@/assets/qrcode.png" alt="" /></div>
    </div>
    <div class="m-copy-right wrapper">
      <p>
        Copyright ©2017-2022 Aiwinn All Rights Reserved.
        <!--        <a target="_blank" href="https://beian.miit.gov.cn">粤ICP备17147571号</a>-->
        <!--        <img src="../../assets/JH.png" alt="" />-->
        <!--        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=65010602000458"-->
        <!--          >新公网安备 65010602000458号</a-->
        <!--        >-->
      </p>
    </div>
    <div class="copy-right wrapper">
      <p>
        Copyright ©2017-2022 xinsuanyiti All Rights Reserved.
        <!--        <a target="_blank" href="https://beian.miit.gov.cn">粤ICP备17147571号</a>-->
        <!--        <img src="../../assets/JH.png" alt="" />-->
        <!--        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=65010602000458"-->
        <!--          >新公网安备 65010602000458号</a-->
        <!--        >-->
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const footer = [
  {
    title: '关于我们',
    children: [
      {
        title: '新闻资讯',
        router: 'newsConsultation',
      },
      {
        title: '公司介绍',
        router: 'aboutUs',
      },
      {
        title: '联系我们',
        router: 'contactUs',
      },
    ],
  },
  {
    title: '算法中心',
    children: [
      {
        title: '全部算法',
        router: 'productCenter',
      },
      {
        title: '识别比对',
        router: 'productCenter',
      },
      {
        title: '跟踪判断',
        router: 'productCenter',
      },
      {
        title: '姿态检测',
        router: 'productCenter',
      },
      {
        title: '工业检测',
        router: 'productCenter',
      },
    ],
  },
  {
    title: '解决方案',
    children: [
      {
        title: 'AI芯片解决方案',
        router: 'appScheme',
      },
    ],
  },
  {
    title: '行业',
    children: [
      {
        title: '工业检测方案',
        router: 'industryCheck',
      },
    ],
  },
]
</script>

<style lang="scss" scoped>
$size_24: 24px;
.footer {
  height: 500px;
  background-image: url('@/assets/footer.png');
  .footer-content {
    height: 90%;
    display: flex;
    justify-content: space-between;
    .item-content {
      display: flex;
    }
    .item {
      font-size: $size_24;
      display: flex;
      flex-direction: column;
      //justify-content: center;
      align-items: center;
      margin-right: 30px;
      padding: 100px 30px 30px;
      p {
        color: #ffffff;
        font-weight: 500;
      }
      span {
        cursor: pointer;
        margin-top: 10px;
        color: #88888a;
        &:hover {
          color: $theme-white;
        }
      }
    }
    .contact {
      width: 160px;
      //background-color: aquamarine;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .contact-title {
        font-size: $size_24;
        color: #ffffff;
      }
      .contact-qrcode {
        margin: 10px 0;
        img {
          width: 160px;
          height: 160px;
        }
      }
      .contact-desc {
        font-size: 16px;
        color: #88888a;
      }
    }
  }
  .m-footer-content {
    display: none;
  }
  .m-copy-right {
    display: none;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    a {
      color: #1a75bc;
      font-size: 16px;
    }
  }
  .copy-right {
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    a {
      color: #1a75bc;
      font-size: 16px;
    }
  }
}

@import '@/style/mobileStyle/footer.scss';
</style>
