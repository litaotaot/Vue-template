<template>
  <div class="table_container">
    <el-table
      v-loading="loading"
      :stripe="stripe"
      :data="tableData"
      style="width: 100%"
      :height="`${tableHeight}px`"
      :highlight-current-row="highlightCurrentRow"
      :header-cell-style="headerCellStyle"
      :cell-style="({row, column, rowIndex, columnIndex})=>{
        let style = ''
        cellStyle.forEach(list=>{
          if(list.columnIndex===columnIndex) {
            style= list.style
          }
        })
        return style
      }"
      @cell-click="handleCellClick"
      @select="onSelectTable"
      @select-all="onSelectAll"
      @cell-mouse-enter="onMouseEnter"
    >
      <template v-for="(item,index) in tableColumns">
        <el-table-column
          v-if="item.convert"
          :key="index"
          :fixed="item.fixed"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sortable"
          :resizable="item.resizable"
          :formatter="item.formatter"
          :show-overflow-tooltip="!item.tooltip"
          :width="item.width?item.width:'auto'"
          :align="item.align ? item.align : 'center'"
        >
          <template slot-scope="scope">
            <div v-html="item.convert(scope.$index, scope.row)" />
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.progress"
          :key="index"
          :fixed="item.fixed"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sortable"
          :resizable="item.resizable"
          :formatter="item.formatter"
          :show-overflow-tooltip="!item.tooltip"
          :width="item.width?item.width:'auto'"
          :align="item.align ? item.align : 'center'"
        >
          <template slot-scope="scope">
            <template v-if="item.progress">
              <ProgressLine :data="{all: scope.row[item.progressAll], line: scope.row[item.progressCurrent], status: 1}" />
            </template>
            <div v-else v-html="item.render(scope.$index, scope.row)" />
          </template>
        </el-table-column>
        <!--操作列-->
        <el-table-column
          v-else-if="item.operation"
          :key="index"
          :fixed="item.fixed"
          :prop="item.prop"
          :label="item.label"
          :width="item.width?item.width:'auto'"
          :align="item.align?item.align:'center'"
        >
          <template slot-scope="scope">
            <div class="switch">
              <template v-for="(oItem,oIndex) in item.operation(scope.$index, scope.row)">
                <span v-if="oItem.txtHtml" :key="oIndex" class="alignMiddle" @click="() => handleOperationClick(scope.$index,scope.row,oItem.methodName)" v-html="oItem.txtHtml" />
                <span v-else-if="oItem.type" :key="oIndex">
                  <!-- switch在vuex中添加字段用于判断switch在未确定是否禁用(启用)的情况下 状态是否改变 -->

                  <my-switch :value="scope.row.status===10?1:0" :switch="scope.row.switch" @change="(val) => handleOperationClick(scope.$index,scope.row,oItem.methodName,val)" />
                </span>
              </template>
            </div>
          </template>
        </el-table-column>
        <!-- 序号自增列 -->
        <el-table-column
          v-else-if="item.type"
          :key="index"
          :type="item.type"
          :label="item.label"
          :width="item.width?item.width:'auto'"
          :align="item.align?item.align:'center'"
          :fixed="item.fixed"
        />
        <el-table-column
          v-else
          :key="index"
          :fixed="item.fixed"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sortable"
          :resizable="item.resizable"
          :formatter="item.formatter"
          :render-header="item.rendeHeader"
          :show-overflow-tooltip="!item.tooltip"
          :width="item.width?item.width:'auto'"
          :align="item.align ? item.align : 'center'"
        />
      </template>
    </el-table>
    <pagination v-if="pageTotal" :page-total="pageTotal" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import ProgressLine from './progressLine'
import mySwitch from './switch'
export default {
  name: 'Table',
  components: {
    ProgressLine,
    Pagination,
    mySwitch
  },
  props: {
    tableHeight: {
      type: Number,
      default: 500
    },
    tableData: {
      type: Array,
      required: true
    },
    tableColumns: {
      type: Array,
      required: true
    },
    pageTotal: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    cellStyle: {
      type: Array,
      default() {
        return []
      }
    },
    stripe: {
      type: Boolean,
      default: false
    },
    highlightCurrentRow: {
      type: Boolean,
      default: true
    }
  },
  created() {
    // fix固定行滚动事件
    window.addEventListener('scroll', this.$_scrollHandler, true)
    // resize事件
    window.addEventListener('resize', this.$_resizeHandler, true)
  },
  methods: {
    // resize适配调整高度
    $_resizeHandler() {
      this.$emit('setTableHeight')
    },
    // 横向滚动事件
    $_scrollHandler(e) {
      if (!this.fixRow) {
        return
      }
      const boxElm = document.getElementsByClassName('fixed-table-wrap')[0]
      if (boxElm) {
        const tabelElm = boxElm.getElementsByClassName('el-table__body-wrapper')[0]
        const scrollLeft = e.target.scrollLeft
        tabelElm.scrollLeft = scrollLeft
      }
    },
    /**
     * 点击单元格
     * @param row -行
     * @param column-列
     * @param cell -单元格
     * @param event - 事件
     */
    handleCellClick(row, column, cell, event) {
      this.$emit('cell-click', { row, column, cell, event })
    },
    // TODO 勾选数据行的 Checkbox 时触发的事件
    onSelectTable(selectRows, row) {
      this.$emit('select', { selectRows, row })
    },
    // TODO 用户全选checkbox时触发该事件
    onSelectAll(selectRows) {
      this.$emit('select-all', { selectRows })
    },
    // TODO 上下分页
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    // TODO 每页显示多少条
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    /**
     * 点击操作区单元格
     * @param index -索引
     * @param row -行
     * @param methodName-触发调用的方法名称
     */
    handleOperationClick(index, row, methodName, status) {
      this.$emit('operation-click', { index, row, methodName, status })
    },
    onMouseEnter(row, column, cell, event) {
    },
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
    }
  }
}
</script>

<style lang='scss' scoped>
.alignMiddle {
  vertical-align: middle;
  >>> span {
    vertical-align: middle;
  }
}
</style>
