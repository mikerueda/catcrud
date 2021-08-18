import {useEffect, useState} from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Api from 'helpers/axios'
import CatItem from 'components/CatItem';
import {Cat} from 'helpers/types'

const Home = () => {
  const [cats, setCats] = useState<Cat[]>([])
  const [nextPage, setNextPage] = useState() 

  useEffect(()=>{
    const fetchCats = async () => {
      const {data:{items, next}} = await Api.get('/')
      setCats(items)
      setNextPage(next)
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
          {cats.map( (cat, i) => <CatItem key={i} cat={cat}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Home