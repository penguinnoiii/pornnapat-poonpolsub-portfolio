import Form from "./Form.tsx";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="bg-black text-white text-left p-20 flex flex-col gap-20 md:grid md:grid-cols-2 max-md:mt-32"
      >
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold">Get In Touch</h1>
          <div className="flex flex-col gap-5 [&>div]:[&>img]:w-7">
            <div className="flex items-center gap-4 font-light">
              <img src="/Phone_gray.png" alt="Phone Icon" />
              <p>+66 92 571 8755</p>
            </div>
            <div className="flex items-center gap-4 font-light">
              <img src="/Instagram_gray.png" alt="Phone Icon" />
              <p>pnst_pt</p>
            </div>
            <div className="flex items-center gap-4 font-light">
              <img src="/Facebook_gray.png" alt="Phone Icon" />
              <p>Pornnapat Poonpolsub</p>
            </div>
            <div className="flex items-center gap-4 font-light">
              <img src="/Linkedin_gray.png" alt="Phone Icon" />
              <p>Pornnapat Poonpolsub</p>
            </div>
            <div className="flex items-center gap-4 font-light">
              <img src="/Discord_gray.png" alt="Phone Icon" />
              <p>pnst</p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}
