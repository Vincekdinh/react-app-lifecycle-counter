import React, {useState, useEffect, useRef} from 'react';
import Button from './Button';

let counterRef;

const Counter = (props) => {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('CounterRef')
    counterRef = useRef(counter)
    counterRef.current = counter
    counterRef = counterRef.current
    
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
        setTimeout(() => alert(counterRef), 5000)
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

export default Counter;