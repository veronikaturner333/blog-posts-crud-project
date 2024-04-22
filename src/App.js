import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SiteNavbar } from './components/navbar/SiteNavbar';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { About } from './pages/About';
import './App.css';

//in app.js, we will import the SiteNavbar component and the Home, Posts, and About pages
function App() {
    
    return (
        <Router>
            <SiteNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}
export default App