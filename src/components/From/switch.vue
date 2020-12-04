<template>
  <el-switch
    v-model="switchValue"
    :active-value="1"
    :inactive-value="0"
    :width="28"
    :disabled="disabled"
    @change="onChange"
  />
</template>

<script>

export default {
  name: 'MySwitch',
  props: {
    value: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    switch: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
    }
  },
  computed: {
    switchValue: {
      get: function() {
        return this.switch > -1 ? this.switch : this.value
      },
      set: function(v) {
        return this.switch > -1 ? this.switch : this.value
      }
    }
  },
  created() {
  },
  methods: {
    onChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>
