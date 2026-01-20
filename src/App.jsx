import Admin from "./Admin";
import "./App.css";
import Login from "./Login";
import MyButton from "./MyButton";

function App() {
  // const user = {
  //   imgUrl: "https://i.imgur.com/yXOvdOS.jpg",
  //   name: "sara",
  //   imgSize: 90,
  // };

  const isLoggedin = true;

  return (
    <>
      {/* <h1 className="name">{user.name}</h1>
      <MyButton />
      <img
        src={user.imgUrl}
        alt={"photo of" + user.name}
        style={{ width: user.imgSize, height: user.imgSize }}
      /> */}

      {
        isLoggedin ? <Admin/> : <Login />
      }

      {/* {
        isLoggedin && <Admin/>
      } */}
    </>
  );
}

export default App;
