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
      <section
        className="py-12
      "
      >
        <div className="w-full md:w-8/12 text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="text-indigo-600">Ticketing 101</span>
            <br />
            <span>
              Web3 ready ticketing <br />
              and cashless payments
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Engage with your favorite artists/fans from the concert and even
            after!
          </p>
        </div>
        <div
          className="rounded-full lg:absolute lg:inset-y-20 lg:right-5 lg:w-2/5 mt-12
        "
        >
          <Image
            className="rounded-full h-auto w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            alt="Landing page image"
            src={wallpaperImg}
          />
        </div>
      </section>
      <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 ">
          <div className=" p-6 bg-gray-50">
            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
              Safe Transactions
            </p>
            <p className=" font-normal text-base leading-6 text-gray-600 my-4">
              Our all outlets have industry-leading health precautions
            </p>
            <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
              Learn More
            </a>
          </div>

          <div className=" p-6 bg-gray-50">
            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
              No more scalpers
            </p>
            <p className=" font-normal text-base leading-6 text-gray-600 my-4">
              Contact your local outlet to book a personal appointment
            </p>
            <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
              Learn More
            </a>
          </div>

          <div className=" p-6 bg-gray-50">
            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
              Next Level Connexion
            </p>
            <p className=" font-normal text-base leading-6 text-gray-600 my-4">
              Continue the conversation when the event ends!
            </p>
            <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <section className="py-12">{children}</section>
    </div>
  );
}
