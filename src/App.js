import './App.css';
// import Hello from './Hello';

function App() {
  const name = "Jungi"
  return (
  <div className="App">
    <h1
      style={{
        color: "red",
        backgroundColor: "green",
      }}>
        Hello, {name}.<p>{2 + 3}</p>
     </h1>
  </div>
  );
}

export default App;
