import {useEffect, useState} from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Api from 'helpers/axios'

type Cat = {
  id: string
  name: String
  breed: String
  color: String
  tags: any
}

const Home = () => {
  const [cats, setCats] = useState<Cat[]>([])
  const [nextPage, setNextPage] = useState() 

  useEffect(()=>{
    const fetchCats = async () => {
      const {data:{items, next}} = await Api.get('/')
      setCats(items)
      setNextPage(next)
      console.log(items)
    }

    fetchCats()
  }, [])

  return (
    <div className="">
      <Head>
        <title>CatCrud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto p-4'>
        <header>
          <Image src="/logo.png" alt="logo" width="30" height="30"/>
          <h1>CatCrud</h1>
        </header>
        <ul>
          {cats.map( cat => <li className='p-4 shadow-md mb-4 rounded'>
            <p className='text-lg font-light'>{cat.name}</p>
            <ul className='flex flex-row'>
              <li className='text-sm font-bold mr-2'><span className='font-normal'>Color: </span>{cat.color}</li>  
              <li className='text-sm font-bold'><span className='font-normal'>Breed: </span>{cat.breed}</li>  
            </ul> 
            <p className='text-sm font-normal'>tags: 
              {Object.keys(cat.tags).map( tag => 
                <span className='text-sm inline-block bg-gray-100 rounded ml-2 px-2' >{tag}</span>
              )}
            </p>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Home