import React from "react";
import { MainContainer } from "../components/MainContainer";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useData } from "../DataContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../components/PrimaryButton";
import { parsePhoneNumberFromString } from "libphonenumber-js";
const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email shoud have correct format")
    .required("Email is required!"),
});
function Step2() {
  const { data, setValues } = useData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setValues(data);
    navigate("/step3");
  };
  //   console.log({ ...register("hasPhone") });

  const hasPhone = watch("hasPhone");
  console.log({ hasPhone });
  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        🦄 Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />

        <FormControlLabel
          control={<Checkbox />}
          {...register("hasPhone")}
          label="do you have phone ?"
          color="primary"
          name="hasPhone"
        ></FormControlLabel>
        {hasPhone && (
          <Input
            {...register("phoneNumber")}
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            onChange={(e) => {
              console.log(normalizePhoneNumber(e.target.value));
              e.target.value = normalizePhoneNumber(e.target.value);
            }}
          />
        )}
        <PrimaryButton type="submit"> Next </PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default Step2;
