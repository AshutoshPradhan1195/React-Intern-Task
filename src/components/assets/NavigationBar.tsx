import { useLocation, useNavigate } from "react-router-dom";
import { BiSun, BiMoon } from "react-icons/bi"
import { useBearStore } from "../themeProvider";

export const NavigationBar = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname

    const theme = useBearStore((state) => state.lightTheme)
    const changeTheme = useBearStore((state) => state.setTheme)

    const isLocation = (path:string) => {
        return location ===path;
    }

    document.body.style.color = theme? "black" : "white";
    document.body.style.backgroundColor = theme? "white" : "black";



    const themeChange = () => {
        changeTheme(!theme)
        console.log(theme)
    }
    return(
        <div >
            <div className="navElement">

                <div style={{display:"flex"}}>
                    <h1 style={isLocation("/")? {backgroundColor:"white", color:"rgb(35, 83, 255)"} : {}} onClick={() => {navigate("/")}}>Home</h1>
                    <h1 style={isLocation("/customerProfiles")? {backgroundColor:"white", color:"rgb(35, 83, 255)"} : {}} onClick={() => {navigate("/customerProfiles")}}>Customer</h1>
                </div>
                
                <div>
                    <button onClick={() => themeChange()} style={theme? {backgroundColor: "white", color:"black"} : {backgroundColor:"black", color:"white"}} className="themeBtn">
                        <span>
                            {theme? <BiSun className="btnThemeIcon"/> : <BiMoon className="btnThemeIcon"/>}
                        </span>
                    </button>
                </div>
                
            </div>
            <hr color= {theme? "black" : "white"} style={{width:"96%", height:"1px", border:"0"}} />
        </div>
    )
}
