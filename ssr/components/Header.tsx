import Image from "next/image";

import Logo from "../assets/logo.png";

export function Header() {
  return (
    <div className="flex flex-col items-center justify-between py-2 px-10 w-full bg-indigo-500 text-white md:flex-row md:px-20">
      <div className="flex gap-4 items-center">
        <Image
          width={56}
          height={56}
          src={Logo}
          alt="logo da clina"
        />
        <h1 className="font-bold text-white text-3xl md:min-w-full">
          Clinica veterinária
        </h1>
      </div>

      <div>
        Nav...
      </div>
    </div>
  );
}