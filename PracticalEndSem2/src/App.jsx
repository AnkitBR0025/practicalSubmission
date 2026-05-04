import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      console.log(data);

      setUser(data[0]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Data from API</h1>

      {user ? (
        <>
          <h2>{user.username}</h2>
          <h3>{user.email}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;