
const ListView = ({ viewHeight=500, cellHeight=50, viewRange=100, data=[] }) => {

  return (
    <div 
      style={{
        height: viewHeight, 
        overflowY: 'scroll', 
        border: '1px solid black', 
        boxSizng: 'border-box'
      }}
    >
      <ul 
        style={{
          height: data.length * cellHeight, 
        }}
      >
        {data.map((item, idx) => (
          <li key={idx} style={{height: cellHeight}}>
            {idx}-{item}
          </li>
        ))}
      </ul>
    </div>
  )
}
ListView.propsType = {

}

export default ListView;