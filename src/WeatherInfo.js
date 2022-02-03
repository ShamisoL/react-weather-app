import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "@fortawesome/fontawesome-free/js/all.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>Hi, {props.data.city}👋🏾</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>
              <i class="fas fa-tint"></i> {props.data.humidity}%
            </li>
            <li>
              <i className="fas fa-wind"></i> {Math.round(props.data.wind)}mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
