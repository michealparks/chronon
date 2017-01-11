const storage = require('./scripts/storage')

let renderFn

const state = storage.get('state') || {
  activity: -1,
  activities: []
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

    console.log(Math.abs(touchStart[0] - e.changedTouches[0].pageX))
    console.log(Math.abs(touchStart[1] - e.changedTouches[0].pageY))
    if (Math.abs(touchStart[0] - e.changedTouches[0].pageX) < 20 &&
        Math.abs(touchStart[1] - e.changedTouches[0].pageY) < 20) {
      state.activity = (index === state.activity) ? -1 : index
      update()
    }
  },

  // onSelectActivity (e) {
  //   const index = parseInt(e.target.getAttribute('data-id'), 10)

  //   state.activity = (index === state.activity) ? -1 : index
  //   update()
  // },

  onCreateActivity (e) {
    e.preventDefault()

    if (e.target.elements.name.value === '') return

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

function update () {
  storage.set('state', state)
  renderFn(state, shallowState, handlers)
}

function onUpdate (fn) {
  renderFn = fn
  update()
}

module.exports = onUpdate
