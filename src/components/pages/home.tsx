import { Counter } from "../assets/Counter";
import { NavigationBar } from "../assets/NavigationBar";


const Home = () => {
    
    return(
        <div style={{}}>
            <NavigationBar/>

            <div className="pl-[6%] pr-[5%] py-0">
                <h2>Hello React</h2>
                <Counter/>
            </div>


        </div>
    )
}

export default Home;