import type { NextPage } from "next";
import Layout from "@components/layout";

const Protected: NextPage = () => {
  return (
    <Layout
      title="MicroAuth - protected"
      desc="Microservice Authentication: protected page"
    >
      <main>
        <h1 className="text-4xl font-bold text-center sm:text-left">
          MicroAuth Protected Page
        </h1>
        <div className="my-4" />
        <p>
          This is a protected page. If the user is not authenticated yet,
          Traefik should redirect the user to login/signin with kratos in order
          to see it.
        </p>
      </main>
    </Layout>
  );
};

export default Protected;
