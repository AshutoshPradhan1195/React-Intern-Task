import { useState } from "react"

type props = {
    styles:React.CSSProperties
}

export const FollowBtn = (Props:props) => {

    const[follow,setFollow] = useState("Follow")

    function followChange(){

        if(follow === "Follow"){
            setFollow("Following")
        }
        else(
            setFollow("Follow")
        )
    }

    return(
        <div>
            <button style={Props.styles} onClick={() => {
                followChange()
            }}>{follow}</button>
        </div>
    )
}
