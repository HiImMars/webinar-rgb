// import axios from "axios";
// import { useEffect } from "react";

// const TELEGRAM_BOT_TOKEN = "insert here";

// export const TelegramID = () => {
//   useEffect(() => {
//     const getUpdates = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`
//         );
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching updates:", error);
//       }
//     };

//     getUpdates();
//   }, []);

//   return <>response</>;
// };
