✅ Dependency Array

We can control when useEffect runs by passing a dependency array.

No dependencies → runs after every render

useEffect(() => {
  console.log("Runs on every render");
});


Empty array → runs only once (on mount)

useEffect(() => {
  console.log("Runs only once on mount");
}, []);


With dependencies → runs when specific state changes

useEffect(() => {
  console.log("Count changed:", count);
}, [count]);