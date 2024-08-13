import styled from 'styled-components';

const KartSSS = styled.div`
  background-color: aquamarine;
  border-radius: 15px;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 60px;
  display: flex;
  flex-direction: ${({umut})=>umut};
  @media screen and (max-width:${({theme})=>theme.responsive}){
    flex-direction: column;
    background-color: pink;
  }
  box-shadow: ${({theme})=>theme.golge};
  
`;

export default KartSSS;
