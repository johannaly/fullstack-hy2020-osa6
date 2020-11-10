import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }



  return (
    <div>
      {store.getState().notification.visible &&
        <div
          style={style}>
          {notification.notification}
        </div>
      }
    </div>
  )
}

export default Notification