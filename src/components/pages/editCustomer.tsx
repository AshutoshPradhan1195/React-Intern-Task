import { useState } from "react"
import { customerData, deleteCustomerData, editCustomerData } from "./customerProfiles"
import { NavigationBar } from "../assets/NavigationBar"
import { useNavigate } from "react-router-dom"
import { Button, Space } from 'antd';
import { CustomerForm } from "../assets/CustomerForm";


const EditCustomer = () => {

    //getting email from url
    const searchParams = new URLSearchParams(window.location.search)
    const email = searchParams.get("email")

    console.log(email)
    return(
        <div>
            <NavigationBar/>
            <div style={{padding:"0px 5% 0px 6%"}}>
                    
                <CustomerForm email={email} isUpdate={true}/>

            </div>
        </div>
    )

}

export default EditCustomer