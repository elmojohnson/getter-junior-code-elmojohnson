import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-800 flex items-center justify-center pb-8">
      <h5>
        Made by{" "}
        <Link href="https://github.com/elmojohnson">
          <a className="text-orange-400 hover:underline">John Elmo Johnson</a>
        </Link>
      </h5>
    </footer>
  );
};

export default Footer;
