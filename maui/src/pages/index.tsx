import type { NextPage } from "next";
import Layout from "@components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="MicroAuth" desc="Microservice Authentication">
      <main>
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Microservice Authentication
        </h1>
        <h2 className="text-3xl font-medium text-center sm:text-left">
          Made by: two idiots
        </h2>
        <div className="my-4" />
        <p>
          Trying to setup authentication microservices with the ORY suite,
          using:
        </p>
        <ul className="list-disc list-inside pl-4 my-2">
          <li>Kratos to handle authentication.</li>
          <li>Oathkeeper as a route decision engine.</li>
          <li>Traefik as a reverse proxy and load balancer.</li>
        </ul>
        <p>
          Since we are 2 experienced developers working on this project, we
          absolutely know what we are doing and do not need any help whatsoever.
          &nbsp;
          <span className="font-thin italic">
            (Just kidding, we are dead lost and need all the guidance possible)
          </span>
        </p>
      </main>
    </Layout>
  );
};

export default Home;
