import React from "react";
import clsx from "clsx";
import { ExtendableStyles, Testable, WithChildren } from "@/utils/types";

export type CardProps = ExtendableStyles & Testable & WithChildren;

export function Card({ className, ...otherProps }: CardProps) {
  return (
    <article className={clsx(className, "border rounded")} {...otherProps} />
  );
}
