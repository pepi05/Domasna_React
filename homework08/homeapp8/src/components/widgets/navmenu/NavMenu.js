import {Link} from 'react-router-dom';
import './style.css';

const NavMenu = () => {
    return (
        <div className='navmenu'>
            <Link to='/posts'>Posts</Link>
            <Link to='/users'>Users</Link>
            <Link to='/comments'>Comments</Link>
        </div>
    )
}

export default NavMenu;