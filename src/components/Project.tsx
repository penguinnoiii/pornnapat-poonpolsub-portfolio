export default function Project() {
  return (
    <>
      <div
        id="project"
        className="flex flex-col h-screen justify-center items-center max-md:mt-32"
      >
        <div className="flex flex-col justify-center items-center md:gap-10">
          <h1 className="text-5xl font-semibold lg:text-7xl">Project</h1>
          <div className="flex flex-col md:flex-row gap-10 p-10 w-full lg:max-w-7xl lg:mx-auto">
            <div className="bg-[#EDEDED] p-5 rounded-md shadow-lg flex justify-normal gap-6 items-center md:flex-col">
              <img
                className="md:hidden w-1/2"
                src="/Dev Finder Mobile.png"
                alt="Dev Finder Picture"
              />
              <img
                className="hidden md:flex md:w-full"
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
            <div className="bg-[#EDEDED] p-5 rounded-md shadow-lg flex justify-normal gap-6 items-center md:flex-col">
              <img
                className="md:hidden w-1/2"
                src="/Contact Form Mobile.png"
                alt="Contact Form Picture"
              />
              <img
                className="hidden md:flex md:w-full"
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
            <div className="bg-[#EDEDED] p-5 rounded-md shadow-lg flex justify-normal gap-6 items-center md:flex-col">
              <img
                className="md:hidden w-1/2"
                src="/Blackjack Game Mobile.png"
                alt="Blackjack Game Picture"
              />
              <img
                className="hidden md:flex md:w-full"
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
