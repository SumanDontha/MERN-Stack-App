import React, { useReducer} from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'

const GuestState = (props) => {

  const initialState = {
    guests: [
      {
        id: 1,
        name: 'Jake Smith',
        phone: '333 444 9999',
        dietary: 'Vegan',
        isconfirmed: false
      },
      {
        id: 2,
        name: 'Merry Williams',
        phone: '222 777 6666',
        dietary: 'Non-Veg',
        isconfirmed: true
      },
      {
        id: 3,
        name: 'Suman Dontha',
        phone: '333 777 5555',
        dietary: 'Pascatarian',
        isconfirmed: false
      }
    ]
  }

  const [state, dispatch] = useReducer(guestReducer, initialState)
  return (
    <GuestContext.Provider value={{ guests: state.guests}}>
      { props.children }
    </GuestContext.Provider>
  )
}

export default GuestState
