import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/popcorn">Popcorn</Link></li>
            <li><Link to="/spam">Spam</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
        </ul>
    )
}

export default Nav