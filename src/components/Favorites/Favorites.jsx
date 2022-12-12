import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeListMovie, setLinkActive } from "../../redux/actions/actions";
import { Button, ListGroup, Modal, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function Favorites({ isOpen, onClick, onClose }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [listLink, setLinkList] = useState("#");
  const listMovies = useSelector((state) => state.reducer.listMovies);
  const linkActive = useSelector((state) => state.reducer.linkActive);
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const saveList = () => {
    dispatch(setLinkActive(true));
    axios
      .post("https://acb-api.algoritmika.org/api/movies/list", {
        title: title,
        movies: listMovies.map((item) => item.imdbID),
      })
      .then((res) => {
        setLinkList(res.data.id);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>Favorite List</Modal.Header>
      <Modal.Body className="space-y-4 ">
        <div className="flex w-full gap-4">
          <TextInput
            value={title}
            placeholder="List title"
            className="w-full"
            onChange={handleInput}
            disabled={linkActive}
          />
          <Button>Add</Button>
        </div>
        <div className="w-full ">
          <ListGroup className="max-h-96 overflow-auto space-y-4">
            {listMovies.map((item) => {
              return (
                <ListGroup.Item key={item.imdbID}>
                  <div className="flex w-full justify-between items-center">
                    <h5 className="text-xl font-medium">
                      {item.Title} ({item.Year})
                    </h5>
                    <Button
                      disabled={linkActive}
                      onClick={() => dispatch(removeListMovie(item.imdbID))}
                    >
                      X
                    </Button>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-between">
        <Button
          type="button"
          className={`favorites__save ${linkActive ? "link__none" : null}`}
          onClick={saveList}
          disabled={title === "" || listMovies.length === 0}
        >
          Save List
        </Button>
        <Button color="gray" disabled={!linkActive} onClick={onClick}>
          <Link to={`/list/${listLink}`} target="_blank">
            Go to list
          </Link>
        </Button>
      </Modal.Footer>
    </Modal>
    // <div className="favorites">
    //   <input
    //     value={title}
    //     placeholder="Введите название списка"
    //     className="favorites__name"
    //     onChange={handleInput}
    //     disabled={linkActive}
    //   />
    //   <ul className="favorites__list">
    //     {listMovies.map((item) => {
    //       return (
    //         <li key={item.imdbID}>
    //           {item.Title} ({item.Year})
    //           <button
    //             disabled={linkActive}
    //             onClick={() => dispatch(removeListMovie(item.imdbID))}
    //           >
    //             X
    //           </button>
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   <button
    //     type="button"
    //     className={`favorites__save ${linkActive ? "link__none" : null}`}
    //     onClick={saveList}
    //     disabled={title === "" || listMovies.length === 0}
    //   >
    //     Сохранить список
    //   </button>
    //   <a
    //     href={`http://localhost:3000/list/${listLink}`}
    //     className={`link__none ${linkActive ? "link__block" : null}`}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Поделиться с друзьями
    //   </a>
    // </div>
  );
}

export default Favorites;
