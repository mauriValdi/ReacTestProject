import NavBar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com"
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="content">
        <Home></Home>
        <h1>{ title }</h1>
        <p>{ likes }</p>
        <p>{ "likes text" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() *10 }</p>
        
        <a href={link}>Google link</a>
      </div> 
    </div>
  );
}

export default App;
