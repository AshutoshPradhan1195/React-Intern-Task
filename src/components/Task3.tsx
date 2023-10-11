import { useState } from 'react';
import { FollowBtn } from './FollowBtn';

type myProps = {
    customerData:{
        name:string
        email:string
        phone:string
        address:string
        gender:string
        age:number
    }[]
}

  export const Task3 = (props:myProps
    ) => {

        const [popupData, setPopupData] = useState({name:"",age:0,gender:"",phone:"",email:"",address:""})
        const [displayPopup, setDisplayPopup] = useState("none")

        return(
            <div style={{display:'flex'}}>
                <table className='customersTable'>
                    <thead>
                        <tr>
                            <th>Customers</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {props.customerData.map((data) => (
                            
                            <tr key={data.email} >
                                <td style={{display:"flex", justifyContent:"space-between", padding:"0px", alignItems:"center"}}>
                                    <div onClick={() => { 
                                    setPopupData({name:data.name,age:data.age,gender:data.gender,phone:data.phone,email:data.email,address:data.address})
                                    setDisplayPopup("block")
                                }} style={{width:"100%", height:"100%", padding:"15px"}}> 
                                        {data.name} 
                                    </div>

                                    <FollowBtn styles={{padding:"5px", marginRight:"10px"}}/>                            
                                </td>   
                                
                            </tr> 
                        ))}

                        

                    </tbody>

                </table>

                <div className='popup' style={{display:displayPopup}}>
                    <div>

                    <h2>
                        Customer Details
                    </h2>

                    <input type='text' value={popupData.name} name='name' placeholder='Full Name' readOnly/> 
                        <input type='number' value={popupData.age} name='age' min={1} placeholder='Age' readOnly/> 
                        <input type='text' value={popupData.gender} name='gender' placeholder='Gender' readOnly/> 
                        <input type='text' value={popupData.phone} name='phone' placeholder='Phone Number' readOnly/>
                        <input type='text' value={popupData.email} name='email' placeholder='Email' readOnly/>
                        <input type='text' value={popupData.address} name='address' placeholder='Address' readOnly/>
                        <button onClick={() => {setDisplayPopup("none")
                        }} style={{alignSelf:"center"}}>Okay</button>
                    </div>
                   
                </div>
                
                
            </div>
        )
    }
    