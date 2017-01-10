const Inferno = require('inferno')
const App = require('./components/app')
const onUpdate = require('./state')
const element = document.getElementById('app')

onUpdate(function (state, handlers) {
  return Inferno.render(
    <App
      onSelectActivity={handlers.onSelectActivity}
      onCreateActivity={handlers.onCreateActivity}
      activity={state.activity}
      activities={state.activities} />,
    element
  )
})
