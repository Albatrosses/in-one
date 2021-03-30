import dayjs from "dayjs";
import solarLunar from "solarlunar-es";
import React, { useEffect, useState } from "react";
import { ScreenProtectorWrapper } from "./ScreenProtector.style";

const ScreenProtector: React.FC<any> = () => {
  const TRANQUIL_TIME = 10000;
  const [showScreenProtector, setScreenProtector] = useState(false);
  const [timeStamp, setTimeStamp] = useState(dayjs().format("HH:mm"));
  const [dateStamp, setDateStamp] = useState(dayjs().format("YYYY年MM月DD日"));
  const [solarLunarStamp, setSolarLunarStamp] = useState(solarLunar.solar2lunar(2015, 10, 8));

  useEffect(() => {
    let time = 0;
    if (!showScreenProtector) {
      time = setTimeout(() => {
        setScreenProtector(true);
      }, TRANQUIL_TIME);
    }
    return () => {
      clearTimeout(time);
    };
  }, [showScreenProtector]);

  useEffect(() => {
    setInterval(() => {
      setTimeStamp(dayjs().format("HH:mm"));
      setDateStamp(dayjs().format("YYYY年MM月DD日"));
    }, 1000);
  }, []);

  if (!showScreenProtector) {
    return null;
  }

  return (
    <ScreenProtectorWrapper onClick={() => setScreenProtector(false)}>
      <div className="hello-world">{"Hi Junhao, good job!"}</div>
      <div className="time-stamp">{timeStamp}</div>
      <div className="date-stamp">
        <span>{dateStamp}</span>
        <span>{solarLunarStamp.ncWeek}</span>
        <span>{solarLunarStamp.monthCn}</span>
        <span>{solarLunarStamp.dayCn}</span>
        <span>{solarLunarStamp.term}</span>
      </div>
    </ScreenProtectorWrapper>
  );
};

export default ScreenProtector;
