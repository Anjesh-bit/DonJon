import { Outlet } from "react-router-dom";
import AntdHeader from "../components/common/Header";
import AntdMenu from "../components/common/Menu";
import { getRandomYellowShade } from "../utils/getRandomColor";
import AntdContent from "../components/common/Content";
import AntdFooter from "../components/common/Footer";
import { Layout } from "antd";

const DetailedLayout = () => {
  return (
    <Layout className="layout tracking-wider">
      <AntdHeader classnames="flex items-center header bg-[#000] py-[40px]">
        <AntdMenu
          style={{ background: getRandomYellowShade() }}
          mode="vertical"
          classnames="text-[#50d71e] text-center text-[25px] font-medium"
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `DND WEB`,
            };
          })}
        />
      </AntdHeader>
      <AntdContent>
        <Outlet />
      </AntdContent>
      <AntdFooter classnames="text-center text-[#fff] bg-[#000] font-semibold">
        DndWebsite ©2023 Created by Anjesh
      </AntdFooter>
    </Layout>
  );
};

export default DetailedLayout;
