import { useState } from "react"

export const FollowBtn = () => {
    const[follow,setFollow] = useState("Follow")
    return(
        <div>
            <button onClick={() => {
                setFollow("Following")
            }}>{follow}</button>
        </div>
    )
}






