import s from './index.module.scss'
import { RouterLink } from "vue-router"
export const ThirdAction = {
  render: () => {
    return <>
      <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
      <RouterLink to='/welcome/fourth'>下一页</RouterLink>
      <RouterLink to='/start'>跳过</RouterLink>
    </>
  }
}