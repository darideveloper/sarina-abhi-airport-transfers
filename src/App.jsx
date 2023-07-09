import 'sweetalert2/src/sweetalert2.scss'

import Header from './sections/header'
import Hero from './sections/hero'
import Form from './sections/form'
import Services from './sections/services'
import Footer from './sections/footer'
import Load from './sections/load'

import Swal from 'sweetalert2'

function App() {

  // Show alert if thanks query param is present
  const urlParams = new URLSearchParams(window.location.search)
  const thanks = urlParams.get('thanks')
  if (thanks) {
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your sale has been processed successfully',
    })
  }

  return (
    <div>
      <Header/>
      <Hero/>
      <Form/>
      <Services/>
      <Footer/>
      <Load/>
    </div>
  )
}

export default App
