import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useVirtualRef from '../hooks/useVirtualRef';

/*
  viewRange: 보이지 않는 범위 미리 렌더링
  viewCount: 화면에 보여지는 데이터 갯수
*/

const Virtual = ({ viewHeight=500, cellHeight=50, viewRange=100, data=[], cellRender }) => {
  const viewCount = viewHeight / cellHeight;
  
  const [ viewData, setViewData ] = useState(data.slice(0, viewCount + viewRange));
  const { ref, currentTopIdx } = useVirtualRef({
    listViewHeight: viewHeight,
    cellHeight
  });
  
  useEffect(() => {
    let {isRender, endIdx} = getLastIdx()
    console.log('isRender', isRender, endIdx);

    if (isRender) return

    console.log('add item on Virtual View')

    setViewData(
      data.slice(0, endIdx)
    );
  }, [currentTopIdx])

  const getLastIdx = () => {
    let endIdx = currentTopIdx + viewCount + viewRange
    return {
      isRender: endIdx < viewData.length,
      endIdx
    }
  }

  return (
    <div 
      style={{
        height: viewHeight, 
        overflowY: 'scroll', 
        border: '1px solid black', 
        boxSizng: 'border-box'
      }}
      ref={ref}
    >
      <ul 
        style={{
          height: data.length * cellHeight, 
        }}
      >
        {viewData.map((item, idx) => (
          <li key={idx} style={{height: cellHeight}}>
            {cellRender(item, idx)}
          </li>
        ))}
      </ul>
    </div>
  )
}

Virtual.propsType = {
  viewHeightviewHeight: PropTypes.number,
  cellHeight: PropTypes.number,
  viewRange: PropTypes.number,
  cellRender: PropTypes.func
}

export default Virtual;