import styled from 'styled-components/native';

export const HomeContent = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HomeTitle = styled.Text`
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 100px;
`;

export const HomeButtons = styled.View`
  width: 186px;
  height: 48px;
  background: rgba(8, 117, 150, 0.75);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 0 auto 20px auto;
`;

export const TextButtons = styled.Text`
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  margin: auto;
  color: #FFFFFF;
`;