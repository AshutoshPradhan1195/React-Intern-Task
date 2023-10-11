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

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPopup({...popup, [event.target.name]:event.target.value});
        };
        
        
        const [custData, setCustData] = useState(props.customerData)
        const [popup, setPopup] = useState({name:"",age:0,gender:"",phone:"",email:"",address:""})
        const [displayPopup, setDisplayPopup] = useState("none")

        return(
            <div style={{display:'flex'}}>
                <table className='studentTable'>
                    <thead>
                        <tr>
                            <th>
                                Customers
                                <button>+</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {custData.map((data) => (
                            
                            <tr key={data.email} >
                                <td style={{display:"flex", justifyContent:"space-between", padding:"0px", alignItems:"center"}}>
                                    <div onClick={() => { 
                                    setPopup({name:data.name,age:data.age,gender:data.gender,phone:data.phone,email:data.email,address:data.address})
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
                    <h2>Customer Details</h2>
                    <div>
                            <input type='text' value={popup.name} name='name' onChange={handleChange}/> 
                            <input type='number' value={popup.age} name='age' onChange={handleChange} min={1}/> 
                            <input type='text' value={popup.gender} name='gender' onChange={handleChange}/> 
                            <input type='text' value={popup.phone} name='phone'onChange={handleChange}/>
                            <input type='text' value={popup.email} name='email'/>
                            <input type='text' value={popup.address} name='address' onChange={handleChange}/>

 

                        <button onClick={() =>{
                            setDisplayPopup("none")
                        }} style={{alignSelf:"center"}}>Okay</button>

                        <button onClick={() =>{
                            const newData = custData.map((data) => {
                                if (data.email === popup.email){
                                    return popup
                                }
                                else{
                                    return data
                                }

                            })
                            setCustData(newData)
                        }}></button>
                    </div>
                   
                </div>

                
            </div>
        )
    }
    