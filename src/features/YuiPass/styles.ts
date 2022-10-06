import { m } from "framer-motion";
import styled from "styled-components";

import { Input } from "~/features/ui/components/Input";
import { elevations } from "~/features/ui/theme/elevations";
import { typography } from "~/features/ui/theme/typography";

const YuiPassLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: clamp(30rem, 50vw, 70rem);
`;

const YuiPassTitle = styled.h1`
  ${typography.h1};
  font-size: 7.5rem;
`;

const YuiPassBody = styled.p`
  ${typography.p};
  text-align: center;
  line-height: 1.7;
  span {
    white-space: nowrap;
    font-weight: bold;
  }
`;

const YuiPassForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
`;
const YuiPassInput = styled(Input)`
  width: 100%;
  margin-bottom: 2rem;
`;

const YuiPassHash = styled(m.h2)`
  ${typography.h2};
  font-size: 2.5rem;
  letter-spacing: 0.4rem;
`;
export {
  YuiPassBody,
  YuiPassForm,
  YuiPassHash,
  YuiPassInput,
  YuiPassLayout,
  YuiPassTitle,
};