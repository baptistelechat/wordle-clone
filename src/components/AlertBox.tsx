import { styled } from "@stitches/react";
import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import { v4 as uuidv4 } from "uuid";

const StyledAlertBox = styled("div", {
  position: "absolute",
  width: "fit-content",
  height: "600px",
  gap: "15px",
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "flex-end",
});

type TAlert = {
  id: string;
  message: string;
};

function AlertBox() {
  const [alerts, setAlerts] = useState<TAlert[]>([]);

  useEffect(() => {
    const handlePressEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setAlerts((prevAlert) => [
          ...prevAlert,
          { id: uuidv4(), message: "Test de Julien" },
        ]);
      }
    };
    document.addEventListener("keydown", handlePressEnter);
    return () => {
      document.removeEventListener("keydown", handlePressEnter);
    };
  }, []);

  return (
    <StyledAlertBox>
      {alerts.map((alert) => (
        <Alert
          autoDestroy={() =>
            setTimeout(() => {
              setAlerts((prevAlert) =>
                prevAlert.filter((thisAlert) => thisAlert.id !== alert.id)
              );
            }, 1000)
          }
          key={alert.id}
          message={alert.message}
        />
      ))}
    </StyledAlertBox>
  );
}

export default AlertBox;
