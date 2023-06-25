export default function Hero() {
  return (
    <section id="hero" className="h-max">
      <div className="flex flex-col bg-white pb-5 md:flex-row md:items-center md:px-0 md:pl-0 md:pb-0 lg:pl-12">
        <div className="pl-4 text-center md:text-left md:pl-0 md:w-1/2 md:ml-10">
          <div className="flex justify-center items-center mb-2 font-bold mt-8 md:justify-start">
            <h1 className="text-3xl md:text-5xl">Hi! I Am</h1>
            <p className="flex items-center text-m bg-[#325527] text-white text-center hidden rounded-full p-3 ml-4 md:block md:text-xl">
              Policy Analyst
            </p>
          </div>
          <h1 className="text-3xl font-bold md:text-5xl ">Isariyaporn Kanta</h1>
          <p className="my-6">
            Policy analyst @ Ministry of Public Health, Thailand
          </p>
          <a
            href="https://www.linkedin.com/in/isariyaporn-kanta-6b2865243/"
            target="_blank"
          >
            <button className="bg-green-500 text-white p-3 hover:bg-green-600 mb-10">
              Contact Me
            </button>
          </a>
        </div>
        <div className="h-[250px] md:h-[400px] md:w-1/2 lg:h-[700px]">
          <div className="hero-image bg-no-repeat bg-contain h-full bg-center md:bg-cover"></div>
        </div>
      </div>
    </section>
  );
}
