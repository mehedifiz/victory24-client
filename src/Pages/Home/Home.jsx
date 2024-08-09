import Blogs from "../../Components/fetchAllCoordinators/CoordinatorCard";
import Counter from "../../Components/Counter/Counter";
import Hero from "../../Components/Hero/Hero";
import CoordinatorsList from "../../Components/fetchAllCoordinators/CoordinatorsList";
import About from "../../Components/about /About";
import Background from "../../Components/about /Background";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            
            {/* <Counter></Counter> */}
            <About></About>
            <Background></Background>

            <CoordinatorsList></CoordinatorsList>
            
            <Blogs></Blogs>
          
        </div>
    );
};

export default Home;