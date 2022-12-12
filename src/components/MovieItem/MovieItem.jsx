import { Button, Card } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addListMovie } from "../../redux/actions/actions";

function MovieItem({ Title, Year, Poster, imdbID, disabled }) {
  const dispatch = useDispatch();
  const linkActive = useSelector((state) => state.reducer.linkActive);
  return (
    <div className="max-w-sm">
      <Card imgAlt={Title} imgSrc={Poster}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {Title}&nbsp;({Year})
        </h5>
        <Button
          onClick={() => dispatch(addListMovie(imdbID))}
          disabled={disabled || linkActive}
        >
          Add Favorite
        </Button>
      </Card>
    </div>
  );
}

export default MovieItem;
