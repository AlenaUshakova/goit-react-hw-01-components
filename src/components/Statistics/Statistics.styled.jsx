import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  min-width: 35%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`;

export const ListTitle = styled.h2`
  margin: 0;
  padding: 10px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 2.5rem;
`;
export const StatList = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const StatListItem = styled.li`
  min-width: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-shadow: 0 0 3px #000;
  padding-top: 10px;
  padding-bottom: 10px;
  :last-child {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  :first-child {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  background-color: ${props => {
    return getRandomHexColor();
  }};
`;
export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #fff;
`;
export const Percentage = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
