export default function Navbar() {
  return (
    <div className="bg-black text-white px-8 md:px-16 lg:px-24 ">
      <div className="container py-2 flex justify-center  md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline text-clip ">
          Mohammad Khalaf
        </div>
        <div className="space-x-6">
          <a href="#home " className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 rounded-full py-2 px-4 cursor-pointer">
          Connect Me
        </button>
      </div>
    </div>
  );
}
