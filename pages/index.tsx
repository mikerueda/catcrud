import Head from 'next/head';
import Image from 'next/image';
import CatItem from 'components/CatItem';
import useCatApi from 'hooks/useCatApi'

const Home = () => {
  const {cats, deleteCat} = useCatApi(10)

  return (
    <div className="bg-purple-400 min-h-screen ">
      <Head>
        <title>CatsCrud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container mx-auto p-4 md:max-w-md'>
        <header className='flex flex-row my-4 text-2xl leading-4 text-yellow-200 font-black items-center	'>
          <Image src="/logo.png" alt="logo" width="30" height="30"/>
          <h1>CatsCrud</h1>
        </header>

        <ul>
          {cats.map( (cat, i) => (
            <CatItem 
              key={i} 
              cat={cat} 
              deleteCat={deleteCat}
            />))}
        </ul>
      </div>
    </div>
  )
}

export default Home