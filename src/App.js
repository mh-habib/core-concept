import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar Hossain', 'Joshim Uddin'];
  const products = [
    { name: 'Photoshop', prise: '$90.99' },
    { name: 'Illustrator', prise: '$60.66' },
    { name: 'PDF Reader', prise: '$45.55' }
  ]
  return (
    <div className="App">
      <header className="App-header">

        <p>React Practice</p>
        <Counter></Counter>
        <Users></Users>
        <h4>List of Nayok:</h4>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        <h4>List of Product:</h4>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name="Abdul Jasim" nayika="Bobita"></Person>
        <Person name="Raz Razzak" nayika="Sabana"></Person>
        <Person name="Sakib Hossain" nayika="Rozina"></Person>

      </header>
    </div>
  );
}

//State declaration
function Counter() {
  const [count, setCount] = useState(5); //React hook
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

//Dynamic Users
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      {
      users.map(user => <li> {user.name} </li>)
      }
    </div>
  )
}

// Component Declaration
function Product(props) {
  const productStyle = {
    border: '1px solid red',
    backgroundColor: 'lightgrey',
    color: 'gray',
    width: '200px',
    height: '200px',
    margin: '15px',
    padding: '10px',
    borderRadius: '5px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h5>{props.product.prise}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    width: '400px',
    margin: '15px'
  }
  return (
    <div style={personStyle}>
      <h2>Nayok: {props.name}</h2>
      <h3>Hero of : {props.nayika}</h3>
    </div>
  )
}
export default App;