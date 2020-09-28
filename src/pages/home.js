import React from "react"
import { AccordionContainer } from "../containers/faqs"
import { FooterContainer } from "../containers/footer"
import { JumbotronContainer } from "../containers/jumbotron"

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>

  )
}

