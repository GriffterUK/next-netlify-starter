import Head from 'next/head'
import '@styles/globals.css'
import Head from "next/head";
// function Application({ Component, pageProps }) {
//   return (
//     <>

//     <Head>
//     <title>Welsh Grand Tour</title>
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
  
//   <Component {...pageProps} />)
// }

function Application({ Component, pageProps }) {
  return( 
   <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
       rel="stylesheet" integrity="sha384- 
         EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    </Head>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
     integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
     crossorigin="anonymous"></script>

  <Component {...pageProps} />)
   </>
}

export default Application
