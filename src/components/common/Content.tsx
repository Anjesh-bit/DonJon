import { Layout } from "antd";
import React, { ReactNode } from "react";

const { Content } = Layout;

interface AntdContentProps {
  classNames?: string;
  children?: ReactNode;
}

const AntdContent: React.FC<AntdContentProps> = ({ classNames, children }) => {
  return <Content className={classNames}>{children}</Content>;
};

export default AntdContent;
