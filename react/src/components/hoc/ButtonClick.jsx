import CounterHoc from "./CounterHoc"


function ButtonClick(props) {
    const {count,incrementCount} = props
  return (
    <div>
        <button onClick={incrementCount}>Click me</button>
        <h2>count is : {count}</h2>
    </div>
  )
}

export default CounterHoc(ButtonClick,3)