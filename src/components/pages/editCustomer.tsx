import { NavigationBar } from "../assets/NavigationBar"
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