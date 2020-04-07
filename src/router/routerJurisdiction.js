import router from './index'
import NProgress from 'nprogress' // 加载页面进度条
import 'nprogress/nprogress.css' // 加载页面进度条样式

NProgress.configure({ showSpinner: false })  //关闭加载转圈圈样式
const whiteList = ['/login']
const cookie = localStorage.getItem('cookie')
router.beforeEach(async (to, from, next) => {
  if (cookie) {
    if (to.path === 'login') {
      next({ path: '/' })
      NProgress.done()
    }
    next()
    NProgress.done()
  }else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免费登录白名单，直接去
      next()
    } else {
      // 没有访问权限的其他页面被重定向到登录页面。
      next(`/login`)
      NProgress.done()
    }
    next();
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

