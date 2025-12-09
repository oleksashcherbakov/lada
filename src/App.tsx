
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import TestPage from './pages/TestPage'
import StrengthsPage from './pages/StrengthsPage'
import Landing from './pages/Landing'

export default function App(){
    return (
        <div className="app-container">
            <header className="main-header">
                <div className="container header-content">
                    <h1 className="logo">Профорієнтатор</h1>
                    <nav className="main-nav">
                        <Link to="/" className="nav-link">Головна</Link>
                        <Link to="/test" className="nav-link">Тест</Link>
                        <Link to="/strengths" className="nav-link">Сильні сторони</Link>
                        <Link to="/landing" className="nav-link">Про продукт</Link>
                    </nav>
                </div>
            </header>

            <main className="container main-content">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/test" element={<TestPage/>} />
                    <Route path="/strengths" element={<StrengthsPage/>} />
                    <Route path="/landing" element={<Landing/>} />
                </Routes>
            </main>

            <footer className="main-footer">
                <div className="container footer-content">© 2025 Профорієнтатор</div>
            </footer>
        </div>
    )
}