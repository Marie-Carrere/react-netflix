import React from "react"
import { AccordionContainer } from "../containers/faqs"
import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import { JumbotronContainer } from "../containers/jumbotron"
import { OptForm } from "../components"

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>

  )
}

