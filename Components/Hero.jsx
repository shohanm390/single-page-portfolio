import Image from "next/image";
import image from '@/images/i.png'

const Hero = () => {
  return (
    <div className="mt-20 flex items-center">
      <div className="mx-52">
        <h1 className="lg:text-6xl">Nice to meet you!</h1>
        <h2 className="lg:text-7xl mt-2">
          I'm <span className="underline underline-offset-8 decoration-teal-500">Shohan</span>.
        </h2>
        <p className="lg:w-4/6 lg:mt-14">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          eligendi iste perspiciatis nesciunt veritatis, voluptas eum nam error
          necessitatibus ipsa?
        </p>
        <a href="#" className="block mt-20 text-xl underline underline-offset-8 decoration-teal-600 hover:-translate-y-2 duration-300 hover:text-white text-teal-400">Contact me</a>
      </div>
      <div>
    <Image src={image} className="w-3/6 opacity-60 contrast-125" alt="" />
      </div>
    </div>
  );
};

export default Hero;
