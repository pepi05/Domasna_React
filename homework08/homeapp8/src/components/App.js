/* Homework 09
  1. Create navigation menu with three pages - Users, Posts, Comments.
  2. From https://jsonplaceholder.typicode.com/.
     * fetch all users
     * fetch all posts from the user with id = 1
     * fetch all comments for the post with id = 1
  3. Display the corresponding data on each of the pages.
*/
import {Route} from 'react-router-dom'

import Users from '../components/pages/Users';
import Posts from '../components/pages/Posts';
import Comments from '../components/pages/Comments';

import NavMenu from './widgets/navmenu/NavMenu';

const App = (props) => {
  return (
    <>
    <div className="App">
      <NavMenu />
     <Route exact path='/users' component={Users}/>
     <Route exact path='/posts' component={Posts} />
     <Route exact path='/comments' component={Comments} />
    </div>
    </>
  );
}

export default App;
