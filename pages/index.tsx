import React, { useEffect, useState } from "react";
import ds from './png-clipart-roblox-corporation-youtube-newbie-product-design-roblox-character-naruto-roblox-character-thumbnail.png'

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
      <div style={{display: "flex"}}>
        <Image src={ds} alt={"dsds"} width={200} height={200}/>
        <div style={{fontSize: '45px'}}>Твоё имя на языке роблокс</div>
      </div>
      <div style={{display: "flex"}}>
        <div style={{marginRight: '50px'}}>Номер карты</div>
        <input placeholder={"0000 0000 0000 0000"}></input>
      </div>
      <div style={{display: "flex"}}>
        <div style={{marginRight: '50px'}}>Действительно до</div>
        <input style={{width: '20px'}} placeholder={"мм"}></input>\
        <input style={{width: '20px'}} placeholder={"гг"}></input>
      </div>
      <div style={{display: "flex"}}>
        <div style={{marginRight: '50px'}}>Имя держателя карты</div>
        <input placeholder={"Имя держателя карты"}></input>
      </div>
      <div style={{display: "flex"}}>
        <div style={{marginRight: '50px'}}>CV2/CCV2</div>
        <input placeholder={"***"}></input>
      </div>
    </>
  );
};

export default VoidProject;
