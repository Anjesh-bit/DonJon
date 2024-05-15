import { Layout } from "antd";
import React, { ReactNode } from "react";

const { Footer } = Layout;

interface AntdFooterProps {
  classnames?: string;
  children?: ReactNode;
}

const AntdFooter: React.FC<AntdFooterProps> = ({ classnames, children }) => {
  return <Footer className={classnames}>{children}</Footer>;
};

export default AntdFooter;
