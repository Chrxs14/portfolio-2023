import React from "react";
import WeatherApp from "../assets/projects/weatherapp.png";
import ToDoList from "../assets/projects/toDoList.png";
import MovieApp from "../assets/projects/moviesApp.png";

export const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#242424]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ad5c5c]">
            Work
          </p>
          <p className="py-6">// Mira algunos de mis trabajos recientes.</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100 items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather app
              </span>
              <div className="pt-8 text-center">
                <a href="https://chrxs14.github.io/app-clima/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Chrxs14/app-clima" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ToDoList})` }}
            className="shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100 items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                To do list App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://to-do-list-chrxs14.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Chrxs14/to-do-list" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${MovieApp})` }}
            className="shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100 items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie list App
              </span>
              <div className="pt-8 text-center">
                <a href="https://movieappbychrxs.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Chrxs14/proyecto-api-rest-practic"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
