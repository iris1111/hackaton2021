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
    labels: [
      "Электроэнергия",
      "Орошение",
      "Содержание оборудования",
      "Прочие расходы",
    ],
    dataLabels: { enabled: true },

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
      showForSingleSeries: true,
      showForZeroSeries: true,
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
  const series = [44000, 10500, 43134, 7000];
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
      name: "",
      type: "column",
      data: [-1040, -505, -414, -171, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Прибыль",
      type: "line",
      data: [-1040, -505, -414, -171, 227, 413, 201, 352, 752, 320, 257, 160],
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
      <div className="result-item-last">
        <div className="result-item_subitem-top">
          <h1 className="result-item__title">Прибыль</h1>
          <Chart
            type="line"
            options={lineOptions}
            series={lineSeries}
            height={200}
          ></Chart>
        </div>
        <div className="result-item_subitem-bottom">
          <div className="card-total">
            <div className="card-total-title">Итог</div>
          </div>
          <div className="card-info">
            <div className="card-occup">
              <span>Срок окупаемости</span>
            </div>
            <div className="card-occup-number">5</div>
          </div>
          <div className="card-rent">Рентабельность</div>
          <div className="card-rent-value">Высокая</div>
        </div>
      </div>
    </div>
  );
}
export default Result;
