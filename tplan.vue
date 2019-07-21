<template>
  <div>
    旅游攻略
    <div class="ctrl">
      <span
        v-for="(item,index) in ['新闻/','体育/','军事']"
        :key="index"
        @click="handlClick(index)"
        :class="{active: index===current}"
      >{{item}}</span>
    </div>
    <div v-if="current === 0">
      <ul>
        <li>这是新闻页</li>
        <li>这是新闻页</li>
        <li>这是新闻页</li>
      </ul>
    </div>
    <div v-if="current === 1">
      <ul>
        <li>这是体育页</li>
        <li>这是体育页</li>
        <li>这是体育页</li>
      </ul>
    </div>
    <div v-if="current === 2">
      <ul>
        <li>这是新军事</li>
        <li>这是新军事</li>
        <li>这是新军事</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    handlClick(index) {
      this.current = index;
    }
  }
};
</script>
<style lang="less" scoped>
.active{
  width: 20px;
  height: 20;
background: pink;
}
</style>

