import './App.css';
// import Hello from './Hello';

function App() {
  const name = "Jungi"
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  };
  return (
  <div className="App">
    <h1
      style={{
        color: "red",
        backgroundColor: "green",
      }}>
        Hello, {name}.<p>{2 + 3}</p>
     </h1>
     <a href={naver.url}>{naver.name}</a>
  </div>
  );
}

export default App;
