/* Homework 11
  * Implement feature to close the popup on click on x.
  1. Create navigation menu with two pages - Home, Users.
  2. From https://jsonplaceholder.typicode.com/.
     * fetch all users
  3. Display only the name of the users. On click on the user name, show the details for the user in a popup.
*/
import '../assets/globalStyle.css'
import { Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Users from '../components/pages/Users';
import NavMenu from './widgets/navmenu/NavMenu';






const App = () => {
  return (
    <div className="App">
      <NavMenu />
      <Route exact path='/home' component={Home} />
      <Route exact path='/users' component={Users}  />
     
    </div>
  );
}

export default App;
