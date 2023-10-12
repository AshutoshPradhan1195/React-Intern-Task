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

  export const Task4 = (props:myProps
    ) => {

        //handle onChange for input fields
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPopupData({...popupData, [event.target.name]:event.target.value});
        };
        
        const [custData, setCustData] = useState(props.customerData)
        const [popupData, setPopupData] = useState({name:"",age:0,gender:"",phone:"",email:"",address:""})
        const [displayPopup, setDisplayPopup] = useState("none")
        const [displayPopupEdit, setDisplayPopupEdit] = useState("none")
        const [displayPopupCreate, setDisplayPopupCreate] = useState("none")
        const [readOnly, setReadOnly] = useState(true) //to set email readonly true for editing and false for adding new customer
 
        function updateBtn(){
            const newData = custData.map((data) => {
                if (data.email === popupData.email){
                    return popupData
                }
                else{
                    return data
                }
            })
            setCustData(newData)
        }

        function showPopup(type:string){
            if(type === "Create"){
                setDisplayPopup("block")
                setDisplayPopupEdit("none")
                setDisplayPopupCreate("block")
            }
            else{
                setDisplayPopup("block")
                setDisplayPopupEdit("block")
                setDisplayPopupCreate("none")
            }

        }

        return(
            <div style={{display:'flex'}}>
                <table className='customerTable'>
                    <thead>
                        <tr>
                             {/* 
                                onclick to add customers, when pressed popup box appears which is the same as edit popup box but edit related  
                                buttons are hidden and popup field values are set to empty could not figure out how to set age to blank instead of 0
                             */}
                            <th onClick={() => {
                                    setPopupData({name:"",age:Number(""),gender:"",phone:"",email:"",address:""})
                                    setReadOnly(false)
                                    showPopup("Create")
                                }} className='addCustomers'>
                                Customers+

                               

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {custData.map((data) => (
                            <tr key={data.email} >
                                <td style={{display:"flex", justifyContent:"space-between", padding:"0px", alignItems:"center"}}>

                                    {/* Table row data, onclick opens customer details which can be edited, email cannot be updated as it is a key value */}

                                    <div onClick={() => { 
                                        setPopupData({name:data.name,age:data.age,gender:data.gender,phone:data.phone,email:data.email,address:data.address})
                                        setReadOnly(true)
                                        showPopup("")
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
                    <div style={{display:"flex", flexDirection:"column", padding:"15px"}}>

                        <h2>Customer Details</h2>

                        <input type='text' value={popupData.name} name='name' onChange={handleChange} placeholder='Full Name'/> 
                        <input type='number' value={popupData.age} name='age' onChange={handleChange} min={1} placeholder='Age'/> 
                        <input type='text' value={popupData.gender} name='gender' onChange={handleChange} placeholder='Gender'/> 
                        <input type='text' value={popupData.phone} name='phone'onChange={handleChange} placeholder='Phone Number'/>
                        <input type='text' value={popupData.email} name='email' placeholder='Email' onChange={handleChange} readOnly={readOnly}/>
                        <input type='text' value={popupData.address} name='address' onChange={handleChange} placeholder='Address'/>

                        <div style={{display:"flex", justifyContent:"center", gap:"20px"}} >
                            <button onClick={() =>{updateBtn()}} style={{display:displayPopupEdit}}>
                                Update
                            </button>

                            <button onClick={() =>{ const newData = custData.filter(data => data.email !== popupData.email)
                                setCustData(newData)
                                setDisplayPopup("none")
                            }} style={{display:displayPopupEdit}}>
                                Delete
                            </button>

                            <button onClick={() =>{custData.push(popupData); setDisplayPopup("none")}} style={{display:displayPopupCreate}}>
                                Create
                            </button>

                            <button onClick={() =>{setDisplayPopup("none")}}>
                                Cancel
                            </button>

                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
    