import {
  DependencyList,
  EventHandler,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

interface WindowEventHookParams {
  event?: keyof WindowEventMap;
  options?: EventListenerOptions;
  isListen?: boolean;
}

type WindowEventHook = <E extends EventListener>(
  handler: E,
  deps: DependencyList,
  params?: WindowEventHookParams
) => void;

export const useWindowEvent: WindowEventHook = (handler, deps, params) => {
  const { event = 'click', options = {}, isListen = true } = params ?? {};

  const ref = useRef(handler);

  useLayoutEffect(() => {
    ref.current = handler;
  }, [handler]);

  useEffect(() => {
    const fn = (args: Event) => ref.current(args);

    if (isListen) {
      window.addEventListener(event, fn);
    }

    return () => {
      window.removeEventListener(event, fn, options);
    };
  }, [event, options, ...deps]);
};
