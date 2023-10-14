
import { myProps } from '../components/types/types';
import CustomerTable from '../components/assets/CustomerTable';


  export const Task = (props:myProps
    ) => {


        return(
            <div style={{display:'flex',width:"100vw", height:"100vh",justifyContent:"center", alignItems:"center"}}>

                <div >
                    <h1>Customers</h1>
                    <CustomerTable customerData={props.customerData}/>
                </div>
                
                
            </div>
        )
    }
    