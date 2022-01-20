/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { AccountButton } from "../components/molecules";
import { SellerCard } from "../components/molecules/Card";
import { FormInput, FormCheckBox } from "../components/molecules";

export default {
  title: "molecules",
  component: SellerCard,
};

export const productCard = () => {
  return <SellerCard />;
};

export const accountButton = () => {
  return <AccountButton />;
};

export const formInput = () => {
  return <FormInput />;
};

export const formCheckBox = () => {
  return <FormCheckBox />;
};
