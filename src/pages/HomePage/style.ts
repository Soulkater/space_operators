import styled from 'styled-components/native';

export const HomeContent = styled.View`
  position: relative;
  width: 330px;
  height: 553px;
  

  background-image: url("../../../assets/fond-ecran-menu.png");
  background-size: cover;
`;

export const HomeTitle = styled.Text`
  position: absolute;
  width: 247px;
  height: 120px;
  left: 41px;
  top: 216px;

  //font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 149.2%;
  /* or 60px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: blue;

  //text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5), 1px 1px 20px #000000;
`;