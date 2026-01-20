const RenderingLists = () => {
  const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
  return (
    <>
      <ul>
        {products.map((p) => {
          return <li key={p.id} style={{color: p.isFruit ? "green" : "red"}}>{p.title} </li>;
        })}
      </ul>
    </>
  );
};

export default RenderingLists;
