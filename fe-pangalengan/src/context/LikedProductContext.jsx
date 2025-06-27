import { createContext, useContext, useState } from "react";

const LikedProductsContext = createContext();

export const useLikedProducts = () => useContext(LikedProductsContext);

export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  return (
    <LikedProductsContext.Provider value={{ likedProducts, setLikedProducts }}>
      {children}
    </LikedProductsContext.Provider>
  );
};