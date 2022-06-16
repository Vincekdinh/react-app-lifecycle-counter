import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const Counter = (props) => {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('Counter')

    useEffect(() => {
        if(props.title) {setTitle(props.title)}
    }, [props.title])
    
    const handleAdd = () =>{
        setCounter(counter + 1)
    }
    const handleSub = () =>{
        setCounter(counter - 1)
    }
    const handleAlert = () => {
        console.log('test')
        setTimeout(() => {setCounter(curCount => {alert(curCount)})}, 5000)
    }
    
    console.log(counter);

    return (
        <section>
            <header>{title}: {counter}</header>
            <Button onClick={handleAdd}>+</Button><Button onClick={handleSub}>-</Button>
            <Button onClick={handleAlert}>Alert after 5 s</Button>
        </section>
    )
}

ReactDOM.render(
  <Counter  title="MyCounter"/>,
  document.getElementById('root')
);




