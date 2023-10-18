import { useState } from "react";
import { NavigationBar } from "../assets/NavigationBar";
import { addCustomerData } from "./customerProfiles";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";
import { CustomerForm } from "../assets/CustomerForm";

const AddCustomer = () => {

    return(
        <div>
            <NavigationBar/>
            <div style={{padding:"0px 5% 0px 6%"}}>
                <CustomerForm email={null} isUpdate={false}/>
        </div>
        </div>
        
    )  
}

export default AddCustomer;