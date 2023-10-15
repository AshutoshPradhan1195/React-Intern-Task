import { useEffect, useState } from "react"

export const Counter = () => {
    const[counter,setCounter] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((oldCounter) => oldCounter + 1)
        },1000);
        return() => {
            clearInterval(intervalId)
        }
    },[])
    return(
        <div>
            {counter}
        </div>
    )
}
