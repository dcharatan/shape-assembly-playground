import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NonSerializableContext from './features/context/NonSerializableContext';
import { setEditingCuboidMode } from './features/executor/executorSlice';

const KeypressHandler = () => {
  const dispatch = useDispatch();
  const liveUpdatesEnabled = useSelector((state) => state.editorSlice.liveUpdatesEnabled);
  const { editorState, forceRefresh } = useContext(NonSerializableContext);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey && !liveUpdatesEnabled) {
      forceRefresh(editorState, true);
    } else if (e.key === 'r') {
      dispatch(setEditingCuboidMode('rotate'));
    } else if (e.key === 's') {
      dispatch(setEditingCuboidMode('scale'));
    } else if (e.key === 't' || e.key === 'p') {
      dispatch(setEditingCuboidMode('translate'));
    }
  };

  const startListening = () => {
    document.addEventListener('keydown', handleKeyDown);
  };

  const stopListening = () => {
    document.removeEventListener('keydown', handleKeyDown);
  };

  useEffect(() => {
    startListening();
    return stopListening;
  });

  return null;
};

export default KeypressHandler;
