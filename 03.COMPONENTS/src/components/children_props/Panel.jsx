// A simple Panel component that wraps its children in a div with a border.
function Panel({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      {children}
    </div>
  );
}

export default Panel;