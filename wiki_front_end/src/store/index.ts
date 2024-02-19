import { defineStore } from 'pinia'
import state from '@/store/state'
import actions from '@/store/actions'

export const myStore = defineStore({
  id: 'store',
  state: () => state,
  actions: () => actions
})
