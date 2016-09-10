import {expect} from 'chai'
import {Map, fromJS} from 'immutable'
import makeStore from '../src/store'

describe('store', () => {
  describe('makeStore', () => {
    it('produces the initial state on the store', () => {
      const store = makeStore()

      expect(store.getState()).to.equal(Map())
    })

    it('gets a Redux store configured with the correct reducer', () => {
      const store = makeStore()

      store.dispatch({
        type: 'SET_ENTRIES',
        entries: ['Trainspotting', '28 Days Later']
      })

      expect(store.getState()).to.equal(fromJS({
        entries: ['Trainspotting', '28 Days Later']
      }))
    })
  })
})
