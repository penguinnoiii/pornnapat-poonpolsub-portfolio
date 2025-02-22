export default function Home() {
  return (
    <>
      <div id="home" className="flex flex-col h-screen justify-center items-center">
        {" "}
        v
        <div className="flex flex-col items-center h-full gap-12 md:justify-center">
          <div className="flex flex-col justify-center items-start gap-6 md:w-screen md:p-10 lg:max-w-[90rem]">
            <img
              
              className="md:hidden mx-10 mt-40"
              src="/PORNNAPAT POONPOLSUB.png"
              alt="PORNNAPAT POONPOLSUB"
            />
            <img
              className="animate__heartBeat hidden md:flex max-lg:max-w-2xl px-8 lg:max-w-4xl"
              src="/PORNNAPAT POONPOLSUB (1).png"
              alt="PORNNAPAT POONPOLSUB"
            />
            <div className="flex flex-col items-stretch md:flex-row md:w-full md:justify-between">
              <div className="flex flex-col justify-between items-center gap-6 md:items-start max-lg:max-w-[25rem]">
                <p className="text-[1rem] w-screen text-left px-8 md:max-w-[30rem] lg:max-w-[40rem] lg:text-[1.2rem] max-lg:max-w-xl">
                  I am a talented web developer with expertise in multiple
                  programming languages and frameworks. Passionate about coding,
                  she has experience in front-end and back-end development, game
                  development, and AI. Always eager to learn, she builds
                  innovative projects, solves complex problems, and embraces new
                  technologies to push the boundaries of her skills.
                </p>
                <img
                  className="w-2/3 md:hidden"
                  src="/image 1.png"
                  alt="It's me!!!"
                />
                <div className="flex gap-6 [&>a]:w-7 items-baseline mb-15 md:px-10 lg:[&>a]:w-10">
                  <a href="https://discord.gg/kAUgG7uU">
                    <img src="/Discord.png" alt="Discord Logo" />
                  </a>
                  <a href="https://www.linkedin.com/in/pornnapat-poonpolsub/">
                    <img src="/Linkedin.png" alt="Linkedin Logo" />
                  </a>
                  <a href="https://github.com/penguinnoiii">
                    <img src="/Github.png" alt="Github Logo" />
                  </a>
                  <a href="https://www.instagram.com/pnst_pt/">
                    <img src="/Instagram.png" alt="Instagram Logo" />
                  </a>
                </div>
              </div>
              <img
                className="hidden md:flex"
                src="/image 1.png"
                alt="It's me!!!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
