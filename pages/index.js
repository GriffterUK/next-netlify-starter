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

        <div class="container">
          <div class="row">
            <div class="col">
              What's New
            </div>
            <div class="col">
              Fixtures
            </div>
            <div class="col">
              Registration
            </div>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
