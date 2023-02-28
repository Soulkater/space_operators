import styled from 'styled-components/native';

export const HistorySessionContent = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export const HistorySessionPlayersTitleWrapper = styled.View`
    width: 75%;
    height: 48px;
    background: rgba(220, 47, 190, 0.75);
    border-radius: 10px;
    margin: 0 auto 20px auto;
    
`;

export const HistorySessionTitle = styled.Text`
    text-align: center;
    text-align-vertical: center;
    height: 100%;
    color: #fff;
    font-size: 20px;
`;

export const HistorySessionWrapper = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff21;
    height: 60%;
    width: 100%;
    margin: 30px;
`;

export const HistorySessionPlayersContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: stretch;
    height: 90%;
    width: 100%;
    padding: 10px;
`;

export const History = styled.Text`
    align-self: center;
    width: 80%;
    height: 50px;
    text-align: center;
    text-align-vertical: center;
    background: rgba(53, 52, 155, 1);
    color: #fff;
    margin-top: 12px;
    margin-bottom: 12px;
    border-radius: 2px;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.5));
`;

export const HistorySessionButtonWrapper = styled.View`
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
    margin: 10px 0;
    box-shadow: 1px 1px 10px #000000;

`;

export const HistorySessionButtonQuit = styled.Text`
    text-align: center;
    text-align-vertical: center;
    height: 100%;
    background-color: red;
    border-radius: 50px;
    color: #fff;
    font-size: 18px;
    box-shadow: 1px 1px 10px #000000;

`;