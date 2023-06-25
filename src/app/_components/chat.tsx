"use client";

import { useChat } from "ai/react";

import Image from "next/image";
import { useEffect } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  useEffect(() => {
    const elem = document.querySelector(".message-box");
    if (elem) {
      elem.scrollTop = elem.scrollHeight;
    }
  }, [messages]);

  return (
    <section id="chat">
      <div className="h-[500px] bg-white mx-2 mb-5 pt-5 md:h-[600px] md:px-12 md:pt-14 md:text-center md:mx-auto lg:h-[800px]">
        <h1 className="text-2xl font-bold text-center mb-10 md:text-6xl ">
          CHAT
        </h1>

        <div className="message-box h-[300px] mb-10 overflow-scroll p-4 border border-green-500 md:h-[500px]">
          {messages.map((m) => {
            if (m.role === "assistant") {
              return (
                <div
                  key={m.id}
                  className="flex justify-start items-center mb-4 text-left"
                >
                  <div className="flex items-center">
                    <Image
                      src="/chat/mint.png"
                      alt="stamp"
                      className="rounded-full mr-5"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="bg-slate-200 max-w-xl p-4 rounded-md">
                    {m.content}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={m.id}
                className="flex justify-end items-center mb-4 text-right"
              >
                <div className="bg-slate-200 max-w-xl p-4 rounded-md">
                  {m.content}{" "}
                </div>
                <div className="rounded-full ml-5 font-bold">You</div>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            value={input}
            placeholder="Ask me something?"
            onChange={handleInputChange}
            className="w-full focus:outline-none h-10 p-4  border-b-2 rounded-sm border-b-green-500"
          />
        </form>
      </div>
    </section>
  );
}
