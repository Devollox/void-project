import React, { useEffect, useState } from "react";

const VoidProject = () => {
  const [publicIp, setPublicIp] = useState("");

  useEffect(() => {
    const fetchPublicIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setPublicIp(data.ip);
      } catch (error) {
        console.error("Ошибка при получении публичного IP:", error);
      }
    };

    fetchPublicIP();
  }, []);

  return (
    <>
      <div style={{ fontSize: "36px" }}>
        Иди нахуй сука! {publicIp || "Загрузка..."}
      </div>
    </>
  );
};

export default VoidProject;
