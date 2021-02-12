//   1. Create Car component that would display the car's model.
//   2. Create variable for some car model. Pass the value from the variable as prop in the Car component. Display the car model.
//   3. Implement 1 and 2 with three other car models.
//   4. Create car object (type, model, color, doors number, hatchback  etc.).  Pass the object as prop in the Car component. Display the car details. 
//   5. If hatchback is true, you should display the doors number increased by one.
import Car from './Car'

const App = () => {
  let model1 = 'Mercedes';
  let model2 = 'BMW';
  let model3 = 'Zastava';
  let model4 = 'Golf'

  let carInfo = {
    type: 'coupe',
    model: 'Audi',
    color: 'Black',
    doors: 3,
    hatchback: true
  };
  return (
    <div id="app">
      {/* <Car carModel={model1}/>
      <Car carModel={model2} />
      <Car carModel={model3} />
      <Car carModel={model4} /> */}
      
      <Car info={carInfo} />
    </div>
  );
}

export default App;
