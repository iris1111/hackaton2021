import { Button } from "antd";
import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";
import {
  GeoObjectProps,
  Map,
  Placemark,
  PlacemarkGeometry,
  YMaps,
} from "react-yandex-maps";
import "../style/Result.css";

function Result(props) {
  const options: ApexOptions = {
    labels: ["Электроэнергия", "Орошение", "Содержание оборудования"],
    dataLabels: { enabled: true },
    colors: [
      function ({ value, seriesIndex, w }) {
        return "#205868";
      },
      function ({ value, seriesIndex, w }) {
        return "#00ff00";
      },
      function ({ value, seriesIndex, w }) {
        return "#0000ff";
      },
    ],
    chart: {
      width: "100%",
    },
    legend: {
      show: true,
      position: "bottom",
      formatter: function (seriesName, opts) {
        return (
          seriesName +
          " <br /> <strong>" +
          series[opts.seriesIndex] +
          "</strong>"
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
  const series = [44000, 10500, 43134];
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
      "01 Dec 2021",
      "02 Jul 2021",
      "01 Dec 2022",
      "02 Jul 2022",
      "01 Dec 2023",
      "02 Jul 2023",
      "01 Dec 2024",
      "02 Jul 2024",
      "01 Dec 2025",
      "02 Jul 2025",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        show: false,
        title: {
          text: "-",
        },
      },
      {
        opposite: true,
        title: {
          text: "Прибыль",
        },
      },
    ],
  };

  const lineSeries = [
    {
      name: "",
      type: "column",
      data: [-1040, -705, -814, -571, -427, -113, -201, 2, -12, 320, 457, 660],
    },
    {
      name: "Прибыль",
      type: "line",
      data: [-1040, -705, -814, -571, -427, -113, -201, 2, -12, 320, 457, 660],
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
          <Button type="primary" className="submitButton submitButtonWhite">
            Сохранить в PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Result;
