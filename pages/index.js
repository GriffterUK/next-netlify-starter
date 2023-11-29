import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
 

      <main>
        <Header title="Welcome to WGT" />
        <p className="description">
          Welcome to the  Welsh Grand Tour <code>Winter Edition 23/34</code>
        </p>
        
      </main>

      <Footer />
    </div>
  )
}
