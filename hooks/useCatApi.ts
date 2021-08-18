import {useState, useEffect} from 'react'
import {Cat} from 'helpers/types'
import Api from 'helpers/axios'

export default (initialCats:number) => {
  const [cats, setCats] = useState<Cat[]>([])
  const [nextPage, setNextPage] = useState() 
  // const [error, setError] = useState()

  const getCats = async (count?:number, nextItems?:number) => {
    const {data:{items, next}} = await Api.get(`?count=${count || 5}${nextItems ? `?next=${nextItems}`: ''}`)
    setCats(items)
    setNextPage(next)
  }

  const deleteCat = async (id) => {
    await Api.delete(`/${id}`)
    getCats(initialCats)
  }

  const createCat = (cat) => {}

  useEffect(()=>{
    getCats(initialCats)
  }, [])

  return{
    cats,
    getCats,
    deleteCat,
    createCat
  }
}