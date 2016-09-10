import {expect} from 'chai'
import {List, Map} from 'immutable'
import {setEntries} from '../src/core'

describe('core', () => {
  describe('setEntries', () => {
    it('adds entries to the state', () => {
      const state = Map()
      const entries = List.of('Trainspotting', '28 Days Later')

      const nextState = setEntries(state, entries)

      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }))
    })

    it('converts a list to immutable', () => {
      const state = Map()
      const entries = ['Trainspotting', '28 Days Later']

      const nextState = setEntries(state, entries)

      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }))
    })
  })
})
