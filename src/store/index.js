import { createStore, Provider, connect } from 'unistore/full/preact.es'

export const store = createStore({ posts: [] })

export { Provider, connect }

export { default as actions } from './actions'
