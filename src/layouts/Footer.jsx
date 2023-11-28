import Logo from "../components/Logo";
import TwitterIcon from "../components/TwitterIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import InstagramIcon from "../components/InstagramIcon";

export default function Footer() {
  return (
    <div className="container flex flex-wrap p-6 md:p-24">
      <div className="flex flex-col justify-between w-full md:w-4/12">
        <Logo />

        <p>
          @ 2023 Startupz <br />
          All rights reserved.
        </p>
      </div>

      <div className="flex flex-col w-full md:w-3/12 [&>a]:block [&>a]:text-primary [&>a]:my-1">
        <h1 className="footer-title">Companies</h1>

        <a href="/">Tolq</a>
        <a href="/">LegalSite</a>
        <a href="/">Codekeeper</a>
        <a href="/">Feedback Labs</a>
      </div>

      <div className="flex flex-col w-1/2 md:w-3/12 my-8 md:my-0">
        <div>
          <h1 className="footer-title">Contact</h1>
          <p className="text-[silver]">
            World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM
            The Hague The Netherlands
          </p>
          <button className="text-primary mt-4">Send us an email</button>
        </div>
      </div>

      <div className="flex flex-col items-end w-1/2 md:w-2/12">
        <div className="[&>svg]:my-4">
          <h1 className="footer-title">Follow us</h1>

          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}
