export default function Project() {
  return (
    <>
      <div
        id="project"
        className="flex flex-col h-screen justify-center items-center"
      >
        <div className="container mx-auto flex flex-col justify-center items-center md:gap-10">
          <h1 className="text-5xl font-semibold lg:text-7xl">Project</h1>
          <div className="flex flex-col md:flex-row gap-10 max-w-[500px] p-10 [&>div]:[&>img]:w-1/2 [&>div]:bg-[#EDEDED]  [&>div]:rounded-md [&>div]:p-5 [&>div]:shadow-lg md:min-w-[55rem] md:h-[30rem] md:[&>div]:[&>img]:w-full lg:min-w-[1280px] lg:min-h-[40rem]">
            <div className="flex justify-normal gap-6 items-center md:flex-col">
              <img
                className="md:hidden"
                src="/Dev Finder Mobile.png"
                alt="Dev Finder Picture"
              />
              <img
                className="hidden md:flex"
                src="/Dev Finder.png"
                alt="Dev Finder"
              />
              <div className="flex flex-col gap-1 w-full md:gap-3">
                <h3 className="text-2xl">Dev Finder</h3>
                <div className="grid grid-cols-2 gap-1 md:gap-4 md:[&>p]:rounded-full lg:gap-x-10 lg:[&>p]:p-3 [&>p]:text-sm [&>p]:p-1 [&>p]:rounded-md [&>p]:text-center ">
                  <p className="bg-[#ECD4A7]">HTML</p>
                  <p className="bg-[#B9DBF3]">CSS</p>
                  <p className="bg-[#C3D1FF]">MUI</p>
                  <p className="bg-[#FDD9B9]">API</p>
                </div>
              </div>
            </div>
            <div className="flex justify-normal gap-6 items-center md:flex-col">
              <img
                className="md:hidden"
                src="/Contact Form Mobile.png"
                alt="Contact Form Picture"
              />
              <img
                className="hidden md:flex"
                src="/Contact Form.png"
                alt="Contact Form"
              />
              <div className="flex flex-col gap-1 w-full md:gap-3">
                <h3 className="text-2xl">Contact Form</h3>
                <div className="grid grid-cols-2 gap-1 md:gap-4 md:[&>p]:rounded-full lg:gap-x-10 lg:[&>p]:p-3 [&>p]:text-sm [&>p]:p-1 [&>p]:rounded-md [&>p]:text-center ">
                  <p className="bg-[#ECD4A7]">HTML</p>
                  <p className="bg-[#B9F6F6]">Tailwind</p>
                  <p className="bg-[#FFFABF]">JS</p>
                </div>
              </div>
            </div>
            <div className="flex justify-normal gap-6 items-center md:flex-col">
              <img
                className="md:hidden"
                src="/Blackjack Game Mobile.png"
                alt="Blackjack Game Picture"
              />
              <img
                className="hidden md:flex"
                src="/BlackJack Game.png"
                alt="Blackjack Game"
              />
              <div className="flex flex-col gap-1 w-full md:gap-3">
                <h3 className="text-2xl">Blackjack Game</h3>
                <div className="grid grid-cols-2 gap-1 md:gap-4 md:[&>p]:rounded-full lg:gap-x-10 lg:[&>p]:p-3 [&>p]:text-sm [&>p]:p-1 [&>p]:rounded-md [&>p]:text-center ">
                  <p className="bg-[#FFFABF]">JS</p>
                  <p className="bg-[#F3C1C1]">Inquirer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
