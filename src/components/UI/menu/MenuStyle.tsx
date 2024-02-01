import styled from "styled-components";

export const Contain = styled.div`
  display: block;
  width: 10%;
  height: 10vh;
`;

export const Overlay = styled.section`
  position: absolute;
  top: 32%;
  left: 49%;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const MainContain = styled.div`
  display: flex;
  margin: auto;
  position: relative;
  flex-flow: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  div {
    width: 25px;
    height: 4px;
    background-color: #fff;
    border-radius: 20px;
    position: absolute;
  }

  div::after,
  div::before {
    position: absolute;
    content: " ";
    height: 4px;
    background-color: #fff;
    border-radius: 20px;
  }

  div::after {
    right: 0;
    width: 120px;
    top: -10px;
  }

  div::before {
    width: 25px;
    top: 10px;
  }

  div.hovered,
  div.hovered::after,
  div.hovered::before {
    background-color: green;
    cursor: pointer;
  }
`;
