import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setEditingCuboidMode } from './features/executor/executorSlice';

const KeypressHandler = () => {
  const dispatch = useDispatch();

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'r') {
        dispatch(setEditingCuboidMode('rotate'));
      } else if (e.key === 's') {
        dispatch(setEditingCuboidMode('scale'));
      } else if (e.key === 't' || e.key === 'p') {
        dispatch(setEditingCuboidMode('translate'));
      }
    },
    [dispatch]
  );

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
