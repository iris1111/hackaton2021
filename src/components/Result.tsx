import { render } from "@testing-library/react";
import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import "../style/Result.css";
import {
  YMaps,
  Map,
  Circle,
  Polygon,
  GeoObject,
  YMapsApi,
  MapProps,
  Placemark,
  PlacemarkGeometry,
  GeoObjectProps,
} from "react-yandex-maps";

function Result(props) {
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
  const locations = require("../data/locations.json");
  const placemarks: GeoObjectProps<PlacemarkGeometry>[] = [
    {
      geometry: [56.675123, 48.072345],
      options: {
        hasBalloon: false,
        hasHint: false,
      },
    },
    {
      geometry: [56.6579, 48.097642],
    },
    {
      geometry: [56.688083, 47.993455],
    },
    {
      geometry: [56.593755, 47.69358],
    },
  ];

  const lineOptions: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1],
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        show: false,
        title: {
          text: "Website Blog",
        },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
        },
      },
    ],
  };

  const lineSeries = [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
  ];
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
        <h1 className="result-item__title">Карта региона</h1>
        <YMaps>
          <Map
            className="result-map"
            //   instanceRef={(map) => (mapRef = map)}
            defaultState={{ center: props.map.center, zoom: 10 }}
            //   onLoad={(ymaps) => getRegions(ymaps)}
            modules={[
              "borders",
              "ObjectManager",
              "geocode",
              "geoObject.addon.balloon",
              "geoObject.addon.hint",
            ]}
          >
            {placemarks.map((placemark) => {
              return <Placemark {...placemark}></Placemark>;
            })}
          </Map>
        </YMaps>
      </div>
      <div className="result-item">
        <div className="result-item_subitem-top">
          <h1 className="result-item__title">Экономический эффект</h1>
          <Chart
            type="line"
            options={lineOptions}
            series={lineSeries}
            height={200}
          ></Chart>
        </div>
        <div className="result-item_subitem-bottom">
          <div className="result-item_subitem-card"></div>
        </div>
      </div>
    </div>
  );
}
export default Result;
