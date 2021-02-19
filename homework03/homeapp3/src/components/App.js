import Student from './Student'
const App = () => {
  let fName = 'Stole';
  let lName = 'Stojkov'
  let index = 101;
  let city = 'Ohrid';
  let age = 24;
  let isActive = 'true';  // ke se pojavi greska vo konzola deka ocekuva boolean vrednost za isActive

  return (
    <div>
      <Student firstName={fName} lastName={lName} index={index} city={city} age={age} isActive={isActive}/>
    </div>
  );
}

export default App;
