import CounterHoc from "./CounterHoc"


function ButtonHover(props) {
    const {count,incrementCount} = props
  return (
    <div>
        <button onMouseOver={incrementCount}>Hover me</button>
        <h2>count is : {count}</h2>
    </div>
  )
}

export default CounterHoc(ButtonHover,5)
