<template>
  <div class="my-process">
    <div class="processContainer">
      <div ref="lineLen" class="lineLen" />
      <span ref="hint">{{ data[mark]+unit }}</span>
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
    },
    mark: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#3585FF'
    },
    unit: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '14'
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
        (Math.round((this.data[this.mark] / this.data.all) * 10000) / 100).toFixed(
          0
        ) + '%'
      this.$refs.lineLen.style.background = this.color
      this.$refs.hint.style.fontSize = this.size + 'px'
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
      font-family: $font-family-typeR;
      font-size: 14px;
      color: #999999;
      margin-left: 10px;
    }
  }
}
</style>
