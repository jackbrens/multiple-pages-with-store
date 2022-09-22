<template>
  <div class="header" :class="{ scroll: isScroll }" @mouseenter="enter" @mouseleave="leave">
    <div class="logo" @click="() => router.push({ path: '/' })">
      <img v-if="isEnter" src="@/assets/home-logo.png" alt="" />
      <img v-else src="@/assets/home-logo2.png" alt="" />
    </div>
    <div class="menu">
      <ul class="menu-ul">
        <li v-for="menuItem in menu" :key="menuItem.title" class="menu-Item" @click="handleMenu(menuItem)">
          {{ menuItem.title }}
          <div
            v-if="menuItem.children && menuItem.children.length > 0"
            class="menu-popover"
            :style="{ width: menuItem.width + 'px' }"
          >
            <ul>
              <li v-for="child in menuItem.children" :key="child.title" @click="handleLi(child)">
                {{ child.title }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="mobileHeader" :class="{ scroll: isScroll }">
    <div class="logo-box">
      <img v-if="isEnter" src="@/assets/mobile-logo.png" width="80" alt="" @click="() => router.push({ path: '/' })" />
      <img v-else src="@/assets/mobile-logo2.png" width="80" alt="" @click="() => router.push({ path: '/' })" />
    </div>
    <div class="button-box" @click="table = true">
      <img v-if="isEnter" src="@/assets/menu.png" width="20" height="20" alt="" />
      <img v-else src="@/assets/menu-black.png" width="20" height="20" alt="" />
    </div>
  </div>
<!--  <el-drawer v-model="table" size="100%" :show-close="false">-->
<!--    <template #header="{ close, titleId }">-->
<!--      <div :id="titleId"><img src="@/assets/logo.png" width="50" height="50" alt="" /></div>-->
<!--      <div style="cursor: pointer; font-size: 25px" @click="close"><i-ep-close /></div>-->
<!--    </template>-->
<!--    <el-menu default-active="0">-->
<!--      <template v-for="item in menu" :key="item.id">-->
<!--        <el-menu-item v-if="!item.children" :index="String(item.id)" @click="handleNav(item)">-->
<!--          {{ item.title }}-->
<!--        </el-menu-item>-->
<!--        <el-sub-menu v-else :index="String(item.id)">-->
<!--          <template #title>-->
<!--            <span>{{ item.title }}</span>-->
<!--          </template>-->
<!--          <el-menu-item-->
<!--            v-for="child in item.children"-->
<!--            :key="child.id"-->
<!--            :index="String(child.id)"-->
<!--            @click="handleNav(child)"-->
<!--          >-->
<!--            {{ child.title }}-->
<!--          </el-menu-item>-->
<!--        </el-sub-menu>-->
<!--      </template>-->
<!--    </el-menu>-->
<!--  </el-drawer>-->
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { menu } from '@/utils/menu'
import { MenuProps } from '@/types/dataType'
const router = useRouter()

onMounted(() => {
  window.addEventListener('scroll', windowScroll)
})

const isEnter = ref(true)
const isScroll = ref(false)
const windowScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 30) {
    isEnter.value = false
    isScroll.value = true
  } else {
    isEnter.value = true
    isScroll.value = false
  }
}

const enter = () => {
  isEnter.value = false
}

const leave = () => {
  // 如果滚动屏幕，把 isEnter 设置为 false
  if (isScroll.value) {
    isEnter.value = false
    return
  }
  isEnter.value = true
}

const handleMenu = (menu: MenuProps) => {
  const { name } = menu
  if (!name) return
  router.push({ path: '/'+ name })
}

const handleLi = (item: MenuProps) => {
  let timer: any = 0
  clearTimeout(timer)
  timer = setTimeout(() => {
    router.push({ path: '/' + item.name })
  }, 0)
}

watch(
  () => router.currentRoute.value.path,
  (newValue) => {
    if (newValue === '/productCenterDetail') {
      isEnter.value = false
      isScroll.value = true
      window.removeEventListener('scroll', windowScroll)
    } else {
      isEnter.value = true
      isScroll.value = false
      window.addEventListener('scroll', windowScroll)
    }
  },
  { immediate: true }
)

// 移动端 代码
const table = ref(false)
const handleNav = (item: MenuProps) => {
  const { name } = item
  table.value = false
  router.push({ path: '/' + name })
}
</script>

<style>
.el-drawer .el-drawer__header {
  box-shadow: 0 0 5px 0 #bebcbcaf;
  margin-bottom: 10px;
}
.el-menu {
  border-right: none;
}
</style>

<style lang="scss" scoped>
:deep(.el-collapse) {
  border-top: none;
  border-bottom: none;
}
.header {
  visibility: visible;
  z-index: 99;
  font-size: 18px;
  position: fixed;
  width: 100%;
  height: $font-70;
  display: flex;
  justify-content: center;
  color: $theme-white;
  &:hover {
    background-color: $theme-white;
    color: #000000;
  }
  .logo {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      object-fit: cover;
      width: 60px;
    }
  }
  .menu {
    margin-right: 80px;
    margin-left: 80px;
    .menu-ul {
      display: flex;
      height: 100%;
      .menu-Item {
        position: relative;
        cursor: pointer;
        padding: 0 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        &:hover {
          background-color: #dddddd;
        }
        &:hover .menu-popover {
          display: block;
        }
        &::after {
          position: absolute;
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
          content: '';
          width: 0;
          left: 0;
          bottom: 0;
          height: 3px;
          background: #1883d7;
        }
        &:hover::after {
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
          width: 100%;
        }

        .menu-popover {
          position: absolute;
          left: 0;
          top: 100%;
          display: none;
          padding: 20px;
          box-shadow: inset 0 2px 5px #cccccc;
          background-color: $theme-white;
          & > ul > li {
            text-align: center;
            padding: 10px 0;
            &:hover {
              color: #1883d7;
            }
          }
        }
      }
    }
  }
}

.scroll {
  background-color: $theme-white;
  color: #000000;
  box-shadow: rgb(0 0 0 / 20%) 0 0 20px;
}

.mobileHeader {
  visibility: hidden;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  transition: all 0.3s;
  .logo-box {
    margin-left: 40px;
  }

  .button-box {
    margin-right: 40px;
    cursor: pointer;
  }
}

.menu-item {
  padding: 60px 20px;
  font-size: 80px;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .header {
    visibility: hidden;
  }
  .mobileHeader {
    visibility: visible;
  }
}
</style>
