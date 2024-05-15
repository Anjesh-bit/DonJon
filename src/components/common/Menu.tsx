import { Menu } from "antd";
import React from "react";

interface AntdMenuProps {
  items?: any[];
  classnames?: string;
  mode?: string;
  style?: Object;
}

const AntdMenu: React.FC<AntdMenuProps> = ({
  items,
  classnames,
  mode,
  style,
  ...rest
}) => {
  return (
    <div>
      <Menu {...rest} items={items} className={classnames} style={style} />
    </div>
  );
};

export default AntdMenu;
