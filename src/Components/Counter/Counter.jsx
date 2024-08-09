import CountUp from "react-countup";


const Counter = () => {
    return (
        <div className="flex flex-row my-10" >
             <div className=" bg-gradient-to-r from-purple-500 to-indigo-600 shadow-2xl rounded-lg text-center text-white w-fit p-4 mx-auto my-4 transform transition duration-500 hover:scale-105">
            <div className="">
             <h2 className="text-xl md:text-2xl font-bold mb-4">Total Blogs</h2>
          <CountUp
       start={0}
       end={140}
       duration={3.5}
       className="text-4xl font-bold"
    />
  </div>
</div>


<div className=" bg-gradient-to-r from-purple-500 to-indigo-600 shadow-2xl rounded-lg text-center text-white w-fit p-4 mx-auto my-4 transform transition duration-500 hover:scale-105">
           
             <h2 className="text-xl  font-bold mb-4">Total User</h2>
          <CountUp
       start={0}
       end={137}
       duration={4}
       className="text-xl lg:text-4xl font-bold"
    />

</div>
       
            
        </div>
    );
};

export default Counter;