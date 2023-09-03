/* eslint-disable react/prop-types */
import styled from "styled-components";

const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.3rem;
  @media (min-width: 600px) {
    gap: 0.5rem;
  }
  @media (min-width: 800px) {
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    gap: 0.6rem;
  }
`;
const SubTitle = styled.h2`
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  @media (min-width: 600px) {
    font-size: 0.6rem;
  }
  @media (min-width: 1000px) {
    font-size: 0.7rem;
  }
`;
const Output = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--very-dark-gray);
  @media (min-width: 600px) {
    font-size: 1rem;
  }
  @media (min-width: 800px) {
    font-size: 0.8rem;
    padding-right: 1rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.1rem;
  }
`;
const StyledHr = styled.hr`
  display: none;
  @media (min-width: 800px) {
    display: inline;
    opacity: ${({ $border }) => ($border === "yes" ? "1" : "0")};
    border: 0.5px solid var(--dark-gray);
    width: 30%;
    transform: rotate(90deg);
    position: relative;
    top: 3rem;
    left: 85%;
  }
`;
const Outputs = ({ subtitle, output, border }) => {
  return (
    <OutputContainer>
      <StyledHr $border={border} />
      <SubTitle>{subtitle.toUpperCase()}</SubTitle>
      <Output>{output || "-----"}</Output>
    </OutputContainer>
  );
};

export default Outputs;
