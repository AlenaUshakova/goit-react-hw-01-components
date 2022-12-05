import styled from 'styled-components';

export const FriendCardItem = styled.li`
  display: flex;
  margin-top: 2vh;
  padding: 0 5vw;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  :first-child {
    margin-top: 5vh;
  }
`;
export const FriendCard = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const Status = styled.span`
  border-radius: 50%;
  margin: auto 5px;
  height: 15px;
  width: 15px;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  margin: 0 1vw;
`;
export const FriendName = styled.p`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`;
