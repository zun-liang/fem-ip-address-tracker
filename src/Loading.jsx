import styled from "styled-components"
import GlobalStyles from "./globalStyles"
import GhostGif from "./assets/images/ghost.gif"

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Loading = () => 
    <>
        <GlobalStyles />
        <LoadingContainer>
            <img src={GhostGif} alt="loading gif"/>
        </LoadingContainer>
    </>

export default Loading