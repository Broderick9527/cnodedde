import { Backtop, Breadcrumb, BreadcrumbItem, Button, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

Vue.use(Button)
Vue.use(Backtop)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.prototype.$message = Message
