import './App.css'
import Card from './Card.jsx'
import BusinessCard from './BusinessCard.jsx'
import BusinessCardDark from './BusinessCardDark.jsx'

function App() {

  return(
    <div className='cards flex justify-center'>
    {/* <Card/> */}
    <BusinessCard/>
    <BusinessCardDark/>
    </div>
  )
}

export default App
