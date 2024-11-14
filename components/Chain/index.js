import React, { useState, useRef, useLayoutEffect } from "react";
import { AboveRow, BottomRow, ChainContainer, SvgContainer, Path } from "./style";
import InputContainer from "../InputContainer";
// import FunctionCard from "../functionCard";
import Output from "../InpOut";
import FunctionCard from "../FunctionCard";
// import FunctionCard from "../functionCard";

export default function Chain() {
  const [initialInput, setInitialInput] = useState(2);
  const [outputs, setOutputs] = useState({ 1: initialInput });
  const [paths, setPaths] = useState([]);

  const containerRef = useRef(null);

  // Refs for each function card and InputContainer
  const inputContainerOutputRef = useRef(null); // Ref for InputContainer output
  const function1InputRef = useRef(null);
  const function2InputRef = useRef(null);
  const function3InputRef = useRef(null);
  const function4InputRef = useRef(null);
  const function5InputRef = useRef(null);

  const function1OuputRef = useRef(null);
  const function2OuputRef = useRef(null);
  const function3OuputRef = useRef(null);
  const function4OuputRef = useRef(null);
  const function5OuputRef = useRef(null);
  const finalOutputRef = useRef(null); // Ref for final Output

  const handleOutputChange = (fnId, output) => {
    setOutputs((prevOutputs) => ({ ...prevOutputs, [fnId]: parseFloat(output) || 0 }));
  };

  // Function for generating a curved line
  const getCurvePath = (fromRef, toRef) => {
    if (fromRef.current && toRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
      const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
      const toX = toRect.left - containerRect.left + toRect.width / 2;
      const toY = toRect.top - containerRect.top + toRect.height / 2;

      const controlX = (fromX + toX) / 2;
      const controlY = Math.max(fromY, toY) + 80;

      return `M ${fromX},${fromY} Q ${controlX},${controlY} ${toX},${toY}`;
    }
    return "";
  };

  // Function for generating a straight line
  const getStraightLinePath = (fromRef, toRef) => {
    if (fromRef.current && toRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
      const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
      const toX = toRect.left - containerRect.left + toRect.width / 2;
      const toY = toRect.top - containerRect.top + toRect.height / 2;

      return `M ${fromX},${fromY} L ${toX},${toY}`; // Straight line
    }
    return "";
  };

  useLayoutEffect(() => {
    // Delay to ensure layout is fully stable
    const timer = setTimeout(() => {
      // Recalculate paths after delay
      setPaths([
        getStraightLinePath(inputContainerOutputRef, function1InputRef), // Straight line from InputContainer to Function 1
        getCurvePath(function1OuputRef, function2InputRef),
        getCurvePath(function2OuputRef, function4InputRef),
        getCurvePath(function4OuputRef, function5InputRef),
        getCurvePath(function5OuputRef, function3InputRef),
        getStraightLinePath(function3OuputRef, finalOutputRef), // Straight line from Function 3 to Output
      ]);
    }, 50);

    return () => clearTimeout(timer);
  }, [outputs]); // Depend on outputs to recalculate when they change

  return (
    <ChainContainer ref={containerRef}>
      <AboveRow>
        <InputContainer
          title={"Initial value of x"}
          titleBgColor={"#e29c29"}
          initialInput={initialInput}
          setInitialInput={setInitialInput}
          setOutputs={setOutputs}
          refOutput={inputContainerOutputRef} // Ref for InputContainer output
        />
        <BottomRow>
          <FunctionCard
            refInput={function1InputRef}
            refOutput={function1OuputRef}
            label="Function: 1"
            equation="x^2"
            nextFunction="Function 2"
            input={outputs[1]}
            setOutput={(output) => handleOutputChange(2, output)}
          />
          <FunctionCard
            refInput={function2InputRef}
            refOutput={function2OuputRef}
            label="Function: 2"
            equation="2*x+4"
            nextFunction="Function 4"
            input={outputs[2]}
            setOutput={(output) => handleOutputChange(4, output)}
          />
          <FunctionCard
            refInput={function3InputRef}
            refOutput={function3OuputRef}
            label="Function: 3"
            equation="x^2+20"
            nextFunction="-"
            input={outputs[3]}
            setOutput={(output) => handleOutputChange("final", output)}
          />
        </BottomRow>
        <Output
          ref={finalOutputRef} // Ref for final Output
          title={"Final Output y"}
          titleBgColor={"#4bb079"}
          outputValue={outputs["final"]}
        />
      </AboveRow>

      <SvgContainer>
        {paths.map((d, index) => (
          <Path key={index} d={d} />
        ))}
      </SvgContainer>

      <BottomRow>
        <FunctionCard
          refInput={function4InputRef}
          refOutput={function4OuputRef}
          label="Function: 4"
          equation="x-2"
          nextFunction="Function 5"
          input={outputs[4]}
          setOutput={(output) => handleOutputChange(5, output)}
        />
        <FunctionCard
          refInput={function5InputRef}
          refOutput={function5OuputRef}
          label="Function: 5"
          equation="x/2"
          nextFunction="Function 3"
          input={outputs[5]}
          setOutput={(output) => handleOutputChange(3, output)}
        />
      </BottomRow>
    </ChainContainer>
  );
}
