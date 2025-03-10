import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Spinner } from "./styles";

const Loader = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => (
  <div data-testid="component-loader" {...props}>
    <Spinner />
  </div>
);

export default Loader;
