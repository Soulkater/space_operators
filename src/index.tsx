import {NativeRouter, Routes, Route} from "react-router-native";
import CreateSession from './pages/CreateSession';
import Home from './pages/HomePage';
import JoinSession from "./pages/JoinSession";
import HistorySession from "./pages/HistorySession";
import CloseApp from "./pages/CloseApp";

export default function App() {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/CreateSession" element={<CreateSession/>} />
                <Route path="/JoinSession" element={<JoinSession/>} />
                <Route path="/HistorySession" element={<HistorySession/>} />
                <Route path="/CloseApp" element={<CloseApp/>} />
            </Routes>
        </NativeRouter>
    );
}