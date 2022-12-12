import { Card, Carousel } from "flowbite-react";
import { useSelector } from "react-redux";

const Slider = () => {
  const data = useSelector((state) => state.reducer.corusel);
  console.log(data);
  return (
    <div className="h-[620px] rounded m-4">
      <Carousel>
        {data.map((item) => (
          <div className="flex object-cover h-full items-center justify-center bg-blue-500 dark:bg-gray-700 dark:text-white">
            <div className="h-full w-1/3">
              <img
                className="rounded h-full w-full"
                src={item.Poster}
                alt={item.Poster}
              />
            </div>
            <Card className="h-full w-2/3 rounded-none rounded-r-md bg-amber-300">
              <h5 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.Title}
              </h5>
              <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
                {item.Year}
              </p>
              <p className="text-xl mt-4 bg-sky-400 w-fit px-4 py-1 rounded text-white font-medium uppercase">
                {item.Type}
              </p>
            </Card>
            {/* <div className="w-full bg-slate-300 h-full">
              <h1 className="text-3xl font-bold">{item.Title}</h1>
              <p className="text-xl">{item.Year}</p>
              <p className="text-xl mt-4 bg-sky-400 w-fit px-4 py-1 rounded text-white font-medium uppercase">
                {item.Type}
              </p>
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
