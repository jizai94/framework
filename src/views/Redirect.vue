<template>
  <article class="app-redirect">
    {{ message }}
  </article>
</template>

<script>
import { getCookie } from '~/utils/cookie'

export default {
  name: 'redirect',
  data () {
    return {
      message: ''
    }
  },
  beforeMount () {
    const { $router, $route } = this
    const token = getCookie('token')
    if (!token) {
      this.message = '登录已失效，请先登录！'
      this.backTimer = setTimeout(() => {
        $router.replace('/login')
      }, 3000)
    } else {
      if ('path' in $route.query) {
        $router.replace($route.query.path)
      } else {
        $router.replace('/main/home')
      }
    }
  },
  beforeDestroy () {
    clearTimeout(this.backTimer)
  }
}
</script>
