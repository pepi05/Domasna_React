// 3. Create simple signup form. The form should be consisted of:
//     * First name 
//     * Last name 
//     * Handle 
//     * Email 
//     * Password
//     * 'Sign Up' button
//   On click on the submit the button hide the form and show a success message (ex. 'User is successfully registered').

import SignUp from "./widgets/SignUp"

const App = () => {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
