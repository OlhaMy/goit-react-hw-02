const Options = ({ options }) => {
  return (
    <div>
      {Object.keys(options).map((option) => (
        <button key={option}>{option}</button>
      ))}
    </div>
  );
};

export default Options;
