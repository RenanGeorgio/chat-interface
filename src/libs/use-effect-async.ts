import { useRef, useEffect, useCallback } from 'react';
//import { useDispatch } from 'react-redux';
//import { errorsActions } from './store';

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/* eslint-disable */
export const useEffectAsync = (effect, deps) => {
  //const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    effect()
      .then((result) => ref.current = result)
      .catch((error) => console.log("error")
      //dispatch(errorsActions.push(error.message))
      );
      
    return () => {
      const result = ref.current;
      if (result) {
        // @ts-ignore
        result();
      }
    };
  //}, [...deps, dispatch]);
  }, [...deps]);
};

export const useCatch = (method) => {
  //const dispatch = useDispatch();
  return (...parameters) => {
    //method(...parameters).catch((error) => dispatch(errorsActions.push(error.message)));
  };
};

export const useCatchCallback = (method, deps) => {
  return useCallback(useCatch(method), deps);
};
