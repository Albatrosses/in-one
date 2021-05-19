import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { ScreenProtectorWrapper } from "./ScreenProtector.style";

const ScreenProtector: React.FC<any> = () => {
  const TRANQUIL_TIME = 10000;
  const [showScreenProtector, setScreenProtector] = useState(false);
  const [timeStamp, setTimeStamp] = useState(dayjs().format("HH:mm"));
  const [dateStamp, setDateStamp] = useState(dayjs().format("YYYY年MM月DD日"));
  const [week, setWeek] = useState(Number(dayjs().format("d")));
  const weekDay = [
    "星期天",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];

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
      setWeek(Number(dayjs().format("d")));
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
        <span>{weekDay[week]}</span>
      </div>
    </ScreenProtectorWrapper>
  );
};

export default ScreenProtector;
