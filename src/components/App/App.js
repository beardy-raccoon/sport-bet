import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { events } from '../../consts';
import { useState } from 'react';
import EventBet from '../EventBet/EventBet';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main.jsx';
import NotFound from '../NotFound/NotFound';

function App() {
  const [newBet, setNewBet] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onPlaceBet = (placedBet) => {
    setNewBet(placedBet);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={
            <Main
              events={events}
              placedBet={newBet.placedBet}
              isModalOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          }
          />
          <Route path='/bets/:id' element={
            <EventBet
              events={events}
              onPlaceBet={onPlaceBet}
            />
          }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
