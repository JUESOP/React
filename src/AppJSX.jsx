import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'esop';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h1>Hello!</h1>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
        
      </ul>
    </>
  );
}

export default AppJSX;

