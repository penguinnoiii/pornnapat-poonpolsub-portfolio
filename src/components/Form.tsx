import { useForm } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("mbldnryj");

  if (state.submitting) {
    return <p>Submitting...</p>;
  }

  if (state.succeeded) {
    return <p>Thank you for your message!</p>;
  }
  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="text-4xl font-semibold">Contact Box</h1>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mbldnryj"
          method="POST"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-black border-b-2 border-white text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-black border-b-2 border-white text-white outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="bg-black border-b-2 border-white text-white outline-none"
          ></textarea>
          <button type="submit" className="bg-white text-black py-2 px-5">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
