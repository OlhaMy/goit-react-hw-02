import s from "./Options.module.css";

const Options = ({ options, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.card}>
      {Object.keys(options).map((option) => (
        <button
          className={s.button}
          key={option}
          onClick={() => updateFeedback(option)}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={s.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
