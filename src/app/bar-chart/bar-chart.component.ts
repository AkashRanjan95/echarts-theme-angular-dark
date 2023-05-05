import { AfterViewInit, Component, OnInit } from "@angular/core";
import { BarChart } from "echarts/charts";
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";


@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit, AfterViewInit {
  readonly echartsExtentions: any[];
  echartsOptions: object = {};

  current_theme = {
    "version": 1,
    "themeName": "dark",
    "theme": {
      "seriesCnt": "4",
      "backgroundColor": "rgba(51,51,51,1)",
      "titleColor": "#eeeeee",
      "subtitleColor": "#aaaaaa",
      "textColorShow": false,
      "textColor": "#333",
      "markTextColor": "#eeeeee",
      "color": [
        "#dd6b66",
        "#759aa0",
        "#e69d87",
        "#8dc1a9",
        "#ea7e53",
        "#eedd78",
        "#73a373",
        "#73b9bc",
        "#7289ab",
        "#91ca8c",
        "#f49f42"
      ],
      "borderColor": "#ccc",
      "borderWidth": 0,
      "visualMapColor": [
        "#bf444c",
        "#d88273",
        "#f6efa6"
      ],
      "legendTextColor": "#eeeeee",
      "kColor": "#fd1050",
      "kColor0": "#0cf49b",
      "kBorderColor": "#fd1050",
      "kBorderColor0": "#0cf49b",
      "kBorderWidth": 1,
      "lineWidth": 2,
      "symbolSize": 4,
      "symbol": "circle",
      "symbolBorderWidth": 1,
      "lineSmooth": false,
      "graphLineWidth": 1,
      "graphLineColor": "#aaaaaa",
      "mapLabelColor": "#000",
      "mapLabelColorE": "rgb(100,0,0)",
      "mapBorderColor": "#444",
      "mapBorderColorE": "#444",
      "mapBorderWidth": 0.5,
      "mapBorderWidthE": 1,
      "mapAreaColor": "#eee",
      "mapAreaColorE": "rgba(255,215,0,0.8)",
      "axes": [
        {
          "type": "all",
          "name": "通用坐标轴",
          "axisLineShow": true,
          "axisLineColor": "#eeeeee",
          "axisTickShow": true,
          "axisTickColor": "#eeeeee",
          "axisLabelShow": true,
          "axisLabelColor": "#eeeeee",
          "splitLineShow": true,
          "splitLineColor": [
            "#aaaaaa"
          ],
          "splitAreaShow": false,
          "splitAreaColor": [
            "rgba(250,250,250,0.3)",
            "rgba(200,200,200,0.3)"
          ]
        },
        {
          "type": "category",
          "name": "类目坐标轴",
          "axisLineShow": true,
          "axisLineColor": "#333",
          "axisTickShow": true,
          "axisTickColor": "#333",
          "axisLabelShow": true,
          "axisLabelColor": "#333",
          "splitLineShow": false,
          "splitLineColor": [
            "#ccc"
          ],
          "splitAreaShow": false,
          "splitAreaColor": [
            "rgba(250,250,250,0.3)",
            "rgba(200,200,200,0.3)"
          ]
        },
        {
          "type": "value",
          "name": "数值坐标轴",
          "axisLineShow": true,
          "axisLineColor": "#333",
          "axisTickShow": true,
          "axisTickColor": "#333",
          "axisLabelShow": true,
          "axisLabelColor": "#333",
          "splitLineShow": true,
          "splitLineColor": [
            "#ccc"
          ],
          "splitAreaShow": false,
          "splitAreaColor": [
            "rgba(250,250,250,0.3)",
            "rgba(200,200,200,0.3)"
          ]
        },
        {
          "type": "log",
          "name": "对数坐标轴",
          "axisLineShow": true,
          "axisLineColor": "#333",
          "axisTickShow": true,
          "axisTickColor": "#333",
          "axisLabelShow": true,
          "axisLabelColor": "#333",
          "splitLineShow": true,
          "splitLineColor": [
            "#ccc"
          ],
          "splitAreaShow": false,
          "splitAreaColor": [
            "rgba(250,250,250,0.3)",
            "rgba(200,200,200,0.3)"
          ]
        },
        {
          "type": "time",
          "name": "时间坐标轴",
          "axisLineShow": true,
          "axisLineColor": "#333",
          "axisTickShow": true,
          "axisTickColor": "#333",
          "axisLabelShow": true,
          "axisLabelColor": "#333",
          "splitLineShow": true,
          "splitLineColor": [
            "#ccc"
          ],
          "splitAreaShow": false,
          "splitAreaColor": [
            "rgba(250,250,250,0.3)",
            "rgba(200,200,200,0.3)"
          ]
        }
      ],
      "axisSeperateSetting": false,
      "toolboxColor": "#999999",
      "toolboxEmphasisColor": "#666666",
      "tooltipAxisColor": "#eeeeee",
      "tooltipAxisWidth": "1",
      "timelineLineColor": "#eeeeee",
      "timelineLineWidth": 1,
      "timelineItemColor": "#dd6b66",
      "timelineItemColorE": "#a9334c",
      "timelineCheckColor": "#e43c59",
      "timelineCheckBorderColor": "rgba(194,53,49,0.5)",
      "timelineItemBorderWidth": 1,
      "timelineControlColor": "#eeeeee",
      "timelineControlBorderColor": "#eeeeee",
      "timelineControlBorderWidth": 0.5,
      "timelineLabelColor": "#eeeeee",
      "datazoomBackgroundColor": "rgba(47,69,84,0)",
      "datazoomDataColor": "rgba(255,255,255,0.3)",
      "datazoomFillColor": "rgba(167,183,204,0.4)",
      "datazoomHandleColor": "#a7b7cc",
      "datazoomHandleWidth": "100",
      "datazoomLabelColor": "#eeeeee"
    }
  }

  constructor() {
    this.echartsExtentions = [
      BarChart,
      TooltipComponent,
      GridComponent,
      LegendComponent,
    ];
  }

  ngOnInit() {
    this.echartsOptions = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "8%",
        top: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value"
      },
      yAxis: {
        type: "category",
        data: ["sat", "sun", "mon", "tue", "wed", "thu", "fri"],
        axisLabel: {
          interval: 0,
          rotate: 15
        }
      },
      legend: {
        data: ["jan", "feb"],
        bottom: 0
      },
      series: [
        {
          name: "jan",
          type: "bar",
          data: [10, 15, 17, 4, 15, 31, 2]
        },
        {
          name: "feb",
          type: "bar",
          data: [1, 17, 12, 11, 40, 3, 21]
        }
      ]
    };
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
}
