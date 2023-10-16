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
            You have been on the home page for {counter} seconds
        </div>
    )
}
