import styled from 'styled-components';
export const TransactionHistoryTable = styled.table`
  margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`;

export const HeadersRow = styled.tbody`
  font-size: 1.5rem;
  text-align: center;
`;
export const ColumnHeader = styled.th`
  width: 30%;
  padding: 10px 50px;
  background-color: #02bbd7;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  border-radius: 5px;
`;
export const ValuesRow = styled.tr`
  width: 33%;
  color: #8a8b8e;
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;
