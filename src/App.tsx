import Header from './components/Header'
import Form from './components/Form'
import './App.css';
import { useState } from 'react';
import Congrat from './components/Congrat';

function App() {
  const [showCongrat, setShowCongrat] = useState(false);

  const handleButtonClick = () => {
    setShowCongrat(true);
  };

  return (
    <div className='container'>
      <Header />
      {showCongrat ? <Congrat /> : <Form showCongrat={handleButtonClick} />}
    </div>
  );
}

export default App;
