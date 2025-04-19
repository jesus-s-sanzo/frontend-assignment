import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import React from 'react';

const App: React.FC = () => {
    return (
        <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default App;