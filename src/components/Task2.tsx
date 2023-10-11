import { useState } from 'react';

type myProps = {
    customerData:{
        name:string
        email:string
        phone:string
        address:string
        gender:string
        age:string
    }[]
}

  export const Task2 = (props:myProps
    ) => {

        const [popup, setPopup] = useState({name:"",age:"",gender:"",phone:"",email:"",address:""})
        const [displayPopup, setDisplayPopup] = useState("none")

        return(
            <div style={{display:'flex'}}>
                <table className='studentTable'>
                    <thead>
                        <tr>
                            <th>Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {props.customerData.map((data) => (
                            
                            <tr key={data.email} >
                                <td style={{display:"flex", justifyContent:"space-between", padding:"0px"}}>
                                    <div onClick={() => { 
                                    setPopup({name:data.name,age:data.age,gender:data.gender,phone:data.phone,email:data.email,address:data.address})
                                    setDisplayPopup("block")
                                }} style={{width:"100%", height:"100%", padding:"15px"}}> 
                                        {data.name} 
                                    </div>
                                                                
                                </td>   
                                
                            </tr> 
                        ))}

                        

                    </tbody>

                </table>

                <div className='popup' style={{display:displayPopup}}>
                    <div>
                        <div>Name: {popup.name}</div>
                        <div>Age: {popup.age}</div>
                        <div>Gender: {popup.gender}</div>
                        <div>Phone No: {popup.phone}</div>
                        <div>Email: {popup.email}</div>
                        <div>Address: {popup.address}</div>
                        <button onClick={() => {setDisplayPopup("none")
                        }} style={{alignSelf:"center"}}>Okay</button>
                    </div>
                   
                </div>
                
                
            </div>
        )
    }
    