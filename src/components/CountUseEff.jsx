import React, {useState, useEffect, useRef} from 'react';
import Button from './Button';

const CountUseEff = (props) => {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('CountUseEff')
    const counterRef = useRef(counter)
    counterRef.current = counter

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
    const handleAlertReactWay = () => {
        console.log('test')
        setTimeout(() => alert(counterRef.current), 5000)
    }

    return (
        <section>
            <header>{title}: {counter}</header>
            <Button onClick={handleAdd}>+</Button><Button onClick={handleSub}>-</Button>
            <Button onClick={handleAlertReactWay}>Alert after 5 s</Button>
        </section>
    )
}

export default CountUseEff;