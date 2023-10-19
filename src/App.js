import React, { createContext } from "react";

export const ShopContext = createContext();
export const ProductContext = createContext();

function App({ShopComponent, ProductComponent, pageProps}) {
  return (
    // Wrap your components in the context providers
    <ShopContext.Provider>
        <ShopComponent {...pageProps} /> <br/> <br/>
        <ProductComponent {...pageProps} />
    </ShopContext.Provider>
  );
}

export default App;
