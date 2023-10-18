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

                <div className='flex'>
                    <h1 {...isLocation("/")? {className:"bg-[white] text-[rgb(35,83,255)]"} : {}} onClick={() => {navigate("/")}}>Home</h1>
                    <h1 {...isLocation("/customerProfiles")? {className:"bg-[white] text-[rgb(35,83,255)]"} : {}} onClick={() => {navigate("/customerProfiles")}}>Customer</h1>
                </div>
                
                <div>
                    <button onClick={() => themeChange()}  {...theme? {className:"bg-[white] text-[black] themeBtn"}: {className:"bg-[black] text-[white] themeBtn"}} >
                        <span>
                            {theme? <BiSun className="btnThemeIcon"/> : <BiMoon className="btnThemeIcon"/>}
                        </span>
                    </button>
                </div>
                
            </div>
            <hr color= {theme? "black" : "white"} className='w-[96%] h-px border-0' />
        </div>
    )
}
