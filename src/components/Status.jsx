import { Clock, CheckCircle, PauseCircle } from "lucide-react";
import styles from "../styles/components/Status.module.scss";

const Status = ({ status }) => {
  const config = {
    pending: { icon: <PauseCircle />, class: styles.pending },
    ongoing: { icon: <Clock />, class: styles.ongoing },
    completed: { icon: <CheckCircle />, class: styles.completed },
  };

  return (
    <span className={`${styles.badge} ${config[status].class}`}>
      {config[status].icon}
      {status}
    </span>
  );
};

export default Status;
