// vendor imports 
import { useState, useEffect } from 'react';

const Users = () => {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setIsDataFetched(true);
            })
            .catch(error => {
                console.log('error', error);
                setIsDataFetched(true);
                setError('Error fetching users data');
            });
    }, []);

    return (
        <div>
            {isDataFetched
                ?
                error === ''
                    ?
                    <div className='users'>
                        <h2>This is Users list:</h2><br />
                        <ol>
                        {users.map(user => {
                            return (
                                <li key={user.id}>{user.name}</li>
                            )
                        })
                        }
                        </ol>
                    </div>
                    :
                    <h2>{error}</h2>
                :
                <h1>Fetching data...</h1>
            }
        </div >
    );
};

export default Users;