import { myProps } from './assets/types';
import CustomerTable from './CustomerTable';


  export const Task2 = (props:myProps
    ) => {

        return(
            <div style={{display:'flex', height:"100vh", width:"100vw", justifyContent:"center", alignItems:"center"}}>
                <div>
                    <h1 >Customers</h1>
                    <CustomerTable customerData={props.customerData} />

                </div>
            </div>
        )
    }
    