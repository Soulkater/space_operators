import styled from 'styled-components/native';

export const CreateSessionContent = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export const CreateSessionPlayersTitleWrapper = styled.View`
    width: 75%;
    height: 48px;
    background: rgba(220, 47, 190, 0.75);
    border-radius: 10px;
    margin: 0 auto 20px auto;
    
`;

export const CreateSessionTitle = styled.Text`
    text-align: center;
    text-align-vertical: center;
    height: 100%;
    color: #fff;
    font-size: 20px;
`;

export const CreateSessionWrapper = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff21;
    height: 50%;
    width: 100%;
    margin: 30px;
`;

export const CreateSessionPlayersTitleContainer = styled.View`
    width: 50%;
    height: 10%;
    margin: 5%;
    background: rgba(53, 52, 155, 1);
    border-radius: 2px;
`;

export const CreateSessionPlayersTitle = styled.Text`
    height: 100%;
    color: #fff;
    text-align: center;
    text-align-vertical: center;
    font-size: 16px;
`;

export const CreateSessionPlayersContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    width: 90%;
    padding: 10px;
`;

export const CreateSessionPlayerName = styled.Text`
    width: 45%;
    height: 40px;
    text-align: center;
    text-align-vertical: center;
    background: rgba(20, 150, 189, 0.75);
    color: #fff;
    margin-bottom: 10px;
    border-radius: 2px;
`;

export const CreateSessionPlayerNamePret = styled.Text`
    width: 45%;
    height: 40px;
    text-align: center;
    text-align-vertical: center;
    background: rgba(95, 189, 20, 0.75);
    color: #fff;
    margin-bottom: 10px;
    border-radius: 2px;
`;

export const CreateSessionButtonWrapper = styled.View`
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
    background-color: #35349B;
    margin: 10px;
    box-shadow: 1px 1px 10px #000000;

`;

export const CreateSessionButtonStart = styled.Text`
    text-align: center;
    text-align-vertical: center;
    height: 100%;
    background-color: green;
    border-radius: 50px;
    color: #fff;
    font-size: 18px;
    box-shadow: 1px 1px 10px #000000;
`;

export const CreateSessionButtonQuit = styled.Text`
    text-align: center;
    text-align-vertical: center;
    height: 100%;
    background-color: red;
    border-radius: 50px;
    color: #fff;
    font-size: 18px;
    box-shadow: 1px 1px 10px #000000;

`;