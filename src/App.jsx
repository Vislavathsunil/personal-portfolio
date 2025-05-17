import React from "react";
import MyProfile from "./Components/MyProfile";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Bio from "./Components/Bio";
import Skills from "./Components/Skills";
import Exprience from "./Components/Exprience";
import Education from "./Components/Education";
import ConnectForm from "./Components/ConnectForm";
import Footer from "./Components/Footer";
import NewSkills from "./Components/NewSkills";
import Certificates from "./Components/Certificates";


function App() {
  return (
    <div>
      <div className="relative h-full overflow-y-auto antialiased   ">
        <div className="inset-0 bg-fixed bg-cover bg-center bg-img">
          <div className="relative z-10 flex flex-col items-center px-4 md:px-6 space-y-8 container mx-auto " >
            <MyProfile />
            <NavBar />
            <Bio />
            <NewSkills />
            <Projects />
            <Certificates />
            {/* <Skills /> */}
            <Exprience />
            <Education />
            <ConnectForm />
            <Footer />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
