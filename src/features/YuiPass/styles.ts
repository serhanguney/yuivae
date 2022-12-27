import { m } from "framer-motion";
import styled from "styled-components";

import { Input } from "~/features/ui/components/Input";
import { colors } from "~/features/ui/theme/colors";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const YuiPassLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: clamp(33rem, 50vw, 70rem);
  // height: 70rem;
`;

const YuiPassTitle = styled.h1`
  ${typography.pageTitle};
  display: flex;
  justify-content: center;
  margin-top: clamp(8rem, 14vw, 20rem);
  margin-bottom: 3rem;
  .stroked {
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  span {
    display: inline-block;
    overflow: hidden;
    height: min-content;
  }
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

const YuiPassList = styled.ol`
  ${typography.p};
  list-style-position: inside;
`;
const YuiPassForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
  ${mediaQueries.mobileMax} {
    width: 100%;
  }
`;
const YuiPassInput = styled(Input)`
  width: 100%;
  max-width: 35rem;
  margin-bottom: 2rem;
`;

const YuiPassHash = styled(m.button)`
  ${typography.h2};
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  letter-spacing: 0.4rem;
  color: ${colors.text.default};
  max-width: 35rem;
  margin-top: 2rem;

  span {
    display: inline-block;
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media (hover: hover) {
    &:hover {
      color: ${colors.secondary.default};
    }
  }
  &:active {
    color: ${colors.secondary.default};
  }
  svg {
    margin-left: 2rem;
    color: inherit;
  }
`;

const Notification = styled(m.p)<{ $isError?: boolean }>`
  ${typography.p};
  margin-top: 3rem;
  color: ${(props) =>
    props.$isError ? colors.destructive.default : colors.secondary.default};
  svg {
    color: inherit;
    margin-right: 1.2rem;
  }
`;
export {
  Notification,
  YuiPassBody,
  YuiPassForm,
  YuiPassHash,
  YuiPassInput,
  YuiPassLayout,
  YuiPassList,
  YuiPassTitle,
};
