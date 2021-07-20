
export interface UserState {
  count: number
}
const user = {
  state: {
    count: 0
  },
  mutations: {
    addCount: (state: UserState): void => {
      state.count++
    }
  }
}

export default user
