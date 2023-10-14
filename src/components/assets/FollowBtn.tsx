import { useState } from "react"
import { Button, Space } from 'antd';

type props = {
    styles:React.CSSProperties
}

export const FollowBtn = (Props:props) => {

    const[following,setFollowing] = useState(false)

    function followChange(){

        setFollowing(!following)
    }

    return(
        <div>
            <Space wrap>
                <Button type="primary" style={Props.styles} onClick={() => {
                    followChange()
                }}>
                    { following? "following" : "follow" }
                </Button>
            </Space>

        </div>
    )
}
