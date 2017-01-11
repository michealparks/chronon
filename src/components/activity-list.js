const NewActivity = require('./new-activity')
const removeIOSRubberEffect = require('../scripts/remove-ios-rubber-effect')

function ActivityList (props) {
  return (
    <div
      className='activity-list'
      onTouchStart={removeIOSRubberEffect}
      onTouchMove={function (e) { e.stopPropagation() }}>
      {!props.activities.length &&
        <div className='no-activities'>
          <h1>:(</h1>
          <h2>No Activities Yet</h2>
          <h4>Add one to get started!</h4>
        </div>
      }

      {props.activities.map(function (activity, i) {
        let cn = 'activity-list__activity'

        if (i === props.activity) {
          cn += ' activity-list__activity--active'
        }

        return (
          <div
            key={i}
            data-id={i}
            className={cn}
            onTouchStart={props.onActivityTouchStart}
            onTouchEnd={props.onActivityTouchEnd}>
            {activity.name}
          </div>
        )
      })}
      <NewActivity
        onCreateActivity={props.onCreateActivity} />
    </div>
  )
}

module.exports = ActivityList
