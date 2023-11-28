export default function About() {
  const config = [
    {
      num: "01",
      desc: "We develop innovative products, systems and services",
    },
    {
      num: "02",
      desc: "Next we build teams to scale them into companies",
    },
    {
      num: "03",
      desc: "Each startup solving one problem at a time",
    },
  ];

  return (
    <main className="container flex flex-col w-full">
      <div className="flex justify-center bg-background">
        <div className=" flex flex-col relative w-full px-8 py-20 md:p-36 ">
          <img
            alt="question-mark"
            src="assets/question-mark.png"
            className="absolute top-2 right-2 md:top-28 md:right-28 w-20"
          />

          <h1 className="text-3xl md:text-5xl">Who we are</h1>
          <p className="text-xl md:text-2xl text-secondary mt-8 mb-24">
            We create products that have innovation and technology at their
            core.
            <br />
            We value working with talented people that understand the
            possibilities of today.
          </p>

          <div className="flex flex-wrap">
            {config.map((item) => (
              <div
                key={item.num}
                className="w-full md:w-1/3 text-2xl md:text-3xl"
              >
                <h1 className="text-secondary">{item.num}</h1>
                <hr className="w-16 my-4" />
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center relative w-full h-96">
        <div className="flex items-end">
          <img alt="thumb-left" src="assets/thumb-left.png" />
          <h1 className="text-2xl md:text-4xl md:mx-8 text-secondary text-center">
            We love solving problems!
          </h1>
          <img alt="thumb-right" src="assets/thumb-right.png" />
        </div>

        <img
          alt="man"
          src="assets/man.png"
          className="hidden md:block absolute top-1/2 right-0 md:right-36 -translate-y-1/2"
        />
      </div>
    </main>
  );
}
