import { useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  const createNotification = (text) => {
    setNotifications(text);
  };

  return { notifications, createNotification };
}

export default useNotifications;
