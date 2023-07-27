import Outputs from "./Outputs"
import styled from "styled-components"
import BgMobile from "./assets/images/pattern-bg-mobile.png"
import BgDesktop from "./assets/images/pattern-bg-desktop.png"
import ArrowSvg from "./assets/images/icon-arrow.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MainContainer = styled(Container)`
  background: url("${BgMobile}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 35vh;
  padding-top: 1.2rem;
  justify-content: flex-start;
  gap: 0.8rem;
  @media(min-width: 800px) {
    background: url("${BgDesktop}");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 2rem;
    gap: 1.2rem;
  }
`
const Title = styled.h1`
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
  color: white;
  font-weight: 500;
  @media(min-width: 600px) {
    font-size: 1.4rem;
  }
  @media(min-width: 800px) {
    font-size: 1.6rem;
  }
  @media(min-width: 1000px) {
    font-size: 2rem;
  }
`
const InputContainer = styled.div`
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  @media(min-width: 800px) {
    max-width: 500px;
  }
  @media(min-width: 1000px) {
    max-width: 600px;
  }
`
const Input = styled.input`
  width: 90%;
  height: 2rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  outline: none;
  padding: 0 1rem;
  font-size: 0.7rem;
  cursor: pointer;
  @media(min-width: 600px) {
    font-size: 0.8rem;
    height: 2.2rem;
  }
  @media(min-width: 800px) {
    font-size: 1rem;
    padding: 0 1.2rem;
    height: 2.5rem;
  }
  @media(min-width: 1000px) {
    height: 3rem;
  }
`
const Button = styled.button`
  width: 10%;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 2rem;
  background-color: black;
  background: url("${ArrowSvg}"), black;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
  &:hover {
    background: url("${ArrowSvg}"), var(--very-dark-gray);
    background-repeat: no-repeat;
    background-position: 50%;
  }
  @media(min-width: 600px) {
    height: 2.2rem;
  }
  @media(min-width: 800px) {
    height: 2.5rem;
  }
  @media(min-width: 1000px) {
    height: 3rem;
  }
`
const Message = styled.p`
  display: ${({$messageDisplay}) => $messageDisplay ? "" : "none"};
  font-size: 0.6rem;
  color: red;
  margin: 0.3rem 1rem;
  @media(min-width: 600px) {
    font-size: 0.7rem;
  }
`
const OutputsContainer = styled(Container)`
  background-color: white;
  border-radius: 10px;
  width: 90%;
  max-width: 350px;
  max-height: 40vh;
  padding: 1.5rem 1rem;
  text-align: center;
  gap: 0.8rem;
  position: absolute;
  top: 7rem;
  z-index: 800;
  @media(min-width: 600px) {
    max-height: 45vh;
    gap: 1rem;
    top: 7.5rem;
    padding: 1.5rem 1.2rem;
  }
  @media(min-width: 800px) {
    min-height: 150px;
    flex-direction: row;
    width: 80%;
    max-width: 1000px;
    align-items: flex-start;
    text-align: left;
    gap: 1.5rem;
    top: 9.5rem;
  }
  @media(min-width: 1000px) {
    gap: 1.8rem;
    min-height: 170px;
    padding: 1.5rem 2rem 1.8rem;
    top: 10.5rem;
  }
`

const Content = ({ipInput, handleChange, handleClick, messageDisplay, ip, location, timezone, isp}) => {
    return(
        <MainContainer>
          <Title>IP Address Tracker</Title>
          <InputContainer>
            <Input 
              type="text"
              placeholder="Enter IP address"
              name="ip-address"
              id="ip-address"
              value={ipInput}
              onChange={handleChange}/>
            <Button onClick={handleClick} />
            <Message $messageDisplay={messageDisplay}>Please enter a valid IP address!</Message>
          </InputContainer>
          <OutputsContainer>
            <Outputs subtitle="IP Address" output={ip} border="yes" />
            <Outputs subtitle="Location" output={location} border="yes" />
            <Outputs subtitle="Timezone" output={timezone} border="yes" />
            <Outputs subtitle="ISP" output={isp} border="no" />
          </OutputsContainer>
        </MainContainer>
    )
}

export default Content