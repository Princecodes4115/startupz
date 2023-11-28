import Rocket from "../components/Rocket";

export default function Subscribe() {
  return (
    <main className="flex justify-center relative w-full bg-orange">
      <Rocket className="absolute bottom-0 right-36" />

      <div className="container p-4 md:p-20 z-10">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-3xl md:text-6xl">
            Are you ready to board this rocket ship?
          </h1>
          <p className="text-xl md:text-2xl my-6">
            Share your excitement with us.
          </p>

          <div className="flex flex-col justify-center items-center w-full md:w-[500px] md:px-10 md:pt-16 md:pb-8 p-8 bg-[#F3F3F3] rounded-xl">
            <input placeholder="Name *" className="subscribe-input" required />
            <input placeholder="Email *" className="subscribe-input" required />
            <textarea
              placeholder="Message *"
              className="subscribe-input"
              rows={7}
              required
            />

            <button className="w-48 mt-8 bg-black p-3 rounded-full">
              Send us a message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
