import React, { useState, useEffect } from "react";
import RadioButton from "../RadioButton";
import { Card, EquationInput, EquationLabel, EquationWrapper, InpOutWrapper, InpWrapper, NextFunctionSelect, Title } from "./style";
// import RadioButton from "./RadioButton";

export default function FunctionCard(props) {
  const {
    label,
    equation,
    nextFunction,
    input,
    setOutput,
    refInput,
    refOutput,
  } = props;
  const [currentEquation, setCurrentEquation] = useState(equation);
  const validateEquation = (eq) =>
    /^[0-9+\-*/^()\s]*([x]?[0-9+\-*/^()\s]*)*$/.test(eq) && !/\d+x/.test(eq);

  const calculateOutput = () => {
    try {
      const evaluatedOutput = eval(
        currentEquation.includes("^")
          ? currentEquation.replace(/x/g, input).replace(/\^/g, "**")
          : currentEquation.replace(/x/g, input)
      );
      setOutput(evaluatedOutput);
    } catch {
      setOutput(null);
    }
  };

  useEffect(() => {
    if (validateEquation(currentEquation)) {
      calculateOutput();
    } else {
      setOutput(null);
    }
  }, [input, currentEquation]);

  return (
    <Card>
      <Title>{label}</Title>
      <EquationWrapper>
        <EquationLabel>Equation</EquationLabel>
        <EquationInput
          type="text"
          value={currentEquation}
          onChange={(e) => setCurrentEquation(e.target.value)}
        />
      </EquationWrapper>

      <EquationWrapper>
        <EquationLabel>Next function</EquationLabel>
        <NextFunctionSelect disabled>
          <option>{nextFunction}</option>
        </NextFunctionSelect>
      </EquationWrapper>

      <InpOutWrapper>
        <InpWrapper>
          <div ref={refInput}>
            <RadioButton />
          </div>

          <div>input</div>
        </InpWrapper>
        <InpWrapper>
          <div>output</div>
          <div ref={refOutput}>
            <RadioButton />
          </div>
        </InpWrapper>
      </InpOutWrapper>
    </Card>
  );
}
