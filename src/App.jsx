import "./App.css";
import MyButton from "./MyButton";

function App() {
  const user = {
    imgUrl: "https://i.imgur.com/yXOvdOS.jpg",
    name: "sara",
    imgSize: 90,
  };

  return (
    <>
      <h1 className="name">{user.name}</h1>
      <MyButton />
      <img
        src={user.imgUrl}
        alt={"photo of" + user.name}
        style={{ width: user.imgSize, height: user.imgSize }}
      />
    </>
  );
}

export default App;
