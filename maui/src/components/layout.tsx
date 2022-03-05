import Head from "next/head";

interface IProps {
  title: string;
  desc: string;
}

const Layout: React.FC<IProps> = ({ children, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-4">
      <Head>
        <title key="title">{title}</title>
        <meta name="description" content={desc} key="desc" />
        <link rel="icon" href="/favicon.ico" key="icon" />
      </Head>

      <div className="max-w-3xl w-full overflow-hidden">
        <div className="my-8" />

        {children}

        <div className="my-8" />
      </div>
    </div>
  );
};

export default Layout;
