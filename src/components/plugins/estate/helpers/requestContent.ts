import axios from "axios";

export const requestContent = async () => {
  const test = await axios.get(
    "http://zfyxdj.xa.gov.cn/zfrgdjpt/xmgs.aspx",
    {
      headers: {
        "Upgrade-Insecure-Requests": 1,
        "UserAgent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
      },
    }
  );

  console.log("pujunhao: ", test);
};
