import React from 'react';
import { AccordionContainer } from "./containers/faqs";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

function App() {
  return(
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}

export default App;
