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
      <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-4 mx-auto px-4 lg:px-10 pt-20 lg:pt-28">
        <div className="max-w-3xl lg:max-w-lg w-full">
          <p className="md:text-lg mb-2">WELCOME TO CONCIREZ</p>
          <h1 className="text-4xl md:text-big font-medium leading-normal font-atyp">
            Discover Exclusive Dining Experiences with Concirez
          </h1>
        </div>
        <div className="max-w-lg lg:max-w-[458px] w-full">
          <p className="md:text-lg mb-5">
          Experience the finest restaurants in the world, hassle-free. Sign up now!
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};
