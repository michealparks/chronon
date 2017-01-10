const storage = require('./scripts/storage')

let renderFn
const state = storage.get('state') || {
  activity: -1,
  activities: []
}

const handlers = {
  onSelectActivity (e) {
    state.activity = parseInt(e.target.getAttribute('data-id'), 10)
    update()
  },

  onCreateActivity (e) {
    e.preventDefault()

    if (e.target.elements.name.value === '') return

    // Record data
    state.activities.push({
      name: e.target.elements.name.value
    })

    // Clear data
    e.target.elements.name.value = ''

    console.log(e)

    document.activeElement.blur()

    update()
  }
}

function update () {
  storage.set('state', state)
  renderFn(state, handlers)
}

function onUpdate (fn) {
  renderFn = fn
  update()
}

module.exports = onUpdate
