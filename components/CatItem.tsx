import {FC} from 'react'
import Badge from './Badge'
import Button from './Button'
import {Cat} from 'helpers/types'

type CatComponent = {
  cat:Cat
  deleteCat: (id:string)=>{}
}

const CatField = ({label, value}) => (
  <li className='text-sm font-bold mr-2'>
    <span className='font-normal'>{label}: </span>
    {value}
  </li>  
)

const CatItem:FC<CatComponent> = ({cat, deleteCat}) => (
  <li className='p-4 shadow-md mb-4 rounded bg-white text-gray-700'>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-bold text-purple-600'>{cat.name}</p>
      <Button variant='red' onClick={()=> deleteCat(cat.id)}>Delete :(</Button>
    </div>
    <ul className='flex flex-row'>
      <CatField label='Breed' value={cat.breed} />
      <CatField label='Color' value={cat.color} />
    </ul> 
    <p className='text-sm font-normal'>tags: 
      {Object.keys(cat.tags).map( (tag, i)=> {
        const value = cat.tags[tag]
        return <Badge key={i}>{tag}: {value}</Badge>
      })}
    </p>
  </li>
) 

export default CatItem