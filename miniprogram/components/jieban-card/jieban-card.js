import formatTime from '../../utils/formatTime.js'
const log = console.log.bind(console)
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    blog: Object
  },
  onload: function(event) {
    log('event: ', event)
  },
  observers: {
    ['blog.createTime'](val) {
      if(val) {
        this.setData({
          _createTime: formatTime(new Date(val))
        })
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    _createTime: '',
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 图片预览
    onPreviewImage(event) {
      const ds = event.target.dataset
      wx.previewImage({
        urls: ds.imgs, // [] 数组
        current: ds.imgsrc,
      })
    },
  }
})
