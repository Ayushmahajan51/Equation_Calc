import RadioButton from "../RadioButton";
import { Input } from "./style";

const {
  Wrapper,
  Title,
  VerticalLine,
  ValueContainer,
} = require("../InpOut/style");

const InputContainer = (props) => {
  const {
    title,
    titleBgColor,
    initialInput,
    setInitialInput,
    setOutputs,
    refOutput,
  } = props;
  return (
    <Wrapper>
      <Title bg={titleBgColor}>{title}</Title>
      <ValueContainer bg={titleBgColor}>
        <Input
          type="number"
          value={initialInput}
          onChange={(e) => {
            setInitialInput(Number(e.target.value));
            setOutputs({ 1: Number(e.target.value) });
          }}
        />
        <VerticalLine />
        <div ref={refOutput}>
          <RadioButton customStyle={{ margin: "16px 12px" }} />
        </div>
      </ValueContainer>
    </Wrapper>
  );
};

export default InputContainer;
