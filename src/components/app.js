const ActivityList = require('./activity-list')

function App (props) {
  return (
    <div className='app'>
      <ActivityList
        activities={props.activities}
        activity={props.activity}
        onActivityTouchStart={props.onActivityTouchStart}
        onActivityTouchEnd={props.onActivityTouchEnd}
        onCreateActivity={props.onCreateActivity} />
    </div>
  )
}

module.exports = App
