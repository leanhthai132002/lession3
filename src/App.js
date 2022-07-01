import logo from './logo.svg';
import './App.css';
import Square from './components/square';
import styled from 'styled-components'
function App() {
  return (
    <Board>
  <Square/>
  <Square/>
  <Square/>
  <Square/>
  <Square/>
  <Square/>
  <Square/>
  <Square/>
  <Square/>
    </Board>
  );
}

function Box(props) {
  console.log(props);
  return (
    <div style={{
      margin:"auto",
      backgroundColor: props.color,
      height: 100,
      with: 100
    }}>
      <Text  value="This is the box" textColor={props.textColor}/>
    </div>
  )
}

function Text(props) {
  return <h3 style={{color: props.textColor}}>{props.value}</h3>
}

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  height: 300px;
  width: 300px;
  margin-top: 10px;
`

export default App;
