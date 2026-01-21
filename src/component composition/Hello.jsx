import HigherOrderComp from "./HigherOrderComp";

const Hello = ({ text }) => {
  return <div>Hello {text}</div>;
};

export default HigherOrderComp(Hello);
