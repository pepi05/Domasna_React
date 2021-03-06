// 1. Create simple signup form. The form should be consisted of:
//     * First name - reuqired, minimum length 2 characters, maximum length 15 characters
//     * Last name - reuqired, minimum length 2 characters, maximum length 20 characters
//     * Email - required; (**bonus** check if it is valid email)
//     * Password - required
//     * 'Sign Up' button
//     For all the fields above, display the correct validation messages.


import Login from './widgets/Login'


const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
