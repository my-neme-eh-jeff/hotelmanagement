"use client";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import ReactEChartsCore from "echarts-for-react/lib/core";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { EChartsCoreOption } from "echarts";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

export default function AllStaffBarChart() {
  const [options, setOptions] = useState<EChartsCoreOption>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllStaffAnalytics = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:3000/api/staff-analytics"
        );
        setOptions({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: [
              "Checked On Time",
              "Checked Late",
              "Defects Found",
              "No Defects",
            ],
          },
          grid: {
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: ["Mr. Aman Lavda", "Mrs. Eva Adam", "Mr. Harsh Bhadva"],
          },
          yAxis: {
            type: "value",
            name: "Number of Rooms",
          },
          series: data.data,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getAllStaffAnalytics();
  }, []);

  return !loading ? (
    <ReactEChartsCore
      echarts={echarts}
      style={{
        height: "600px",
        width: "90%",
        padding: "10px",
        border: "5px",
      }}
      className="h-96 w-96 p-4 rounded-lg"
      option={options}
      notMerge={true}
      lazyUpdate={true}
      opts={{ renderer: "canvas" }}
    />
  ) : (
    <div className="flex justify-center items-center ">
      <Loader2 className="animate-spin" />
    </div>
  );
}
