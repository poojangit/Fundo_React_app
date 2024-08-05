import React from 'react'
import { DeleteForever, Deleting, getNotes} from '../../services/AllNotesServices';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import { useSpring, animated } from '@react-spring/web';
import './GridNotes.scss';
import './ListView.scss';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';

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
export const TrashNotes = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const [fetchData, setFetchData] = useState([])
  const [isComponentRender, setIsComponentRender] = useState(false);
  useEffect(() => {
    let res = getNotes()
      .then((data) => {
        let result = data.data.data.data;
        let newNotes = result.filter((notes) => notes.isDeleted === true)
        setFetchData(newNotes.reverse())
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }, [isComponentRender]);
  const deleteForever = (id) => {
    console.log(id)
    let deleteItem = { noteIdList: [id] }
    console.log(deleteItem)
    let del = DeleteForever(deleteItem)
      .then((d) => {
        console.log(d)

      }).catch((e) => {
        console.log(e)
      })
  }
  const restoreDelete = async (id) => {
    console.log(id)
    let restore = { noteIdList: [id], isDeleted: false }
    let response = await Deleting(restore);
    console.log(response)
    setIsComponentRender(prev=>!prev)
  }
  const isTrue = useSelector(state => state.isTrue);
  return (
    <div className={isTrue ? 'listViewCompo':'mainSectionGrid'}>
      {fetchData.map((res, i) => {
        return (
          <div key={i}  style={{ backgroundColor: res.color }} className={isTrue ? 'showIconClass': 'trashWidth'}>
            <div className={isTrue ?'IslistViewTrue':'gridItem'}>
              <div >
                <h3>{res.title}</h3>
                <p>{res.description}</p>
              </div>
            </div>
            <div className='noteBoxIcon'>
              <div className="srarchInput-icon" >
                <DeleteForeverOutlinedIcon onClick={() => deleteForever(res.id)} />
              </div>
              <div className="srarchInput-icon">
                <RestoreFromTrashOutlinedIcon onClick={() => restoreDelete(res.id)} />
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}