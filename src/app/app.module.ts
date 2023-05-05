import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { EchartsxModule } from "echarts-for-angular";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";

@NgModule({
  imports: [BrowserModule, FormsModule, EchartsxModule],
  declarations: [AppComponent, HelloComponent, BarChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
