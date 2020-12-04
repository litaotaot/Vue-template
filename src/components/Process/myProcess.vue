<template>
  <div class="my-process">
    <div class="processContainer">
      <div ref="lineLen" class="lineLen" />
      <span>{{ data.line }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Process',
  components: {
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {

  },
  mounted() {
    this.lineWidth()
  },
  methods: {
    // 控制完成进度显示
    lineWidth() {
      this.$refs.lineLen.style.width =
        (Math.round((this.data.line / this.data.all) * 10000) / 100).toFixed(
          0
        ) + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
.my-process {
  height: 14px;
  .processContainer {
    display: flex;
    align-items: center;
    .lineLen {
      height: 10px;
      background: #3585FF;
      border-radius: 5px;
      box-shadow: 3px 0 5px 0 rgba(0,0,0,0.15);
    }
    span {
      font-size: 14px;
      color: #999999;
      margin-left: 10px;
    }
  }
}
</style>
