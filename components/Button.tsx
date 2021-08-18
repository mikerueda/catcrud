import { FC } from 'react'

type Button = {
  onClick: ()=> void
}

const Button:FC<Button> = ({children, onClick}) => (
  <button className='text-sm inline-block bg-red-200 hover:bg-red-600 text-gray-700 hover:text-white rounded px-4 py-1' onClick={onClick} >{children}</button>
)

export default Button