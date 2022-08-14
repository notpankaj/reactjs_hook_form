import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { MainContainer } from "../components/MainContainer";
import { Typography } from "@material-ui/core";
import { PrimaryButton } from "../components/PrimaryButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useData } from "../DataContext";
const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

const Step1 = () => {
  const { setValues, data } = useData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setValues(data);
    navigate("/step2");
  };

  // console.log({ ...register("firstName") });
  // console.log({ errors });

  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          name="firstName"
          type="text"
          placeholder="First Name"
          error={!!errors?.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          name="lastName"
          type="text"
          placeholder="Last Name"
          error={!!errors?.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton type="submit"> Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
