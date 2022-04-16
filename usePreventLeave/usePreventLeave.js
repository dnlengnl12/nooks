export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () => {
      return window.addEventListener("beforeunload", listener);
    };
    const disablePrevent = () => {
      window.removeEventListener("beforeunload", listener);
    };
    return { enablePrevent, disablePrevent };
  };

  const useBeforeLeave = (onBefore) => {
    if(typeof onBefore !== 'function') {
      return;
    }
    const handle = (event) => {
      const {clientY} = event;
      if(clientY <= 0) { onBefore() }
    };
    useEffect(() => {
      document.addEventListener('mouseleave', handle);
      return () => document.removeEventListener('mouseleave', handle);
    }, []);
  }