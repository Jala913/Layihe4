import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovies, getMovies } from "../../redux/actions/actions";

function SearchBox() {
  const [searchLine, setSearchLine] = useState("");

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  return (
    <div className="search-box">
      <form
        className="search-box__form flex justify-center gap-4
      items-end"
        onSubmit={searchBoxSubmitHandler}
      >
        <div>
          <TextInput
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Search for a movie"
            onChange={searchLineChangeHandler}
            sizing="md"
          />
        </div>
        <Button
          type="submit"
          className="search-box__form-submit"
          onClick={() =>
            getMovies(searchLine)
              .then((res) => dispatch(addMovies(res)))
              .catch((err) => {
                dispatch(addMovies([]));
                return err;
              })
          }
          disabled={!searchLine}
        >
          Искать
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
