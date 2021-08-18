import Head from 'next/head';
import Image from 'next/image';
import CatItem from 'components/CatItem';
import useCatApi from 'hooks/useCatApi'
import Button from 'components/Button'

const Home = () => {
  const {cats, deleteCat} = useCatApi(10)

  return (
    <div className="bg-purple-400 min-h-screen ">
      <Head>
        <title>CatsCrud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container mx-auto p-4 md:max-w-md'>
        <header className='flex flex-row justify-between my-4 text-2xl leading-4 text-yellow-200 font-black items-center'>
          <div className='flex flex-row items-center'>
            <Image src="/logo.png" alt="logo" width="30" height="30"/>
            <h1>CatsCrud</h1>
          </div>
          <Button variant='green' onClick={()=>{}} >Add new Cat :3</Button>
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