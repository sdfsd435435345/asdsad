import { Popup } from 'react-vant'

function UserPopUp({ slotContent, ...props }) {
  return (
    <Popup style={{ width: '80%' }} {...props} className="rounded-lg">
      {slotContent}
    </Popup>
  )
}

export default UserPopUp
