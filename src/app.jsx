import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
function App() {

        return (
        <header>

            <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Page1/>}/>
                <Route path="/about" element={<Page2/>}/> 
            </Routes>
            </Router>
        </header>
        )

}

export default App