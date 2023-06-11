export default function MainMenu() {
  return (
    <section className="font-lato shadow-xl mx-0 md:container  md:mx-auto">
      <div className="flex flex-col px-10 bg-white mt-20 md:items-center md:rounded-lg md:flex-row md:px-0">
        <div className="md:w-1/2 md:ml-10">
          <div className="flex items-center mb-2 font-bold mt-8 ">
            <h1 className="text-2xl md:text-6xl">Hi! I Am</h1>
            <p className="flex items-center text-m bg-green-200 rounded-full p-3 ml-4 md:text-xl">
              Policy Analyst
            </p>
          </div>
          <h1 className="text-2xl font-bold md:text-6xl ">Isariyaporn Kanta</h1>
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
        <div className="h-[300px] mb-5 md:w-1/2 md:h-[600px] md:mb-0">
          <div className="hero-image bg-no-repeat bg-contain w-full h-full bg-center md:rounded-r-lg md:bg-cover"></div>
        </div>
      </div>
    </section>
  );
}
