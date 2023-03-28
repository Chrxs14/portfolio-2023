import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#242424] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/659cf2d3-6367-46da-92f7-81b432de79e5"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ad5c5c] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Envíe el formulario a continuación.
          </p>
        </div>
        <input
          className="bg-[#dddddd] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#dddddd]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#dddddd] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-[#ad5c5c] hover:border-[#ad5c5c] px-4 py-3 my-8 mx-auto flex items-center"
        >
          Enviar!
        </button>
      </form>
    </div>
  );
};
