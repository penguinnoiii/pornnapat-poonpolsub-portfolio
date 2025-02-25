export default function Skills() {
    return (
        <>
            <div id="skills" className="flex flex-col h-screen justify-center items-center">
                <div className="container mx-auto px-8 flex flex-col justify-center items-center md:gap-10">
                    <h1 className="text-4xl font-semibold md:text-6xl lg:text-7xl">Skills & Tools</h1>
                    <div className="grid grid-cols-3 gap-8 mt-10 [&>img]:w-20 md:hidden">
                        <img src="/HTML.png" alt="HTML" />
                        <img src="/Css.png" alt="Css" />
                        <img src="/JS.png" alt="JS" />
                        <img src="/Tailwind.png" alt="Tailwind" />
                        <img src="/React.png" alt="React" />
                        <img src="/Git.png" alt="Git" />
                        <img src="/Github(2).png" alt="GitHub" />
                        <img src="/Python.png" alt="Python" />
                        <img src="/Figma.png" alt="Figma" />
                        <img className="col-end-3" src="/SQL.png" alt="SQL" />
                    </div>
                    <div className="hidden md:grid grid-cols-5 gap-20 mt-10 [&>img]:w-25 [&>img]:max-h-34">
                        <img src="/HTML.png" alt="HTML" />
                        <img src="/Css.png" alt="Css" />
                        <img src="/JS.png" alt="JS" />
                        <img src="/Tailwind.png" alt="Tailwind" />
                        <img src="/React.png" alt="React" />
                        <img src="/Git.png" alt="Git" />
                        <img src="/Github(2).png" alt="GitHub" />
                        <img src="/Python.png" alt="Python" />
                        <img src="/Figma.png" alt="Figma" />
                        <img src="/SQL.png" alt="SQL" />
                    </div>
                </div>
            </div>
        </>
    )
}