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
    <div className="bg-purple-400 min-h-full">
      <Head>
        <title>CatsCrud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto p-4'>
        <header className='flex flex-row my-4 text-2xl leading-4 text-yellow-200 font-black items-center	'>
          <Image src="/logo.png" alt="logo" width="30" height="30"/>
          <h1>CatsCrud</h1>
        </header>
        <ul>
          {cats.map( cat => <li className='p-4 shadow-md mb-4 rounded bg-white text-gray-700'>
            <p className='text-lg font-bold text-purple-600'>{cat.name}</p>
            <ul className='flex flex-row'>
              <li className='text-sm font-bold mr-2'><span className='font-normal'>Color: </span>{cat.color}</li>  
              <li className='text-sm font-bold'><span className='font-normal'>Breed: </span>{cat.breed}</li>  
            </ul> 
            <p className='text-sm font-normal'>tags: 
              {Object.keys(cat.tags).map( tag => 
                <span className='text-sm inline-block bg-yellow-100 rounded ml-2 px-2 '>{tag}</span>
              )}
            </p>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Home