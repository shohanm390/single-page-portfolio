import React from "react";
const Projects = () => {
  const projectDetails = [
    {
      imageSource: "https://cdn.dribbble.com/userupload/14182168/file/original-f3d7769a09a8458179337cdce9c34e0e.png?resize=1919x962",
      codeLink: "/not-found",
      preLink: "https://mypassapp.netlify.app",
    },
    {
      imageSource:
        "https://cdn.dribbble.com/userupload/14182194/file/original-66f506ec5ba06648847507a1cfe23add.png?resize=1919x955",
      codeLink: "https://github.com/shohanm390/Txt-Converter",
      preLink: "https://txtconvert.netlify.app",
    },
    {
      imageSource:
        "https://cdn.dribbble.com/userupload/14182190/file/original-eaf2593cf0a0c3bf3768bc6e91cf0759.png?resize=1919x957",
      codeLink: "/not-found",
      preLink: "https://astonishing-sopapillas-b29395.netlify.app",
    },
    {
      imageSource:
        "https://cdn.dribbble.com/userupload/14182200/file/original-67106aca7bf6a14f7417795a0c4bbabd.png?resize=1905x954",
      codeLink: "/not-found",
      preLink: "https://meshohan.netlify.app/#",
    },
  ];
  return (
    <div className="mb-32">
      <div className="flex justify-between lg:mt-32 lg:mb-32 lg:px-20 ">
        <h1 className="text-5xl font-mono">Projects</h1>
        <a
          href="#"
          className="text-xl underline underline-offset-8 decoration-teal-700 text-teal-400 group hover:text-white duration-300"
        >
          view more
          <i className="fa-solid fa-arrow-right text-white mx-2 group-hover:translate-x-2 duration-300"></i>
        </a>
      </div>
      <div className=" flex justify-center items-center gap-10 flex-wrap">
        {projectDetails.map((item, index) => (
          <div
            key={index + 1245}
            style={{
              backgroundImage: `url(${item.imageSource})`,
            }}
            className="w-5/12 h-96 bg-cover group"
          >
            <div className="w-full h-full relative group-hover:bg-[#160d0d49]  duration-300">
              <a
                href={item.preLink}
                className="text-2xl font-semibold -z-40 group-hover:z-50 hover:text-emerald-500 underline underline-offset-8 decoration-emerald-500 text-white absolute left-2/4 -translate-x-2/4  top-2/4 -translate-y-2/4"
              >
                preview
              </a>
              <a
                href={item.codeLink}
                className="my-20 text-2xl font-semibold -z-40 group-hover:z-50 hover:text-emerald-500 underline underline-offset-8 decoration-emerald-500 text-white absolute left-2/4 -translate-x-2/4  top-2/4 -translate-y-2/4"
              >
                view code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
