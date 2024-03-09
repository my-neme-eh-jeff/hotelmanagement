// Necessary imports from Ant Design and other libraries
import React, { useEffect, useState } from "react";
import { Menu, type MenuProps } from "antd";
import {
  BarChartOutlined,
  MenuOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

// Define types for TypeScript (optional but recommended for better type checking)
type MenuItem = Required<MenuProps>["items"][number];

type StaffMember = {
  id: number;
  name: string;
};

type StaffData = {
  senior: StaffMember[];
  entry: StaffMember[];
};

// Main component
export default function SideBarMenu() {
  const router = useRouter();
  const handlingNavigation = (e: any) => {
    if (e.keypath.length > 1) {
      router.push("staffanalytics" + `${e.key}`);
    } else {
      if (e.key === "inventory") {
        router.push(e.key);
      } else {
        router.push(e.key);
      }
    }
  };

  const [loading, setLoading] = useState(true);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Fetch staff data on component mount
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        let { data } = await axios.get(`http://localhost:3000/api/staff-data`);
        data = data.data;
        // const { data } = await axios.get(
        //   `https://48a8-2402-3a80-42a1-1a62-316e-4862-bd0b-afed.ngrok-free.app/inventory/staff/`
        // );
        const seniorStaffItems = data.senior.map((member: any) =>
          getItem(member.name, `${member.id}`)
        );
        const entryLevelStaffItems = data.entry.map((member: any) =>
          getItem(member.name, `${member.id}`)
        );
        const dynamicItems: MenuItem[] = [
          getItem("Analytics", "analytics", <BarChartOutlined />),
          getItem("Inventory", "inventory", <MenuOutlined />),
          getItem("Staff", "staff", <UserOutlined />, [
            getItem("Senior Staff", "senior", null, seniorStaffItems),
            getItem("Entry Level Staff", "entry", null, entryLevelStaffItems),
          ]),
          { type: "divider" },
          getItem(
            "General",
            "grp",
            null,
            [
              getItem("Settings", "13", <SettingOutlined />),
              getItem("Profile", "14", <ProfileOutlined />),
            ],
            "group"
          ),
        ];

        setMenuItems(dynamicItems);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  return loading ? (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="animate-spin" />
    </div>
  ) : (
    <Menu
      onClick={(e) => handlingNavigation(e)}
      className="!min-h-screen bg-white"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={menuItems}
    />
  );
}
