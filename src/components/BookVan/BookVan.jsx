import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../shared/components/Button/Button.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // data picker default styles
import "./custom-datepicker.css"; // data picker custom styles
import css from "./BookVan.module.css";
import Icon from "../../shared/components/Icon/Icon.jsx";
import React from "react";

const yupSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .max(40, "Must be max 40 characters or less")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces."
    ),
  email: yup
    .string()
    .max(40, "Must be max 40 characters or less")
    .email()
    .required("Email is required"),
  selectedDate: yup.date().required("Date is required"),
});

const BookVan = () => {
  const {
    register,
    control,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
    mode: "onSubmit",
  });

  const onSubmit = (FormData) => {
    console.log(FormData);
    reset();
  };

  const clearDate = (fieldName) => {
    setValue(fieldName, null);
  };

  //!!!
  const DateInput = React.forwardRef(({ value, onClick }, ref) => (
    <div onClick={onClick}>
      <input
        readOnly
        ref={ref}
        className={css.calendarInput}
        placeholder="Booking date"
        value={value}
      />
      <Icon iconId="calendar" className={css.calendarIcon} />
    </div>
  ));

  DateInput.displayName = "DateInput";
  //!!!

  const CustomHeader = ({
    date,
    // changeMonth,
    decreaseMonth,
    increaseMonth,
  }) => {
    return (
      <div className={css.customDatepickerHeader}>
        <button
          type="button"
          // className="custom-datepicker-button custom-datepicker-button--previous"
          onClick={decreaseMonth}
        >
          <Icon iconId="arrow-left" className={css.arrowIcon} />
        </button>
        <span
        // className="custom-datepicker-month-year"
        >
          {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button
          type="button"
          // className="custom-datepicker-button custom-datepicker-button--next"
          onClick={increaseMonth}
        >
          <Icon iconId="arrow-right" className={css.arrowIcon} />
        </button>
      </div>
    );
  };

  return (
    <div className={css.bookingContent}>
      <div className={css.bookingHeader}>Book your campervan now</div>
      <div className={css.bookingText}>
        Stay connected! We are always ready to help you.
      </div>
      <form
        className={css.bookingForm}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
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
                // placeholderText="Booking date"
                renderCustomHeader={CustomHeader}
                customInput={
                  <DateInput
                    value={field.value}
                    onClick={field.onChange}
                    onClear={() => clearDate("selectedDate")}
                  />
                }
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />

          {watch("selectedDate") && (
            <Icon
              iconId="close-cross"
              className={css.iconClearSelectedDate}
              onClick={() => clearDate("selectedDate")}
            />
          )}
          {errors.selectedDate && (
            <span className={css.yupAlert}>{errors.selectedDate.message}</span>
          )}

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
