import { useContext } from "react";
import { Counter } from "../assets/Counter";
import { NavigationBar } from "../assets/NavigationBar";
import { ThemeContext } from "../themeProvider";



const Home = () => {



    return(
        <div style={{}}>
            <NavigationBar/>

            <div style={{marginLeft:"5%"}}>
                <h2>Hello React</h2>
                <Counter/>
            </div>


        </div>
    )
}

export default Home;