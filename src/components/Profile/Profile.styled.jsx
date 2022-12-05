import styled from 'styled-components';

export const ProfileCard = styled.div`
  max-width: 30%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`;
export const DescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
`;
export const UserAvatar = styled.img`
  display: flex;
  max-width: 30%;
  border-radius: 50%;
  border: 5px dotted grey;
`;
export const ProfileName = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 2.5rem;
`;
export const ProfileTagLocation = styled.p`
  margin: 10px;
  font-size: 2rem;
  color: #8a8b8e;
`;
export const Statscard = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const StatsElement = styled.li`
  width: 34%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  :not(:last-child) {
    border-right: 2px solid #d3d5e3;
  }
  :last-child {
    border-bottom-right-radius: 5px;
  }
  :first-child {
    border-bottom-left-radius: 5px;
  }
`;
export const Label = styled.span`
  padding-bottom: 10px;
  color: #8a8b8e;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
