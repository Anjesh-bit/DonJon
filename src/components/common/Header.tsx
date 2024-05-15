import { Layout } from "antd";
import React, { ReactNode } from "react";

const { Header } = Layout;

interface AntdHeaderProps {
  classnames?: string;
  children?: ReactNode;
  style?: Object;
}

const AntdHeader: React.FC<AntdHeaderProps> = ({
  classnames,
  children,
  style,
}) => {
  return (
    <Header className={classnames} style={style}>
      {children}
    </Header>
  );
};

export default AntdHeader;
