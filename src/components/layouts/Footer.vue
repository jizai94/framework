<template>
  <footer>
    <div class="footer">
      <router-link to="/main/home" active-class="active">
        <i class="iconfont">&#xe601;</i>
        <div>首页</div>
      </router-link>
      <router-link to="/main/asset" active-class="active">
        <i class="iconfont">&#xe645;</i>
        <div>我的资产</div>
      </router-link>
      <router-link to="/main/channel" active-class="active">
        <i class="iconfont">&#xe61f;</i>
        <div>金融频道</div>
      </router-link>
      <router-link to="/main/center" active-class="active">
        <i class="iconfont">&#xe600;</i>
        <div>用户中心</div>
      </router-link>
    </div>
  </footer>
</template>

<style lang="scss" src="#/styles/layouts/footer.scss"></style>

<script>
export default {
  name: 'footer'
}
</script>
