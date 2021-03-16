import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/users'>Users</Link>
        </div>
    )
}

export default NavMenu;