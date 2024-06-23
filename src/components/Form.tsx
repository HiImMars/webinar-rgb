import { useForm, SubmitHandler } from "react-hook-form";
import { useMediaQuery } from "usehooks-ts";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendMessageToTelegram } from "../services/telegram";

type Inputs = {
  name: string;
  phone: string;
  email: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const isTabletOrDesktop = useMediaQuery("(min-width: 768px)");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const message = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`;
    await sendMessageToTelegram(message);

    reset();
    setValue("phone", "");
    const phoneInputElement = document.querySelector(
      ".react-tel-input .form-control"
    ) as HTMLInputElement;
    if (phoneInputElement) {
      phoneInputElement.value = "";
    }
  };

  return (
    /* "handleSubmit" will validate inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[328px] min-h-[423px] md:max-w-3xl large:max-w-[366px] large:max-h-[474px] bg-[#303A53] mx-auto mt-4 large:mt-0 py-8 px-6 rounded-lg flex flex-col gap-4"
    >
      <p className="font-bold text-xl text-center">
        Запишитесь <span className="text-redAccent">бесплатно</span> и получите
        подарок
      </p>
      <input
        className="bg-inputBg rounded p-3"
        placeholder="Ваше имя и фамилия"
        {...register("name", { required: true, maxLength: 30 })}
      />
      {errors.name && (
        <span className="text-redAccent">This field is required</span>
      )}
      <PhoneInput
        inputClass="inputClass"
        buttonClass="buttonClass"
        dropdownClass="dropdownClass"
        country={"ua"}
        onChange={(value) => setValue("phone", value, { shouldValidate: true })}
        inputProps={{
          name: "phone",
          required: true,
        }}
        specialLabel=""
      />
      <input
        type="hidden"
        {...register("phone", {
          required: true,
          validate: (value) => value.length >= 9,
        })}
      />
      {errors.phone && (
        <span className="text-redAccent">
          {errors.phone.type === "validate"
            ? "Phone number is too short"
            : "This field is required"}
        </span>
      )}
      <input
        className="bg-inputBg rounded p-3"
        placeholder="Ваш email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-redAccent">This field is required</span>
      )}

      <button
        type="submit"
        className={`font-bold rounded px-6 py-4 mx-auto transition-colors ${
          isTabletOrDesktop
            ? "bg-redAccent hover:bg-[#FF5C81]"
            : "bg-[#0048FF] hover:bg-[#2870FF]"
        }`}
      >
        Записаться бесплатно
      </button>
      <p className="mx-auto text-center text-xs opacity-50 max-w-56">
        Нажимая на кнопку я соглашаюсь <br />
        <span className="underline cursor-pointer">
          с политикой конфидециальности
        </span>
      </p>
    </form>
  );
};
