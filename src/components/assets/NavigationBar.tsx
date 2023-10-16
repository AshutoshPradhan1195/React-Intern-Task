import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../themeProvider";
import { BiSun, BiMoon } from "react-icons/bi"

export const NavigationBar = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname

    const theme = useContext(ThemeContext)
    const isLocation = (path:string) => {
        return location ===path;
    }

    document.body.style.color = theme?.lightTheme ? "black" : "white";
    document.body.style.backgroundColor = theme?.lightTheme ? "white" : "black";



    const themeChange = () => {
        theme?.setLightTheme(!theme.lightTheme)
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
                    <button onClick={() => themeChange()} style={theme?.lightTheme? {backgroundColor: "white", color:"black"} : {backgroundColor:"black", color:"white"}} className="themeBtn">
                        <span>
                            {theme?.lightTheme ? <BiSun className="btnThemeIcon"/> : <BiMoon className="btnThemeIcon"/>}
                        </span>
                    </button>
                </div>
                
            </div>
            <hr color= {theme?.lightTheme ? "black" : "white"} style={{width:"96%", height:"1px", border:"0"}} />
        </div>
    )
}
