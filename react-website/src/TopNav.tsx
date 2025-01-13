import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function TopNav() (
    <nav className="top-nav">
        <h1>My Portfolio</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/work">Work Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
);
export default TopNav;