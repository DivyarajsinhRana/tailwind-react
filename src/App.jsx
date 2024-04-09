import Nav from "./components/Nav"
import Hero from "./section/Hero"
import PopularProducts from "./section/PopularProducts"
import SuperQuality from './section/SuperQuality'
import Services from './section/Services'
import SpecialOffer from './section/SpecialOffer'
import CustomerReviews from './section/CustomerReviews'
import Subscribe from './section/Subscribe'
import Footer from './components/Footer'
const App = () => {

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <setion className="padding-x">
        <Services />
      </setion>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <footer className="bg-black text-white-400 padding-x padding-t pb=8">
        <Footer />
      </footer>
    </main>
  )
}

export default App
