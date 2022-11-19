import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { Link } from "react-scroll";

const Portfolio = () => {

    const DemoRedirect = (demourl) => {
    
     const result = portfolios.find(demo => demo.id = this.id)
     console.log(result)
    };
    const CodeRedirect = (demourl) => {
    
        const result = portfolios.find(code => code.id = this.id)
        console.log(result)
       };
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demourl:"https://www.youtube.com/watch?v=eHPLTDOAggc&ab_channel=ChartJS",
      code:"https://github.com/ouael114/parkmanager-back"

    },
    {
      id: 2,
      src: reactParallax,
      demourl:"https://www.youtube.com/watch?v=eHPLTDOAggc&ab_channel=ChartJS",
      code:"https://github.com/ouael114/parkmanager-back"
    },
    {
      id: 3,
      src: navbar,
      demourl:"https://www.youtube.com/watch?v=eHPLTDOAggc&ab_channel=ChartJS",
      code:"https://github.com/ouael114/parkmanager-back"
    },
    {
      id: 4,
      src: reactSmooth,
      demourl:"https://www.youtube.com/watch?v=eHPLTDOAggc&ab_channel=ChartJS",
      code:"https://github.com/ouael114/parkmanager-back"
    },
    {
      id: 5,
      src: installNode,
      demourl:"https://www.youtube.com/watch?v=eHPLTDOAggc&ab_channel=ChartJS",
      code:"https://github.com/ouael114/parkmanager-back"
    },
    {
      id: 6,
      src: reactWeather,
      demourl:"https://www.youtube.com/watch?v=eHPLTDOAggc&ab_channel=ChartJS",
      code:"https://github.com/ouael114/parkmanager-back"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demourl,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <Link onClick={DemoRedirect} href={demourl}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 button">
                  Demo
                  </button>
                  </Link>
                  <Link onClick={CodeRedirect} href={code}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;