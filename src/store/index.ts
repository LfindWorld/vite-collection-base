// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import user from './modules/user'

export interface State {
  count: number,
}

export const key: InjectionKey<Store<State>> = Symbol('')

export const store = createStore<State>({
  strict: true,
  state: {
    count: 0
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore (): Store<State> {
  return baseUseStore(key)
}
