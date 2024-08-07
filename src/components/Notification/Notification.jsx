import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return <div className={s.massage}>{message}</div>;
};

export default Notification;
