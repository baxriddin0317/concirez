import Image from "next/image";
import React from "react";
import Form from "./common/Form";

export const Hero = () => {
  return (
    <section className="relative">
      <Image
        className="absolute -z-20 -top-28 right-0"
        src={"/img/vector.svg"}
        width={770}
        height={536}
        alt=""
      />
      <div className="max-w-7xl flex flex-col items-center justify-between text-center lg:text-left gap-4 mx-auto px-4 pt-20 lg:pt-28">
        <div className="max-w-3xl w-full text-center">
          <p className="md:text-lg mb-6">WELCOME TO CONCIREZ</p>
          <h1 className="text-4xl md:text-6xl font-medium leading-normal font-atyp sm:px-4 lg:px-8">
            Discover Exclusive Dining Experiences with <span className="inline-block text-brand-black relative before:absolute before:w-full before:h-16 before:left-0 before:top-1/2 before:-translate-y-1/2 before:-z-10 before:bg-brand-orange">Concirez</span>
          </h1>
        </div>
        <div className="max-w-[458px] w-full">
          <p className="md:text-lg mb-8 text-center">
          Experience the finest restaurants in the world, hassle-free. Sign up now!
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};
