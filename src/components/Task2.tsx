import { useState } from 'react';

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

  export const Task2 = (props:myProps
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
                                <td style={{display:"flex", justifyContent:"space-between", padding:"0px"}}>
                                    <div onClick={() => { 
                                    setPopupData({name:data.name,age:data.age,gender:data.gender,phone:data.phone,email:data.email,address:data.address})
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
                        <h2>Customers Details</h2>
                        <div>Name: {popupData.name}</div>
                        <div>Age: {popupData.age}</div>
                        <div>Gender: {popupData.gender}</div>
                        <div>Phone No: {popupData.phone}</div>
                        <div>Email: {popupData.email}</div>
                        <div>Address: {popupData.address}</div>
                        <button onClick={() => {setDisplayPopup("none")
                        }} style={{alignSelf:"center"}}>Okay</button>
                    </div>
                   
                </div>
                
                
            </div>
        )
    }
    