import React, { useEffect, useState } from 'react';

/**
 * 상태가 변경되면
 * 상태가 변경된 React 컴포넌트를 다시 호출한다.
 * 따라서 UseEffect로 한 번만 불러준다.
 */
export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChanged = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('call!');
        setProducts(data);
      });

    //컴포넌트가 없어질 때(unmount) 처리가 필요하면 return으로 전달한다.
    return () => {
      console.log('unmount!');
    };
  }, [checked]); //dependency list가 비어있는 경우 호출되는 처음 한 번만 호출된다.

  return (
    <>
      <input type="checkbox" value={checked} onChange={handleChanged}></input>
      <label htmlFor="checkbox">Show Only Hot Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* map을 사용해서 list를 만들 때는고유한 key 값을 설정해주어야 한다. */}
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
