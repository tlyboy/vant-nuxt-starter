<script setup lang="ts">
import { appName } from './constants'
import '@vant/touch-emulator'

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  title: appName,
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover',
    },
  ],
})

const color = useColorMode()
</script>

<template>
  <van-config-provider
    class="h-full"
    :theme="color.value === 'dark' ? 'dark' : 'light'"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </van-config-provider>
</template>
