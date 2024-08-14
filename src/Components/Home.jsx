
const Home = () => {
  // Retrieve credentials from local storage
  const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));

  return (
    <div className="text-center">
      <h1 className="text-4xl text-white">Welcome to Home</h1>
      {userCredentials ? (
        <div>
          <p className="text-xl text-white">Email: {userCredentials.email}</p>
          <p className="text-xl text-white">Password: {userCredentials.password}</p>
          <p className="text-xl text-white">Profile: {userCredentials.profile}</p>
        </div>
      ) : (
        <p className="text-xl text-white">No user credentials found.</p>
      )}
    </div>
  );
};

export default Home;