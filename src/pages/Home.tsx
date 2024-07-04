import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import { useState } from "react";
import Congrat from "../components/Congrat";

const Home: React.FC = () => {
  const [showCongrat, setShowCongrat] = useState(false);

  const handleButtonClick = () => {
    setShowCongrat(true);
  };

  return (
    <div className='container'>
      <Header />
      {showCongrat ? (
        <Congrat />
      ) : (
        <Form showCongratComponent={handleButtonClick} />
      )}
    </div>
  );
};

export default Home;
