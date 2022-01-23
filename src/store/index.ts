import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
    count: number,
    b: number,
}

export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
const store = createStore<State>({
  state () {
    return {
      count: 1,
      b: 2
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store

export function useStore () {
  return baseUseStore(key)
}
