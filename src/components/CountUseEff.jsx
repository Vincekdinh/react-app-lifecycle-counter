import React, {useState, useEffect, useRef} from 'react';
import Button from './Button';

let counterRef;

const CountUseEff = (props) => {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('CountUseEff')
    counterRef = useRef(counter)
    counterRef.current = counter
    counterRef = counterRef.current

    //componentDidMount
    useEffect(() => {
        console.log("mount:", props.title);
        if(props.title) {setTitle(props.title)}
    }, [])

    //componentDidUpdate
    useEffect(() => {
        console.log("update counter:", counter)
    }, [counter])

    //componentDidUnmount
    useEffect(() => {
      
    }, []);

    const handleAdd = () =>{
        setCounter(counter + 1)
    }
    const handleSub = () =>{
        setCounter(counter - 1)
    }
    const handleAlertnotReactWay = () => {
        console.log('test')
        setTimeout(() => alert(counterRef), 5000)
    }

    return (
        <section>
            <header>{title}: {counter}</header>
            <Button onClick={handleAdd}>+</Button><Button onClick={handleSub}>-</Button>
            <Button onClick={handleAlertnotReactWay}>Alert after 5 s</Button>
        </section>
    )
}

export default CountUseEff;