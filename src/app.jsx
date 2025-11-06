import { BrowserRouter, Link, Route, Routes, } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

function App() {

        return (
        <header>

            <BrowserRouter>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            </BrowserRouter>
        </header>
        )

}
root.render(<App />);
export default App