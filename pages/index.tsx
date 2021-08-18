import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>CatCrud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/logo.png" alt="logo" width="30" height="30"/>
      <h1>CatCrud</h1>
    </div>
  )
}

export default Home