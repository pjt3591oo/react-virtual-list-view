import { useEffect, useState } from 'react';

import VirtualListView from "./components/virtualListView";
import ListView from "./components/listView";

import useData from './hooks/useData';

function App() {
  const [ cnt, setCnt ] = useState(100);
  const { data, onChangeDataCnt } = useData(cnt);

  const [isVisibleVirtualListView, setIsVisibleVirtualListView] = useState(false);
  const [isVisibleListView, setIsVisibleListView] = useState(false);

  const onChangeDataCntHandler = (evt) => {
    if (isNaN(evt.target.value) || parseInt(evt.target.value) > 1_000_000) return
    
    setCnt(
      parseInt(evt.target.value)
    );
  }

  return (
    <div className="App">
      <div>
        <input 
          type="text" 
          value={cnt} 
          onChange={onChangeDataCntHandler} 
        />
        <button onClick={() => onChangeDataCnt(cnt)}>적용</button>
        <span style={{color: '#8e8e8e'}}>최대 1,000,000까지 입력가능</span>
      </div>

      <div style={{display: 'flex'}}>
        <div>
          <h1>가상 리스트 뷰 
            <button 
              onClick={() =>setIsVisibleVirtualListView(!isVisibleVirtualListView)}
            >
              {isVisibleVirtualListView ? '숨기기' : '보이기'}
            </button>
          </h1>
          <div style={{width: 300}}>
            {isVisibleVirtualListView
              ? <VirtualListView 
                  data={data} 
                  viewHeight={300} 
                  cellHeight={30} 
                  cellRender={(item, idx) => (
                    <div>
                      <span style={{color: 'green'}}>{idx}</span>
                      -
                      <span style={{color: 'blue'}}>{item}</span>
                    </div>
                  )}
                />
              : <></>
            }
          </div>
        </div>

        <div>
          <h1>
            가상 리스트 뷰 적용 X
            <button 
              onClick={() =>setIsVisibleListView(!isVisibleListView)}
            >
              {isVisibleListView ? '숨기기' : '보이기'}
            </button>
          </h1>
          <div style={{width: 300}}>
            {isVisibleListView
              ? <ListView data={data} viewHeight={300} cellHeight={30} />
              : <></>
            }
          </div>
        </div> 
      </div>

    </div>
  );
}

export default App;
