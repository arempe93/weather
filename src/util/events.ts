export const stopEvent = (ev?: React.UIEvent<any>) => {
  if (ev) {
    ev.stopPropagation()
    ev.preventDefault()
  }
}

export const pauseEvent = <T extends any>(cb: () => T) => (
  ev?: React.UIEvent<any>
): T => {
  stopEvent(ev)
  return cb()
}
