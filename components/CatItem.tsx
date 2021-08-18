import {FC} from 'react'
import Badge from './Badge'
import {Cat} from 'helpers/types'

type CatComponent = {
  cat:Cat
}

const CatField = ({label, value}) => (
  <li className='text-sm font-bold mr-2'>
    <span className='font-normal'>{label}: </span>
    {value}
  </li>  
)

const CatItem:FC<CatComponent> = ({cat}) => (
  <li className='p-4 shadow-md mb-4 rounded bg-white text-gray-700'>
    <p className='text-lg font-bold text-purple-600'>{cat.name}</p>
    <ul className='flex flex-row'>
      <CatField label='Breed' value={cat.breed} />
      <CatField label='Color' value={cat.color} />
    </ul> 
    <p className='text-sm font-normal'>tags: 
      {Object.keys(cat.tags).map( tag => {
        const tagType = typeof cat.tags[tag]
        const value = cat.tags[tag]
        if(tagType === 'boolean'){
          return value && <Badge>{tag}</Badge>
        } else {
          return <Badge>{tag}: {value}</Badge>
        }
      })}
    </p>
  </li>
) 

export default CatItem