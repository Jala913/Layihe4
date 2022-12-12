import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostMovies } from "../../redux/actions/actions";

const getData = async (id) => {
  const { data } = await axios.get(
    `https://acb-api.algoritmika.org/api/movies/list/${id}`
  );
  return data;
};

function ListPage() {
  const [title, setTitle] = useState("");
  const id = useParams().id;
  const movies = useSelector((state) => state.reducer.postMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    getData(id).then((data) => {
      data.movies.map((item) => {
        dispatch(getPostMovies(item));
      });
      setTitle(data.title);
      console.log(data);
    });
  }, []);
  console.log(movies);
  return (
    <div className="flex p-12 flex-col gap-4">
      <h1 className="text-6xl font-semibold">{title}</h1>
      <ul className="grid grid-cols-3 gap-4">
        {movies &&
          movies.map((item) => (
            <li
              key={item[0].imdbID}
              className="border rounded px-4 py-1 text-2xl border-blue-400 font-medium flex jusitfy-center items-center"
            >
              <a
                href={`https://www.imdb.com/title/${item[0].imdbID}`}
                target="_blank"
              >
                {item[0].Title} ({item[0].Year})
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListPage;
