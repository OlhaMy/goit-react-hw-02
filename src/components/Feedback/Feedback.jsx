import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <ul>
      {Object.entries(feedback).map(([key, value]) => (
        <li key={key}>
          {key} : {value}
        </li>
      ))}
      <li>Total feedback: {totalFeedback}</li>
    </ul>
  );
};

export default Feedback;
