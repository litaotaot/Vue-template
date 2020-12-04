
export const Configure = {
  tableColumns: () => {
    return [
      { prop: 'b', label: '用户' },
      { prop: 'c', label: '接收样本数', sortable: true },
      { prop: 'd', label: '子项目数', sortable: true },
      { prop: 'e', label: '交付任务数', sortable: true },
      { prop: 'f', label: `存储`, sortable: true, rendeHeader: (h, { column, $index }) => {
        return h(
          'span', [
            `${column.label}(`, h('span', { style: {
              color: '#0EEDF1',
              fontSize: '14px'
            }}, '热存'),
            ')'
          ]
        )
      } },
      { prop: 'g', label: '存储', sortable: true, rendeHeader: (h, { column, $index }) => {
        return h(
          'span', [
            `${column.label}(`, h('span', { style: {
              color: '#3585FF',
              fontSize: '14px'
            }}, '冷存'),
            ')'
          ]
        )
      } }
    ]
  }
}
