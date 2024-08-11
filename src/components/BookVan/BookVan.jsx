import { useForm, Controller } from "react-hook-form";
import Button from "../../shared/components/Button/Button.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookVan.module.css";

const BookVan = () => {
  const {
    register,
    control,
    handleSubmit,
    // setValue,
    // watch,
    // clearErrors,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(userSettingsFormSchema),
    mode: "onSubmit",
    //   defaultValues = {},
  });

  const onSubmit = (FormData) => {
    console.log(FormData);
  };

  return (
    <div className={css.bookingContent}>
      <div className={css.bookingHeader}>Book your campervan now</div>
      <div className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </div>
      <form className={css.bookingForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formInputs}>
          <input
            className={css.formInput}
            type="text"
            id="name"
            maxLength="40"
            placeholder="Name"
            autoComplete="off"
            {...register("name")}
          />
          {errors.name && (
            <span className={css.yupAlert}>{errors.name.message}</span>
          )}
          <input
            className={css.formInput}
            type="email"
            id="email"
            maxLength="40"
            placeholder="Email"
            autoComplete="off"
            {...register("email")}
          />
          {errors.email && (
            <span className={css.yupAlert}>{errors.email.message}</span>
          )}

          <Controller
            name="selectedDate"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                className={css.calendarInput}
                placeholderText="Выберите дату"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />

          <textarea
            className={css.formMultiInput}
            type="text"
            id="comment"
            placeholder="Comment"
            autoComplete="off"
            {...register("comment")}
          />
          {errors.comment && (
            <span className={css.yupAlert}>{errors.comment.message}</span>
          )}
        </div>

        <Button className={css.bookingButton} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default BookVan;
