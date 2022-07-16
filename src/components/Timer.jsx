import { useState, useRef } from "react"

export const Timer = ({ }) => {
    const [counter, setCounter] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const stateRef = useRef();
    stateRef.current = counter;

    const StartMatch = () => {
        setIsActive(true);
        const timer = setInterval(() => {
            setCounter((counter) => counter - 1)

            if (stateRef.current === 1) {
                clearInterval(timer);
            }

        }, 1000);
    }

    return (
        <div className="timer">
            <button onClick={StartMatch} className={isActive ? 'hide' : 'show'}>
                Start
            </button>
            <div className={isActive ? 'show' : 'hide'}>
                {counter}
            </div>
        </div>
    )
}