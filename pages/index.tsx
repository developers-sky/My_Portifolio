import type { NextPage } from "next";

import { Header, About, Projects, Skills, Contact, Spark} from "../components";
import spark from "../components/Spark/Spark.component";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Spark/>
      <Contact />
    </div>
  );
};

export default Home;
