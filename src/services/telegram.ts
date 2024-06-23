import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const TELEGRAM_BOT_TOKEN = "7177787994:AAFjuOmkRxzlQElt4xDRFLjG61Bi6DBQUP4";
const CHAT_ID = "-4216568049";

export const sendMessageToTelegram = async (message: string) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
    });
    Notify.success("Message sent successfully");
  } catch (error) {
    Notify.failure(`Error sending message: ${error}`);
  }
};
