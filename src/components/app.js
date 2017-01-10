const ActivityList = require('./activity-list')
const NewActivity = require('./new-activity')

function App (props) {
  return (
    <div className='app'>
      <ActivityList
        activities={props.activities}
        activity={props.activity}
        onSelectActivity={props.onSelectActivity} />
      <NewActivity
        onCreateActivity={props.onCreateActivity} />
    </div>
  )
}

module.exports = App