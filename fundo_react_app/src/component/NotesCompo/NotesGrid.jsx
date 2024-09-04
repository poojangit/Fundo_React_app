
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PropTypes from "prop-types"
import { useEffect } from "react";
import { getNotes } from "../../services/AllNotesServices";
import { useSpring, animated } from "@react-spring/web";
import { forwardRef } from "react";
import { NotesList } from "./NotesList";
import { useSelector, useDispatch } from "react-redux";
import { ListView } from "./ListView";
import "./ListView.scss"
import { setIsLoading } from "../../Redux/Action";

const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});
Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export const NotesGrid = () => {
  const [fetchData, setFetchData] = useState([]);
  const dispatch = useDispatch();
  const ComponentRender = useSelector((state) => state.ComponentRender);
  const [isComponentRender, setIsComponentRender] = useState(ComponentRender);

  const getAllNotes = async () => {
    await getNotes()
      .then((data) => {
        let result = data.data.data.data;
        console.log(result);
        let newNotes = result.filter(
          (notes) => notes.isArchived === notes.isDeleted
        );
        setFetchData(newNotes.reverse());
        dispatch(setIsLoading(false));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getAllNotes();
  }, [ComponentRender]);

  const [valueforSerach, setValueSearch] = useState("");
  const isTrue = useSelector((state) => state.isTrue);
  const initialSearchValue = useSelector((state) => state.inputData);

  useEffect(() => {
    setValueSearch(initialSearchValue);
  }, [initialSearchValue]);

  const filteredNotes = fetchData.filter((note) => {
    // Perform case-insensitive search on note content
    return note.description
      .toLowerCase()
      .includes(valueforSerach.toLowerCase());
  }, []);

  return (
    <>
      {isTrue ? (
        <div className={isTrue ? "listViewCompo" : "gridViewCompo"}>
          {filteredNotes.map((d, i) => {
            return (
              <ListView
                key={i}
                noteObj={d}
                setIsComponentRender={setIsComponentRender}
              />
            );
          })}
        </div>
      ) : (
        <ResponsiveMasonry
          className="gridMasonry"
          columnsCountBreakPoints={{ 700: 1, 900: 2, 1000: 3, 1200: 4 }}
        >
          <Masonry columnsCount={4} gutter="0px">
            {filteredNotes.map((d, i) => {
              return (
                <NotesList
                  key={i}
                  noteObj={d}
                  setIsComponentRender={setIsComponentRender}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </>
  );
};