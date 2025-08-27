/*
Keys help React identify which items changed, added, or removed.
Keys must be unique & stable (avoid using index if list changes often).
*/

function ProductList() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
  ];

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

export default ProductList;