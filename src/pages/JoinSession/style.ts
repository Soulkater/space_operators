import styled from 'styled-components/native';

export const JoinSessionContent = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export const JoinSessionWrapper = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff21;
    height: 50%;
    width: 100%;
    margin: 30px;
`;

export const JoinSessionPlayersTitleContainer = styled.View`
    width: 50%;
    height: 10%;
    margin: 5%;
    background: rgba(53, 52, 155, 1);
    border-radius: 2px;
`;

export const JoinSessionPlayersTitle = styled.Text`
    height: 100%;
    color: #fff;
    text-align: center;
    text-align-vertical: center;
    font-size: 16px;
`;

export const JoinSessionPlayersContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    width: 90%;
    padding: 10px;
    
`;

export const JoinSessionPlayerName = styled.Text`
    width: 45%;
    height: 40px;
    text-align: center;
    text-align-vertical: center;
    background: rgba(20, 150, 189, 0.75);
    color: #fff;
    margin-bottom: 10px;
    border-radius: 2px;
`;

export const JoinSessionPlayerNamePret = styled.Text`
    width: 45%;
    height: 40px;
    text-align: center;
    text-align-vertical: center;
    background: rgba(95, 189, 20, 0.75);
    color: #fff;
    margin-bottom: 10px;
    border-radius: 2px;
`;

export const JoinSessionButtonWrapper = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 125px;
`;

export const NavigationButtons = styled.View`
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: 50px;
    margin: 10px 0;
    box-shadow: 1px 1px 10px #000000;

`;

export const JoinSessionButtonStart = styled.Text`
    text-align: center;
    text-align-vertical: center;
    height: 100%;
    background-color: green;
    border-radius: 50px;
    color: #fff;
    font-size: 18px;
    box-shadow: 1px 1px 10px #000000;
`;

export const JoinSessionButtonQuit = styled.Text`
    text-align: center;
    text-align-vertical: center;
    height: 100%;
    background-color: red;
    border-radius: 50px;
    color: #fff;
    font-size: 18px;
    box-shadow: 1px 1px 10px #000000;

`;