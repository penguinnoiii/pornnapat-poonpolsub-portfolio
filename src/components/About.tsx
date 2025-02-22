export default function About() {
    
  return (
    <>
      <div id="about" className="flex flex-col h-screen gap-12 justify-center items-center">
        <div className="flex flex-col p-9 gap-7 max-md:max-w-xl md:max-w-4xl md:p-10 lg:max-w-[70rem]">
            <h1 className="text-4xl font-semibold lg:text-6xl">Hello!!!</h1>
            <div className="flex flex-col gap-5 lg:text-[1.2rem]">
                <p>
                  I have been fascinated by coding since I was a kid, and my passion led
                  me to learn many things on my own. This self-learning ability is
                  essential in the programming field, where technology constantly
                  evolves.
                </p>
                <p>
                  Over the years, I have explored various areas of software development.
                  I created a game using Unity, a powerful game engine, which helped me
                  understand game physics, scripting, and UI design. In data science, I
                  worked with SQL as my primary language to manage databases—creating,
                  reading, updating, and deleting data efficiently.
                </p>
                <p>
                  Web development is another area I enjoy. I have built websites using
                  HTML, CSS, and JavaScript and explored modern frameworks like React
                  and Tailwind CSS to create responsive and dynamic applications. Each
                  of these experiences has strengthened my problem-solving skills and
                  deepened my understanding of software development. I look forward to
                  expanding my knowledge and tackling even more challenging projects in
                  the future.
                </p>
            </div>
        </div>
      </div>
    </>
  );
}
