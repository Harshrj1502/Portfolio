import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import Wbutton from "../../Components/Button/Wbutton";
const Home = () => {
  return (
    <div className="bg-secondary outline-none" id="home">
      {/* <div className="bg-primary  left-[35vw] top-[-70px] h-[140px] w-[140px] rounded-full absolute"></div> */}
      <Navbar />
      <main className="flex">
        <div className="w-[50vw] flex justify-center flex-col px-20 gap-5">
        <div className="container flex flex-col gap-5">
          <h1 className="font-light text-xl">Web Developer</h1>
          <p className="text-5xl font-bold">Hi There, I'm </p>
          <p className="text-5xl font-bold text-primary">Harsh Raj </p>
          <p className="text-base font-light">
            Welcome to my portfolio of captivating digital experiences. Explore
            my work and let's create something extraordinary together.
          </p>
        </div>
        <div className="flex gap-5">
        {/* <Button text={"About Me "} /> */}
        <a href="#about"><Wbutton text={"About Me"}/></a>
        </div> 
        </div>   
       <div className="w-[50vw] flex ">
       <img src="./src/assets/WhatsApp_Image_2024-05-25_at_15.51.09-removebg-preview-2.png" alt="photo" className='photo'   / >
       </div>
      </main>
    </div>
  );
};

export default Home;
