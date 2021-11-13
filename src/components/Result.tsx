import { render } from "@testing-library/react";
import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";
import "../style/Result.css";
function Result() {
  const options: ApexOptions = {
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
    dataLabels: { enabled: false },
    chart: {
      width: "100%",
    },
    legend: {
      show: true,
      position: "bottom",
      formatter: function (seriesName, opts) {
        console.log(seriesName, opts);
        return (
          seriesName + " - <strong>" + series[opts.seriesIndex] + "</strong>"
        );
      },
    },
    fill: {
      type: "gradient",
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
            },
          },
        },
      },
    },
  };

  const series = [44, 55, 41, 17, 15];
  return (
    <div className="result-content">
      <div className="result-item">
        <h1 className="result-item__title">План расходов</h1>
        <Chart
          type="donut"
          options={options}
          series={series}
          height={550}
        ></Chart>
      </div>
      <div className="result-item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        ducimus alias sint amet maxime dolore et explicabo culpa. Atque quo
        laudantium inventore odio aliquam vero temporibus repudiandae. Illo, eum
        in.
      </div>
      <div className="result-item">
        <div className="result-item_subitem-top"></div>
        <div className="result-item_subitem-bottom"></div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolor
        suscipit distinctio voluptate ipsam recusandae repudiandae. Velit
        laborum reprehenderit adipisci, et nemo quos consequuntur, delectus
        accusantium rem sed eligendi. Pariatur.
      </div>
    </div>
  );
}
export default Result;
