import { AllHTMLAttributes, ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

import { colors } from "~/features/ui/theme/colors";

import { PencilIcon } from "./icons/pencil";

type Props = AllHTMLAttributes<HTMLInputElement> & {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const StyledLabel = styled.label<{ $hasFocus: boolean }>`
  --dominant-color: ${(props) =>
    props.$hasFocus ? colors.text.default : colors.text.hover};
  display: flex;
  svg {
    align-self: flex-end;
    margin-left: 1.2rem;
    path {
      fill: var(--dominant-color);
    }
  }
  input {
    color: var(--dominant-color);
    border-color: var(--dominant-color);
  }
`;
const StyledInput = styled.input`
  flex: 1;
  border-bottom: 1px solid ${colors.text.default};
  padding: 1.2rem 0.8rem 0.8rem 0.8rem;
  outline: none;
`;

const Input: FC<Props> = ({
  onChange,
  type,
  name,
  value,
  placeholder,
  className,
}) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  return (
    <StyledLabel className={className} $hasFocus={hasFocus}>
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <PencilIcon hasFocus={hasFocus} />
    </StyledLabel>
  );
};

export { Input };
