import {expect} from 'chai'
import {List, Map} from 'immutable'
import {setEntries, next} from '../src/core'

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

  describe('next', () => {
    it('take the next to entries under vote', () => {
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      })

      const nextState = next(state)

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List.of('Sunshine')
      }))
    })
  })
})
