import * as types from '../constants/ActionTypes'

export const increment = (index) => ({ type: types.INCREMENT, index})
export const decrement = (index) => ({ type: types.DECREMENT, index })
export const multiple = (index, multipler) => ({ type: types.MULTIPLE , index, multipler})
export const incrementAsync = (index) => ({ type: types.INCREMENTASYNC, index})