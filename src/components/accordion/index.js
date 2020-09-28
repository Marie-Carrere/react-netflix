import React, { useState, useContext, createContext } from "react"
import { Container, Title, Item, Inner, Header, Body } from "./styles/accordion"

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  )
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [isToggle, setIsToggle] = useState(false)
  return (
    <ToggleContext.Provider value={{ isToggle, setIsToggle }}>
      <Item {...restProps}>
        {children}
      </Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { isToggle, setIsToggle } = useContext(ToggleContext)

  function handleToggle() {
    setIsToggle(isToggle => !isToggle)
  }

  return (
    <Header {...restProps} onClick={handleToggle}>
      {children}
      {isToggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { isToggle } = useContext(ToggleContext)

  return isToggle ? <Body {...restProps}>{children}</Body> : null
}