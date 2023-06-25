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
  }, []);

  const onSubmit = (e: any) => {
    handleSubmit(e);
    const elem = document.querySelector(".message-box");
    if (elem) {
      elem.scrollTop = elem.scrollHeight;
    }
  };

  return (
    <section id="chat">
      <div className="h-[500px] mb-10 font-lato bg-white md:container md:mt-5 md:px-10 md:pt-10 md:text-center md:mx-auto border-t-3 border-t-lime-900">
        <h1 className="text-2xl font-bold text-center mb-4 md:text-6xl ">
          Chat
        </h1>

        <form onSubmit={onSubmit} className="mb-4">
          <input
            value={input}
            placeholder="มีอะไรจะถามแตมไหม?"
            onChange={handleInputChange}
            className="w-full focus:outline-none h-10 p-4  border-b-2 rounded-sm border-b-green-500"
          />
        </form>

        <div className="message-box h-[300px] mb-10 overflow-scroll">
          {messages.map((m) => {
            if (m.role === "assistant") {
              return (
                <div
                  key={m.id}
                  className="flex justify-start items-center mb-4 text-left"
                >
                  <div className="flex items-center">
                    <Image
                      src="/hero/stamp.png"
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
                <div className="rounded-full mr-5">You:</div>{" "}
                <div className="bg-slate-200 max-w-xl p-4 rounded-md">
                  {m.content}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
