import Button from "../components/Button";

export default function Header() {
  return (
    <main className="container flex justify-center relative w-full h-screen">
      <img
        alt="brand"
        src="/assets/brand.png"
        className="absolute bottom-0 right-0 w-full md:w-1/2 -z-10"
      />

      <div className="container flex items-center h-full p-8">
        <div>
          <h1 className="w-full md:w-[600px] text-5xl md:text-8xl">
            We Create Startups.
          </h1>
          <p className="text-2xl text-secondary my-8">
            We are startup studio that develops and launches new companies.
          </p>

          <Button secondary>See our works</Button>
        </div>
      </div>
    </main>
  );
}
