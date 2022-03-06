import type { NextPage } from "next";

import { Header, About, Projects, Skills, Contact, Spark} from "../components";
import spark from "../components/Spark/Spark.component";
import SpotifyCard from "../components/spotify.card";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Spark/>
      <Contact />

      <div className="flex justify-center">
        <SpotifyCard />
      </div>
    </div>
  );
};

export default Home;
