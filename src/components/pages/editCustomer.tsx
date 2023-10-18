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
            <div className="pl-[6%] pr-[5%] py-0">
                    
                <CustomerForm email={email} isUpdate={true}/>

            </div>
        </div>
    )

}

export default EditCustomer