import styled from "styled-components"
import GlobalStyles from "./globalStyles"
import PopatoGif from "./assets/images/popato-cute.gif"

const ErrorContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: beige;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ErrorGif = styled.img`
    width: 200px;
`
const Error = () => 
    <>
        <GlobalStyles />
        <ErrorContainer>
            <ErrorGif src={PopatoGif} alt="error gif"/>
        </ErrorContainer>
    </>

export default Error