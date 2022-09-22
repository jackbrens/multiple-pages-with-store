<template>
  <div class="banner" :style="{ backgroundImage: 'url(' + getImageUrl(props.bgImg) + ')' }"><slot></slot></div>
</template>

<script lang="ts" setup>
import { getImageUrl } from '@/utils/improtUrl'
const props = defineProps({
  bgImg: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.banner {
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 1000px;
  }
}
</style>
