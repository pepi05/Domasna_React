import { Link } from 'react-router-dom'

const NavMenu = () => {
    return (
        <div>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/bonus'>Bonus</Link>
        </div>
    )
}

export default NavMenu;