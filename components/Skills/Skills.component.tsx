import { BsArrowRightShort } from "../Icons";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-black" id="skills">
      <p className="text-3xl font-bold text-black">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-zinc-800">
          <BsArrowRightShort size="30" />
          <span className="text-fuschia-800">TensorFlow</span>
          &nbsp;
          as my Main Ml/AI Framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-zinc-800">
          <BsArrowRightShort size="30" />
          <span className="text-blue-600">Python and Typescript </span>
          &nbsp;are my main languages
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-zinc-800">
          <BsArrowRightShort size="30" />
          <span className="text-red-700">Tailwind CSS </span>
          &nbsp;as my CSS framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-zinc-800">
          <BsArrowRightShort size="30" />
          <span className="text-green-700">Figma </span>
          &nbsp;as my designing tool
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-zinc-800">
          <BsArrowRightShort size="30" />
          <span className="text-amber-800">Express JS </span>
          &nbsp;as my API framework
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">javascript</span>,{" "}
        <span className="text-white">Go</span>,{" "}
        <span className="text-white">reactjs</span>,{" "}
        <span className="text-white">fastapi </span>{" "}
      </p>
    </div>
  );
};

export default Skills;
