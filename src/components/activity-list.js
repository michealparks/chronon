function ActivityList (props) {
  if (!props.activities.length) {
    return (
      <div className='no-activities'>
        <h1>:(</h1>
        <h2>No Activities Yet</h2>
        <h4>Add one to get started</h4>
      </div>
    )
  }

  return (
    <div className='activity-list'>
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
            onClick={props.onSelectActivity}
            onTouchStart={props.onActivityTouchStart}
            onTouchEnd={props.onActivityTouchEnd}>
            {activity.name}
          </div>
        )
      })}
    </div>
  )
}

module.exports = ActivityList
