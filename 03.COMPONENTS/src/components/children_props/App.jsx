// App.js
import Card from './Card';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <h1>Children Prop Example</h1>
      
      {/* The Header and p tag are passed as children to the Card component. */}
      <Card>
        <Header title="My Awesome Card" subtitle="This card uses children props!" />
        <p>This is some content inside the card. It could be anything!</p>
        <button onClick={() => alert('Clicked!')}>Click Me</button>
      </Card>

      {/* Another example, with a different set of children. */}
      <Card>
        <h2>A different title</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>
    </div>
  );
}

export default App;