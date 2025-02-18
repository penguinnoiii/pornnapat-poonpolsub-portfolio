import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex justify-between items-center p-12">
          <img src="/src/assets/PG.png" alt="PG. Logo" />
          <div className="flex space-x-7">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>SKILLS</p>
            <p>EXPERIENCE</p>
            <p>CONTACT</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col justify-center items-center h-full  gap-12">
          <div className="flex flex-col justify-center items-start gap-12">
            <h1 className="text-7xl font-semibold">PORNNAPAT POONPOLSUB</h1>
            <div className="flex justify-between items-stretch gap-5">
              <div className="flex flex-col justify-between items-start gap-5">
                <p className="text-[1rem] w-xl">
                  I am a talented web developer with expertise in multiple programming
                  languages and frameworks. Passionate about coding, she has
                  experience in front-end and back-end development, game development,
                  and AI. Always eager to learn, she builds innovative projects,
                  solves complex problems, and embraces new technologies to push the
                  boundaries of her skills.
                </p>
                <div className="flex gap-6">
                  <a href="https://discord.gg/kAUgG7uU"><img src="/src/assets/Discord.png" alt="Discord Logo" /></a>
                  <a href="https://www.linkedin.com/in/pornnapat-poonpolsub/"><img src="/src/assets/Linkedin.png" alt="Linkedin Logo" /></a>
                  <a href="https://github.com/penguinnoiii"><img src="/src/assets/Github.png" alt="Github Logo" /></a>
                  <a href="https://www.instagram.com/pnst_pt/"><img src="/src/assets/Instagram.png" alt="Instagram Logo" /></a>
                </div>
              </div>
              <img src="/src/assets/image 1.png" alt="It's me!!!" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
