import RadioButton from "../RadioButton";

const {
  Wrapper,
  Title,
  ValueContainer,
  VerticalLine,
  OutputValue,
} = require("./style");

const Output = (props) => {
  const { title, titleBgColor, outputValue, ref } = props;
  return (
    <Wrapper>
      <Title bg={titleBgColor}>{title}</Title>
      <ValueContainer bg={titleBgColor}>
        <div ref={ref}>
          <RadioButton customStyle={{ margin: "16px 12px" }} />
        </div>

        <VerticalLine />
        <OutputValue>{outputValue}</OutputValue>
      </ValueContainer>
    </Wrapper>
  );
};

export default Output;
