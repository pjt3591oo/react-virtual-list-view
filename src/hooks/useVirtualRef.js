import { useState, useEffect, useRef } from 'react';

const useVirtualRef = ({cellHeight}) => {
  const ref = useRef(null);
  const [currentTopIdx, setCurrentTopIdx] = useState(0);
  
  let cti = 0;

  useEffect(() => {
    let currentTopIdx = 0;
    
    ref.current.addEventListener('scroll', (evt) => {
      let topIdx = Math.floor(evt.target.scrollTop / cellHeight)+1
      if (cti <= topIdx) {
        currentTopIdx = topIdx
        setCurrentTopIdx(topIdx);
      }
    })

  }, [ref])

  return {
    ref,  
    currentTopIdx
  } 
}

export default useVirtualRef;