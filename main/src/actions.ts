// micro-app-main/src/shared/actions.ts
import { initGlobalState, MicroAppStateActions } from "qiankun"

const initialState = {
  num: 0
}
const actions: MicroAppStateActions = initGlobalState(initialState)

export default actions
