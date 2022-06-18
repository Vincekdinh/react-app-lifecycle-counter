import React, {useState, useRef} from 'react';
import Button from './Button';

const CountUseRef = (props) => {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('CountUseRef')
    const counterRef = useRef(counter)
    counterRef.current = counter
    console.log(counterRef)
    
    const handleAdd = () =>{
        setCounter(counter + 1)
    }
    const handleSub = () =>{
        setCounter(counter - 1)
    }
    const handleAlertReactWay = () => {
        console.log('test')
        setTimeout(() => alert(counterRef.current), 5000)
    }
    
    console.log(counter);

    return (
        <section>
            <header>{title}: {counter}</header>
            <Button onClick={handleAdd}>+</Button><Button onClick={handleSub}>-</Button>
            <Button onClick={handleAlertReactWay}>Alert after 5 s</Button>
        </section>
    )
}

export default CountUseRef;