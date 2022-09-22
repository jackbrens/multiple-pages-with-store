<template>
  <div class="home">
    <banner v-if="!isMobile" :bg-img="'banner/home-banner.png'">
      <div class="banner-container">
        <div class="wrapper">
          <h1>视觉工业整体解决方案</h1>
          <p>边缘算法新突破</p>
          <div class="button-box" @click="() => router.push({ path: '/industryCheck' })">了解更多</div>
        </div>
        <p ref="span">新技术/新形态/新服务</p>
      </div>
    </banner>
    <div v-else class="swiper-mask" :style="{ height: getHeight }">
      <div class="button-box" @click="() => router.push({ path: '/industryCheck' })">了解更多</div>
    </div>
    <div class="product-center">
      <div class="wrapper">
        <div class="product-title">算法中心</div>
        <div class="product-container">
          <div
              v-for="item in productList"
              :key="item.id"
              :style="{ backgroundImage: 'url(' + getImageUrl(item.img) + ')' }"
              class="product-item"
              @click="() => router.push({ path: '/productCenter' })"
          >
            <span>
              <img v-if="isMobile" :src="getImageUrl(item.mobileIcon)" alt="" />
              <img v-else :src="getImageUrl(item.icon)" alt="" />{{ item.title }}
            </span>
          </div>
        </div>
        <div class="product-more" @click="() => router.push({ path: '/productCenter' })">了解更多</div>
      </div>
    </div>
    <div class="app-scheme">
      <div class="wrapper">
        <div class="app-title">解决方案</div>
        <swiper :modules="modules2" loop :pagination="{ clickable: true }" class="app-container">
          <swiper-slide v-for="(item, index) in state.swiperList" :key="index">
            <div class="app-container-item" :style="{ backgroundImage: 'url(' + getImageUrl(item.img) + ')' }">
              <div class="item-container">
                <div class="item-container-title">{{ item.text }}</div>
                <div class="item-container-button" @click="() => router.push({ path: '/' + item.router })">了解更多</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="blue-sea">
      <div class="sea-title wrapper">集芯片与算法为一体，开拓AI芯片新蓝海</div>
      <div class="sea-desc wrapper">
        芯算一体(西安)科技有限公司，致力于将AI机器视觉算法、深度学习、FBGA存算一体等核心技术为一体的机器视觉AI算法创新公司。
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
useHead({
  meta: [
    {
      name: 'description',
      content:
          '芯算一体西安科技有限公司，是一家专注于人工智能基础软件开发，人工智能算法应用开发，人工智能芯片于一体的高新技术企业，芯算一体是公司的核心竞争力和增长动力来源。',
    },
    { name: 'keywords', content: '芯算,芯算一体,芯算一体官网,视觉工业' },
  ],
})

import { getImageUrl } from '@/utils/improtUrl'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Banner from '@/components/layout/Banner.vue'
const router = useRouter()

const modules2 = [Autoplay, Navigation, Pagination, Scrollbar]
let state = reactive({
  list: [
    {
      img: 'swiper/swiper1.png',
      text: '了解更多',
      router: 'aboutUs',
    },
    {
      img: 'swiper/swiper2.png',
      text: '应用方案',
      router: 'appScheme',
    },
  ],
  swiperList: [
    {
      img: 'home/check-swiper.png',
      text: '视觉工业检测解决方案',
      router: 'industryCheck',
    },
    {
      img: 'home/app-scheme.png',
      text: '机器视觉AI芯片解决方案',
      router: 'appScheme',
    },
  ],
})
const productList = [
  {
    id: 1,
    title: '工业检测',
    icon: 'home/check-icon.png',
    algorithmType: 2,
    mobileIcon: 'home/check-icon-mobile.png',
    img: 'home/m-check.png',
  },
  {
    id: 2,
    title: '姿态检测',
    algorithmType: 1,
    icon: 'home/posture-icon.png',
    mobileIcon: 'home/posture-icon-mobile.png',
    img: 'home/posture.png',
  },
  {
    id: 3,
    title: '人脸对比',
    algorithmType: 3,
    icon: 'home/face-icon.png',
    mobileIcon: 'home/face-icon-mobile.png',
    img: 'home/face.png',
  },
  {
    id: 4,
    title: '跟踪判断',
    algorithmType: 4,
    icon: 'home/track-icon.png',
    mobileIcon: 'home/track-icon-mobile.png',
    img: 'home/track1.png',
  },
]
const timer = ref(0)
const isMobile = ref(false)
const calcRate = () => {
  const width = window.innerWidth
  isMobile.value = width <= 768
}
calcRate()

const resize = () => {
  clearTimeout(timer.value)
  timer.value = window.setTimeout(() => {
    calcRate()
  }, 200)
}

window.addEventListener('resize', resize)

const getHeight = computed(() => {
  return window.innerHeight + 'px'
})
</script>

<style lang="scss" scoped>
:deep(.swiper) {
  .swiper-pagination {
    bottom: 50px;
  }

  .swiper-pagination-bullet {
    width: 60px;
    height: 10px;
    border-radius: 0;
    background-color: #d8d8d8;
  }

  .swiper-pagination-bullet-active {
    background-color: $theme-white;
  }
}
.banner-container {
  font-size: $font-30;
  color: $theme-white;
  text-align: center;
  .wrapper {
    h1 {
      margin-top: 150px;
      letter-spacing: 3px;
    }
    p {
      margin: 50px auto 0;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      padding: 10px 30px;
      letter-spacing: 12px;
      width: 30%;
      text-align: center;
    }
    .button-box {
      margin: 50px auto 0;
      box-sizing: border-box;
      padding: 10px 30px;
      width: 240px;
      color: $theme-white;
      border: 2px solid $theme-white;
      border-radius: 30px;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
  & > p {
    letter-spacing: 10px;
    font-size: $font-24;
    margin-top: 100px;
    padding-right: 30px;
    text-align: right;
  }
}

.product-center {
  overflow: hidden;
  background: #f7f8fe;

  .product-title {
    text-align: center;
    font-size: $font-40;
    padding: 90px 0;
  }

  .product-container {
    display: flex;
    flex-wrap: wrap;

    .product-item {
      cursor: pointer;
      transition: all 0.3s linear;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 38%;
      height: 265px;
      border-radius: 5px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      font-size: 40px;
      color: $theme-white;

      &:nth-of-type(4n-2),
      &:nth-of-type(4n-1) {
        width: 60%;
      }

      &:nth-of-type(2n-1) {
        margin-right: 2%;
        margin-bottom: 2%;
      }

      @media (any-hover: hover) {
        &:hover {
          background-size: 110% 110%;
        }
      }

      span {
        font-size: 30px;
        padding-bottom: 30px;
        width: 100%;
        display: flex;
        align-items: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

        & > img {
          width: 50px;
          height: 50px;
          padding-left: 30px;
          padding-right: 10px;
        }
      }

      .icon {
        display: none;
      }
    }
  }

  .product-more {
    transition: all 0.1s linear;
    cursor: pointer;
    text-align: center;
    border: 2px solid #2a4290ff;
    color: #2a4290ff;
    width: 346px;
    height: 84px;
    line-height: 84px;
    margin: 50px auto;
    border-radius: 42px;
    font-size: $font-40;

    &:hover {
      background-color: #2a4290ff;
      color: $theme-white;
    }
  }
}

.app-scheme {
  height: 1000px;
  background-color: $theme-white;

  .app-title {
    font-size: $font-40;
    padding: 40px 0;
    text-align: center;
  }

  .app-container {
    height: 700px;
    background-image: url('@/assets/home/app-scheme.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .app-container-item {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .item-container-title {
      color: $theme-white;
      font-size: 80px;
      position: absolute;
      top: 25%;
      width: 100%;
      text-align: center;
    }
    .item-container-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 350px;
      height: 90px;
      color: $theme-white;
      border: 3px solid $theme-white;
      font-size: $font-40;
      border-radius: 43px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.blue-sea {
  height: 868px;
  background-image: url('@/assets/home/blue-sea.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin-bottom: 5%;
  .sea-title {
    color: $theme-white;
    font-size: 66px;
    margin-bottom: 60px;
  }

  .sea-desc {
    font-size: 36px;
    color: rgba(228, 223, 223, 0.87);
  }
}

@import '@/style/mobileStyle/home.scss';
</style>
