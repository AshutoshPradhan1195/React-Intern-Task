import { Counter } from "../assets/Counter";
import { NavigationBar } from "../assets/NavigationBar";



const Home = () => {
    
    return(
        <>
            <NavigationBar/>

            <div style={{marginLeft:"5%"}}>
                <h1>Hello React</h1>
                <Counter/>
            </div>


        </>
    )
}

export default Home;