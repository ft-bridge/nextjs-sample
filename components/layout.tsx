import { Container } from "@material-ui/core";
import { FC } from "react";

const Layout: FC = ({ children }) => (
  <Container>
    <div>{children}</div>;
  </Container>
);

export default Layout;
