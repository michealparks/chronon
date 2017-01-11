const storage = require('./scripts/storage')

let renderFn

const state = storage.get('state') || {
  activity: -1,
  activities: [],
  currentActivityStartTime: null
}

const shallowState = {
  editing: -1,
  activityTouchPoints: []
}

const handlers = {
  onActivityTouchStart (e) {
    const index = parseInt(e.target.getAttribute('data-id'), 10)

    shallowState.activityTouchPoints[index] = [
      e.changedTouches[0].pageX,
      e.changedTouches[0].pageY
    ]
  },

  onActivityTouchEnd (e) {
    const index = parseInt(e.target.getAttribute('data-id'), 10)
    const touchStart = shallowState.activityTouchPoints[index]

    if (Math.abs(touchStart[0] - e.changedTouches[0].pageX) < 20 &&
        Math.abs(touchStart[1] - e.changedTouches[0].pageY) < 20) {
      state.activity = (index === state.activity) ? -1 : index
      update()
    }
  },

  onCreateActivity (e) {
    e.preventDefault()

    const name = e.target.elements.name.value

    if (name === '') return
    if (isDuplicateActivity(name)) return

    // Record data
    state.activities.push({
      name: e.target.elements.name.value
    })

    // Clear data
    e.target.elements.name.value = ''

    document.activeElement.blur()

    update()
  }
}

function isDuplicateActivity (name) {
  for (let i = 0, l = state.activities.length; i < l; ++i) {
    if (state.activities[i].name === name) return true
  }

  return false
}

function update () {
  storage.set('state', state)
  renderFn(state, shallowState, handlers)
}

function onUpdate (fn) {
  renderFn = fn
  update()
}

module.exports = onUpdate
