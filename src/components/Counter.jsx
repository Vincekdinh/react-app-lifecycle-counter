import React, {useState, useEffect, useRef} from 'react';
import Button from './Button';

const Counter = (props) => {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('Counter')
    const [isAlert, setIsAlert] = React.useState(false)
    
    const handleAdd = () =>{
        setCounter(counter + 1)
    }
    const handleSub = () =>{
        setCounter(counter - 1)
    }

    const handleAlertReactWay = () => {
        setTimeout(() => {
            setIsAlert(true)
        }, 2000)
    }

    useEffect(() => {
        if (isAlert) {
            alert(counter)
            setIsAlert(false)
        }
    }, [isAlert])
    
    console.log(counter);

    return (
        <section>
            <header>{title}: {counter}</header>
            <Button onClick={handleAdd}>+</Button><Button onClick={handleSub}>-</Button>
            <Button onClick={handleAlertReactWay}>Alert after 5 s</Button>
        </section>
    )
}

export default Counter;