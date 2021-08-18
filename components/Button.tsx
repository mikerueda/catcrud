import { FC } from 'react'

const variants = {
  red: 'bg-red-200 hover:bg-red-600 text-gray-700 hover:text-white',
  green: 'bg-green-200 hover:bg-green-600 text-gray-700 hover:text-white'
}

type Button = {
  onClick: ()=> void
  additionalClasses?: string
  variant: keyof typeof variants
}

const Button:FC<Button> = ({children, variant, additionalClasses, onClick}) => (
  <button 
    className={`text-sm inline-block rounded px-4 py-1 ${variants[variant]} ${additionalClasses}`} 
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button