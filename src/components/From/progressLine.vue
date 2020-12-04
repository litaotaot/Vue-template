<template>
  <div class="progress">
    <template v-if="data.status === 1">
      <span>{{ `${data.line}/${data.all}` }}</span>
      <div class="allLen">
        <div ref="lineLen" />
      </div>
    </template>
    <template v-else-if="data.status === 2">
      <span class="complete">完成</span>
    </template>
    <template v-else>
      <span class="abnormal">异常</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProgressLine',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.lineWidth()
    console.log(this.status)
  },
  methods: {
    // 控制完成进度显示
    lineWidth() {
      if (this.data.status === 1) {
        this.$refs.lineLen.style.width =
          (Math.round((this.data.line / this.data.all) * 10000) / 100).toFixed(
            0
          ) + '%'
        this.$refs.lineLen.style.height = '4px'
        this.$refs.lineLen.style.backgroundColor = '#2D75F4'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  text-align: center;
  .allLen {
    margin: 0 auto;
    // width: 80%;
    height: 4px;
    background-color: #EBEBEB;
  }
}
.abnormal {
  color: red;
}
.complete {
  color: green;
}
</style>
