import { useState } from "react";

const Home = () => {
    //let name = 'mario';
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        //console.log('Hello, ninjas',e);
        //name = 'luigi';
        setName('luigi');
        setAge(26);
    }

    const HandleClickAgain = (name, e) => {
        console.log('hello, ' + name, e.target);
    }
    
    return (  
        <div className="Home">
            <h2>HOMEPAGE</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => HandleClickAgain('Mario', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;
