"use client";
import { Layout } from "antd";
import SideBarMenu from "./SideBarMenu";
import { siteConfig } from "../../../../siteConfig";

const { Sider } = Layout;

interface SideBarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SidebarComponent({
  collapsed,
  setCollapsed,
}: SideBarProps) {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="bg-white min-h-screen"
    >
      <div className="h-32 bg-white flex align-middle place-items-center justify-center">
        <h1 className="text-2xl font-thin text-center ">
          {!collapsed ? siteConfig.name : ""}
        </h1>
      </div>
      <SideBarMenu />
    </Sider>
  );
}
