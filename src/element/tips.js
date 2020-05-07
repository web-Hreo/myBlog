import './index'

  //  一个加载中提示 此提示需要手动关闭
  //  @param {String} text 提示文字 
export let loading  = text =>{
  this.$loading({
    text,
    lock: true,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.1)'
  });
}
  //  一个消息提示 自动关闭 需配置 若不配置则默认3000
  //  @param {String} message 提示文字  {String} type->success|warning|info|error  提示主题
export let message = (message,type) =>{
  this.$message({
    message,
    type,
    duration:2000,
    showClose:true,
    center:true
  })
}
