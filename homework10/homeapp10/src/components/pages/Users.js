import { useState, useEffect } from 'react';

import PopUp from '../widgets/popup/PopUp'

const Users = () => {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setIsDataFetched(true);
            setUsers(data);
        })
        .catch(error => {
            setError('Error data fetching...')
        })
    }, [])

    const setUserDetails = (index) => {
        setSelectedUser(users[index]);
    }

    const closePopup = () => {
        setSelectedUser(null)
    }

    return (
        <div id='users'>
            {isDataFetched
            ?
            error === ''
            ?
            <>
                {users.map((user, index) => {
                    return (
                        <User key={user.id} index = {index} name={user.name} setUserDetails={setUserDetails}/>
                    )
                })}
            
            {selectedUser && <PopUp user={selectedUser} closePopup={closePopup} />}
            </>
            :
            {error}
            :
            <h2>Fetching data...</h2>
            }
        </div>
    )
}

const User = (props) => {
    const handleNameClick = () => {
        props.setUserDetails(props.index)
    }
    
    return (
        <p onClick={handleNameClick}>{props.name}</p>
    )
}

export default Users;