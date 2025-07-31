import React, { useState } from 'react';

import Merch_HeroSection from '../components/Merch_HeroSection'; 
import Merch_HeroSection2 from '../components/Merch_HeroSection2';
import Merch_Popup from '../components/Merch_Popup';

const Merch = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChangeCombo = (newIndex) => {
    setSelectedIndex(newIndex);
  };

  return (
    <div>
      <Merch_HeroSection />
      <Merch_HeroSection2 onCardClick={handleCardClick} />
      {isPopupOpen && (
        <Merch_Popup
          selectedIndex={selectedIndex}
          onClose={handleClosePopup}
          onChangeCombo={handleChangeCombo}
        />
      )}
    </div>
  );
};

export default Merch;
