import Logo from "../components/Logo";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default function Navbar() {
  const windowSize = useWindowSize();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  const isSmallScreen = windowSize.width <= 768; // Adjust the breakpoint as needed

  return (
    <div
      className={`container mt-1 px-6 md:px-16 max-sm:px-10 flex justify-between items-center fixed inset-x-0 backdrop-filter backdrop-blur-xl shadow-md`}
    >
      <div className="flex justify-between items-center w-full">
        <Logo />
        {/* First navbar - show on large screens, hide on small screens */}
        {!isSmallScreen && (
          <div className="flex items-center gap-1">
            <a href="/" className="p-3 mx-1">
              Startups
            </a>
            <a href="/" className="p-3 mx-1">
              Contact
            </a>
            <Button className="mx-1">Work with us!</Button>
          </div>
        )}
      </div>
      {/* Second navbar - show on small screens, hide on large screens */}
      {isSmallScreen && (
        <div className="md:hidden  justify-end items-center">
          <span className="text-4xl" onClick={() => setToggle(!toggle)}>
            {toggle ? <IoMdCloseCircle /> : <IoMdMenu />}
          </span>

          {toggle && (
            <div className="p-6 bg-white absolute top-20 right-0 mx-4 my-2 w-[290px] rounded-xl sidebar shadow-2xl">
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                <li
                  className={`font-poppins font-light cursor-pointer text-[8px] `}
                >
                  <div className="flex gap-1 capitalize hover:bg-primary">
                    Startups
                  </div>
                </li>
                <li
                  className={`font-poppins font-light cursor-pointer text-[8px] `}
                >
                  <div className="flex gap-1 capitalize hover:bg-primary">
                    Contact
                  </div>
                </li>
                <li
                  className={`font-poppins font-light cursor-pointer text-[8px] `}
                >
                  <div className="">
                    <button
                      className=""
                      style={{
                        padding: "0.4rem",
                        backgroundColor: "#46B8C8",
                        color: "white",
                        marginTop: "1rem",
                      }}
                    >
                      Work with us!
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
