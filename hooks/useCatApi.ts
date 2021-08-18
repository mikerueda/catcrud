import {useState, useEffect} from 'react'
import {Cat} from 'helpers/types'
import Api from 'helpers/axios'

export default () => {
  const [cats, setCats] = useState<Cat[]>([])
  const [nextPage, setNextPage] = useState() 

  const getCats = async () => {
    const {data:{items, next}} = await Api.get('/')
    setCats(items)
    setNextPage(next)
  }

  const deleteCat = (id) => {}
  const createCat = (cat) => {}

  useEffect(()=>{
    getCats()
  }, [])

  return{
    cats,
    getCats,
    deleteCat,
    createCat
  }
}