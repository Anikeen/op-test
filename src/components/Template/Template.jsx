import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import './styles.scss'

export const Template = ({ children }) => {
  return (
    <div className='page-wrapper'>
      <Header />

      <main className='main-content '>
        {children}
      </main>

      <Footer />
    </div>
  )
}
