export default function Values() {
  const config = [
    {
      num: "01. Innovation",
      desc: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    },
    {
      num: "02. People",
      desc: "Talent is what enable us to create great companies.",
    },
  ];

  return (
    <div className="flex justify-center w-full bg-background">
      <div className="container flex flex-col relative w-full p-8 md:p-36">
        <img
          alt="hint"
          src="assets/hint.png"
          className="absolute top-28 right-28 w-20"
        />

        <h1 className="text-3xl md:text-5xl mb-28">Our core values</h1>

        <div className="flex flex-wrap">
          {config.map((item) => (
            <div
              key={item.num}
              className="w-full md:w-1/2 text-2xl md:text-3xl p-6"
            >
              <h1 className="text-secondary">{item.num}</h1>
              <hr className="w-16 my-4" />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
