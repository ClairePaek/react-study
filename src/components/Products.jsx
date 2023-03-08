import React, { useEffect, useState } from 'react';

/**
 * 상태가 변경되면
 * 상태가 변경된 React 컴포넌트를 다시 호출한다.
 * 따라서 UseEffect로 한 번만 불러준다.
 */
export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('call!');
        setProducts(data);
      });

    //컴포넌트가 없어질 때(unmount) 처리가 필요하면 return으로 전달한다.
    return () => {
      console.log('unmount!');
    };
  }, []); //dependency list가 비어있는 경우 호출되는 처음 한 번만 호출된다.

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
