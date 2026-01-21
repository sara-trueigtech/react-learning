const HigherOrderComp = (OldComp) => {
  return function NewComp(props) {
    return (
      <div style={{ border: "1px solid" }}>
        <OldComp {...props} />
      </div>
    );
  };
};

export default HigherOrderComp;
