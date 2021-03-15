/* Homework 10
  1. Create navigation menu with two pages - Users, Posts.
  2. From https://jsonplaceholder.typicode.com .
      * fetch all users
      * fetch all posts
  3. Display the coresponding data in the pages.
  4. Count the number of posts that each user wrote. Add the post number as property in each user object and display it. 
  5. Count the number of comments for each post. Add the comment number as property in each post object and display it. 
  * Bonus - make POST, PUT, PATCH, DELETE request for any resource available at https://jsonplaceholder.typicode.com.
*/
// vendor imports
import { Route } from 'react-router';
// routes
import Posts from './pages/Posts';
import Users from './pages/Users';
import Bonus from './pages/Bonus';

import NavMenu from './widgets/navmenu/NavMenu';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Route exact path='/posts' component={Posts}/>
      <Route exact path='/users' component={Users} />
      <Route exact path='/bonus' component={Bonus} />
    </div>
  );
}

export default App;
