import Head from "next/head";
import Image from "next/image";
import wallpaperImg from "../assets/img/nft-wallpaper.png";

export default function Landing({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>EventMaster</title>
        <meta
          name="description"
          content="Web3 ready ticketing and cashless payments"
        />
      </Head>
      <section className="py-12">
        <div className="w-full md:w-8/12 text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="text-indigo-600">Ticketing 101</span>
            <br />
            <span>Web3 ready ticketing and cashless payments</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Engage with your favorite artists/fans from the concert and even
            after!
          </p>
        </div>
        <div className="rounded-full lg:absolute lg:inset-y-25 lg:right-0 lg:w-2/5 bg-black">
          <Image
            className="rounded-full h-auto w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            alt="Landing page image"
            src={wallpaperImg}
          />
        </div>
      </section>
      <section className="py-12">{children}</section>
    </div>
  );
}
