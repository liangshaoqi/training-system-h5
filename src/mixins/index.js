/**
 * 表格公共逻辑
 * @param {Function} ajax 请求方法
 * @param {Boolean} immediately 是否立即执行
 */
export const tablesMixin = (ajax, immediately = true) => ({
  data() {
    return {
      TOTAL: 0, // 总条数
      PAGE: 1, // 当前页
      SIZE: 10, // 一页展示条数
      TABLE_DATA: [], // 数据
      LAYOUT: 'total, sizes, prev, pager, next, jumper'
    }
  },
  // 挂载时执行
  mounted() {
    if (immediately) this.GET_TABLE_DATA()
  },
  methods: {
    // 处理搜索
    HANDLE_SEARCH() {
      this.GET_TABLE_DATA()
    },
    // 改变展示页数大小
    SIZE_CHANGE(page) {
      this.SIZE = page
      // 修改size之后,选中页回到第一页,并重新获取表格信息
      this.PAGE = 1
      this.GET_TABLE_DATA()
    },
    // 修改页数
    PAGE_CHANGE(page) {
      this.PAGE = page
      this.GET_TABLE_DATA()
    },
    // 获取表格数据
    /**
     * 
     * @param {Boolean} loadMore 是否加载更多
     */
    GET_TABLE_DATA(loadMore = false) {
      // console.log('正在获取表格数据')
      if (!ajax) return
      // 加载更多代表使用push增加数据
      if (loadMore) {
        this.PAGE += 1
      }
      // 获取表格需要的默认参数
      const defaultArgs = {
        currPage: this.PAGE,
        pageSize: this.SIZE
      }
      // 额外参数
      const extra = this.EXTRA
      // 这里可以添加过滤条件
      // 将参数组合
      const args = {
        ...defaultArgs,
        ...extra
      }
      ajax(args).then(res => {
        let data = res.data
        this.TOTAL = data.totalCount
        if (loadMore) {
          this.TABLE_DATA.push(...data.orders)
        } else {
          this.TABLE_DATA = data.orders
        }
      })
    }
  }
})