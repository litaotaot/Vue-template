<template>
  <div class="container-shadow consumption">
    <div class="consumption-top">
      <div>
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="账期"
        />
        <el-select v-model="value" placeholder="产品">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" placeholder="消费类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button type="text" @click="refresh">刷新</el-button>
      </div>
      <div>
        <p>截止统计日期 {{ finalDate }}</p>
      </div>
    </div>
    <Mtable
      :table-columns="Configure"
      :table-data="tableData"
      :table-height="tableHeight"
      :page-total="tableData.length"
      @setTableHeight="setTableHeight"
    />
  </div>
</template>

<script>
import Mtable from '@/components/From/table'
import { Configure } from './configure'
import { formatDate, px2Rem } from '@/utils/mUtils'
export default {
  name: 'Consumption',
  components: {
    Mtable
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value2: '',
      tableHeight: 0,
      finalDate: formatDate(new Date(), 3),
      tableData: [
        { a: 1606986807680, b: 1606986807680, c: '12345', d: '12345', e: '12345', f: '12345', g: '12345' },
        { a: 1606986807680, b: 1606986807680, c: '12345', d: '12345', e: '12345', f: '12345', g: '12345' },
        { a: 1606986807680, b: 1606986807680, c: '12345', d: '12345', e: '12345', f: '12345', g: '12345' }
      ]
    }
  },
  computed: {
    Configure() {
      return Configure.tableColumns()
    }
  },
  mounted() {
    this.setTableHeight()
  },
  methods: {
    // 计算table高度
    setTableHeight() {
      this.$nextTick(() => {
        this.tableHeight =
          document.body.clientHeight - px2Rem(65) - 40 - 40 - 52
      })
    },
    refresh() {

    }
  }
}
</script>

<style lang="scss" scoped>
.consumption {
  width: 100%;
  height: 100%;
}
.consumption-top {
  display: flex;
  justify-content: space-between;
  height: px2Rem(65);
  line-height: px2Rem(65);
  padding: 0 px2Rem(30);
  box-sizing: border-box;
  div {
    &:nth-child(1) {
      .el-date-editor.el-input, .el-date-editor.el-input__inner {
        margin-right: px2Rem(20);
        width: px2Rem(180);
      }
      .el-select {
        margin-right: px2Rem(20);
        width: px2Rem(180);
      }
    };
    &:nth-child(2) {
      font-size: 14px;
      color: #999999;
    }
  }
}
.table_container {
  padding: 0 10px;
}
</style>
