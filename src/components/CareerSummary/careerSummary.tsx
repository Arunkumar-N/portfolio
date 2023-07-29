import React, { ReactElement } from "react";
import { OrangeRedTitle } from "../../theme/styles";
import { CAREER_SUMMARY } from "./constant";

export default function CareerSummary(): ReactElement {
  return (
    <>
      <OrangeRedTitle>Career Summary</OrangeRedTitle>
      <ul>
        {CAREER_SUMMARY.map((summary, index) => (
          <li key={index}>{summary}</li>
        ))}
      </ul>
    </>
  );
}
