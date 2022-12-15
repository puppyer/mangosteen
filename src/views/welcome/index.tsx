import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './index.module.scss'
import logo from '../../assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
  setup() {
    return () => <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>山竹记账</h1>
        </header>
        <main class={s.main}><RouterView /></main>
      </div>
  }
})