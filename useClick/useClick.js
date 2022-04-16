export const useClick = (onClick) => {
    if(typeof onClick !== 'function') {
      return;
    }
    const element = useRef();
    useEffect(() => {
      if(element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => element.current.removeEventListener('click', onClick);
    }, []);
    return element;
  }

  const useConfirm = (message = "", onConfirm, onCancel) => {
    if ((!onConfirm || typeof onConfirm !== "function") || (!onCancel || typeof onCancel !== "function")) {
      return;
    }
  
    const confirmAction = () => {
      if (confirm(message)) {
        callback();
      } else {
        rejection();
      }
    };
    return confirmAction;
  };