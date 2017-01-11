const Inferno = require('inferno')
const App = require('./components/app')
const onUpdate = require('./state')
const element = document.getElementById('app')

document.addEventListener('touchmove', function (e) {
  e.preventDefault()
  return false
})

onUpdate(function (state, shallowState, handlers) {
  return Inferno.render(
    <App
      onActivityTouchStart={handlers.onActivityTouchStart}
      onActivityTouchEnd={handlers.onActivityTouchEnd}
      onSelectActivity={handlers.onSelectActivity}
      onCreateActivity={handlers.onCreateActivity}
      activity={state.activity}
      editing={shallowState.editing}
      activities={state.activities} />,
    element
  )
})
