import './App.css';
import NavBar from './Nav';
import Main from "./Main"
import Data from "./data.js"
export default function App() {
  const cardData = Data.map( card => {
    return (
      <Main 
        id = {card.id}
        location = {card.location} 
        title = {card.title}
        mapsURL ={card.googleMapsUrl}
        start = {card.startDate}
        end = {card.endDate}
        desc = {card.description}
        imageUrl = {card.imageUrl}
      />
  )
  })
  return (
    <div>
      <NavBar />
      <main className='container'>
        {cardData}
      </main>
      
    </div>
  );
}

