// Apply this to ontouchstsart events
function removeIOSRubberEffect (e) {
  const el = e.currentTarget
  if (el.scrollTop === 0) {
    el.scrollTop = 1
  } else if (el.scrollTop + el.offsetHeight === el.scrollHeight) {
    el.scrollTop = el.scrollTop - 1
  }
}

module.exports = removeIOSRubberEffect
