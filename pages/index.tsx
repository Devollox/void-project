import React, { useEffect, useState } from "react";

const VoidProject = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const getLocalIP = async () => {
      const rtcPeerConnection = new RTCPeerConnection({
        iceServers: [],
      });

      rtcPeerConnection.createDataChannel("");
      rtcPeerConnection.createOffer()
        .then(offer => rtcPeerConnection.setLocalDescription(offer))
        .catch(err => console.error(err));

      rtcPeerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          const candidate = event.candidate.candidate;
          const regex = /([0-9]{1,3}\.){3}[0-9]{1,3}/;
          const match = candidate.match(regex);
          if (match) {
            setIp(match[0]);
            rtcPeerConnection.close();
          }
        }
      };
    };

    getLocalIP();
  }, []);

  return (
    <>
      <div style={{ fontSize: "36px" }}>
        Иди нахуй IP: {ip || "Загрузка..."}
      </div>
    </>
  );
};

export default VoidProject;
