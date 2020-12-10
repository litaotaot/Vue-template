import { formatDate } from '@/utils/mUtils'

export const Configure = {
  tableColumns: () => {
    return [
      { prop: 'c', label: '子项目名称' },
      { prop: 'd', label: '子项目编号' },
      { prop: 'e', label: '信息分析人' },
      { prop: 'f', label: '样本数' },
      { prop: 'f', label: '子项目总数据量' },
      { prop: 'a', label: 'BMS立项日期', sortable: true, formatter: (row) => {
        return row.a ? formatDate(new Date(row.a), 3) : ''
      } },
      { prop: 'b', label: 'BMS截止日期', sortable: true, formatter: (row) => {
        return row.b ? formatDate(new Date(row.b), 3) : ''
      } },
      { prop: 'b', label: '文件删除日期', sortable: true, formatter: (row) => {
        return row.b ? formatDate(new Date(row.b), 3) : ''
      } },
      { prop: 'g', label: '费用（计算、存储、交付）', sortable: true, width: 300, rendeHeader: (h, { column, $index }) => {
        return h(
          'span', [
            h('span', column.label),
            h('el-tooltip', {
              props: {
                effect: 'light',
                content: '子项目费用仅供参考，未计算运维等分摊费用，请勿作为实际成本依据',
                placement: 'top'
              }
            }, [
              h('i', {
                class: 'el-icon-warning-outline',
                style: {
                  fontSize: '14px'
                }
              })
            ])
          ]
        )
      } }
    ]
  }
}
