import { useEffect, useState } from "react";

import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const feedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

// useEffect(() => {
//   window.feedback;
// });
const updateFeedback = (feedbackType) => {
  setFeedback((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
};

const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

export const App = () => {
  return (
    <div>
      <Description />
      <Options
        options={feedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      <Notification message={"No feedback yet"} />
    </div>
  );
};

export default App;
