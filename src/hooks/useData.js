import { useState } from 'react';

const useData = (initCnt) => {
  const [data, setData] = useState(
    Array.from(
      {length: initCnt},
      () => Math.random()
    )
  );

  const onChangeDataCnt = (cnt) => {
    setData(
      Array.from(
        {length: cnt},
        () => Math.random()
      )
    )
  }

  return { 
    data, onChangeDataCnt
  }
}

export default useData;