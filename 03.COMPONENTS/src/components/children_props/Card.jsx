// Card.js
// This component accepts a 'children' prop and renders it.
function Card({ children }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px',
    backgroundColor: '#fff'
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}

export default Card;