import me from "../../assets/me.png";
export const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={me}
        className="mx-auto mb-8 w-48 h-48  object-cover rounded-full transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Mohammad khalaf
        </span>
        ,Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 px-4 ">
        I specialize in building modern and resposive applications.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500  transform transition-transform duration-300 hover:scale-105 rounded-full py-2 px-4 cursor-pointer">
          Contact With Me
        </button>
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500   transform transition-transform duration-300 hover:scale-105 rounded-full py-2 px-4 cursor-pointer">
          Resume
        </button>
      </div>
    </div>
  );
};
