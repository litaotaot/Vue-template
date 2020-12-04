import { formatDate } from '@/utils/mUtils'

export const Configure = {
  tableColumns: () => {
    return [
      { accessor: '_id', label: '序号', type: 'index', width: 50 },
      { prop: 'a', label: '日期', formatter: (row) => {
        return row.a ? formatDate(new Date(row.a), 4) : ''
      } },
      { prop: 'b', label: '什么日期', formatter: (row) => {
        return row.b ? formatDate(new Date(row.b), 3) : ''
      } },
      { prop: 'c', label: '服务类别' },
      { prop: 'd', label: '产品' },
      { prop: 'e', label: '产品明细' },
      { prop: 'f', label: '消费类型' },
      { prop: 'g', label: '折后费用' }
    ]
  }
}
