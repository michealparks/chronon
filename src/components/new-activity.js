function NewActivity (props) {
  return (
    <div className='new-activity'>
      <form
        onSubmit={props.onCreateActivity}
        className='new-activity__form'>
        <input
          onTouchStart={e => {
            e.target.focus()
            return false
          }}
          className='new-activity__input new-activity__name'
          name='name'
          type='text'
          placeholder='Activity Name'
          autocomplete='off'
          x-webkit-speech='x-webkit-speech' />
        <input
          className='new-activity__input new-activity__submit'
          type='submit'
          value='Add' />
      </form>
    </div>
  )
}

module.exports = NewActivity
