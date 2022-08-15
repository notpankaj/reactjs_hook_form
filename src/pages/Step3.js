import { Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import { MainContainer } from "../components/MainContainer";
import { useData } from "../DataContext";
import { PrimaryButton } from "../components/PrimaryButton";
import FileInput from "../components/FileInput";

function Step3() {
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setValues(data);
    navigate("/result");
  };

  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput control={control} name="files" />
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default Step3;
