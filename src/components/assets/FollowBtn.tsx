import { useState } from "react"
import { Button, Space } from 'antd';



export const FollowBtn = () => {

    const[following,setFollowing] = useState(false)

    function followChange(){

        setFollowing(!following)
    }

    return(
        <div>
            <Space wrap>
                <Button type="primary" className='w-[100px]' onClick={() => {
                    followChange()
                }}>
                    { following? "following" : "follow" }
                </Button>
            </Space>

        </div>
    )
}
