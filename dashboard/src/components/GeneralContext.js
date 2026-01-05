import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // import Sell window

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  // Buy window state
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedBuyUID, setSelectedBuyUID] = useState("");

  // Sell window state
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellUID, setSelectedSellUID] = useState("");

  // Handlers for Buy
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedBuyUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedBuyUID("");
  };

  // Handlers for Sell
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedSellUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}

      {/* Conditionally render Buy/Sell windows */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedBuyUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
