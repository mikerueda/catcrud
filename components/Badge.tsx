import {FC } from 'react'

const Badge:FC = ({children}) => (
    <span className='text-sm inline-block bg-yellow-100 rounded ml-2 px-2 '>{children}</span>
)

export default Badge