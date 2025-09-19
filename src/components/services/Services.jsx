export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly web designs.",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Developing robust server-side logic and databases.",
    },
    {
      id: 4,
      title: "Full-Stack Development",
      description:
        "Combining frontend and backend skills to build complete apps.",
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences and clean interfaces.",
    },
    {
      id: 6,
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications with smooth performance.",
    },
  ];

  return (
    <div className="py-20 text-white bg-black " id="about">
      <div className="container mx-aout px-8 md:px-16 lg:px-24 ">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className=" text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="inline-block mt-4  text-green-400 hover:text-blue-500  transform transition-transform duration-300 hover:scale-105 rounded-full "
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
