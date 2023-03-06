import './App.css';

export default function AppJSX() {
  const text = '딸기';
  const list = [1, 2, 3];

  return (
    <>
      <h1 className="orange" style={{ color: 'orange' }}>
        {text}
      </h1>
      <h2>This is React!</h2>
      <ul>
        {list.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </>
  );
}
