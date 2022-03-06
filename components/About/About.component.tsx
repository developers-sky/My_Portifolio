import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Icons";

const About = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Anurag</p>
        <p className="mt-1 text-lg text-gray-300">
   
          Ai Enthusiast, Blogger and a Student
        </p>

        <p className="mt-4 text-gray-400">
          Building Web apps, proficient in ML. Writing articles <br /> on
          my blog sometimes.
        </p>

        <Link href="https://medium.com/@anuragkumarsingh086" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Articles...
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
        <Link href="https://anurag-blog.vercel.app" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here goes my blog..
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link href="https://www.instagram.com/prof.freakenstein/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram? Dm me!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
        <p className="mt-4 text-white">
          Have a radical Day Ahead!!
        </p>
      </div>

      <div>
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
