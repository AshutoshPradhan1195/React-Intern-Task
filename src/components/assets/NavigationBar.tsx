import { useLocation, useNavigate } from "react-router-dom";

export const NavigationBar = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname


    const isLocation = (path:string) => {
        return location ===path;
    }
    return(
        <div >
            <div style={styles.navBarStyle} className="navElement">
                <h1 style={isLocation("/")? {backgroundColor:"white", color:"black"} : {}} onClick={() => {navigate("/")}}>Home</h1>
                <h1 style={isLocation("/customerProfiles")? {backgroundColor:"white", color:"black"} : {}} onClick={() => {navigate("/customerProfiles")}}>Customer</h1>
            </div>
            <hr color="white" style={{width:"90%", height:"1px", border:"0"}} />

            
        </div>
    )
}

const styles = {
    navBarStyle:{
        display:"flex", 
        height:"60px", 
        alignItems:"center", 
        width:"15%", 
        justifyContent:"space-between", 
        paddingLeft:"5%"
    }
}