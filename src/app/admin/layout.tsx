"use client";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Avatar, Button, Dropdown, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import SidebarComponent from "@/app/admin/_components/SideBarComponent";

const { Header, Content } = Layout;

export default function AdminPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [menuVisible, setMenuVisible] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <UserOutlined style={{ marginRight: "15px" }} />
        Profile
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined style={{ marginRight: "15px" }} />
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <AntdRegistry>
      <Layout className="!min-h-screen overflow-x-clip">
        <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <Header
            style={{ padding: 0, background: colorBgContainer }}
            className="flex justify-between place-items-center"
          >
            <Button
              type="text"
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Dropdown
              overlay={menu}
              visible={menuVisible}
              onVisibleChange={setMenuVisible}
            >
              <Avatar
                style={{ marginRight: "16px" }}
                size={"default"}
                icon={<UserOutlined />}
                onClick={() => setMenuVisible(!menuVisible)}
              />
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <main className="m-6">{children}</main>
          </Content>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
}
