import './App.css';

function App() {
  console.log('secret', process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>Pursuit App Template</h1>
      <h2>This is a test Netlify App</h2>
      <h3>Continuous deployment is automatic now</h3>
      <h4>Adding a change from a branch</h4>
      <section id="section1"></section>
    </div>
  );
}

export default App;
