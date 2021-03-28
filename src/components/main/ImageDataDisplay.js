import React, { useContext } from "react";
import { ThemeContext } from "ThemeContext/ThemeContext";
import { Col, Container, Row } from "reactstrap";
import { HorizontalBar } from "react-chartjs-2";

function ImageDataDisplay({ BACKEND_DOMAIN, ratingsArray, imageData }) {
  const { Themes } = useContext(ThemeContext);

  const dataHorBar = {
    labels: ["5", "4", "3", "2", "1"],
    datasets: [
      {
        label: "Percentage",
        backgroundColor: "#EC932F",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        barPercentage: 0.7,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          (ratingsArray.filter((x) => x === 5).length * 100) /
            ratingsArray.length,
          (ratingsArray.filter((x) => x === 4).length * 100) /
            ratingsArray.length,
          (ratingsArray.filter((x) => x === 3).length * 100) /
            ratingsArray.length,
          (ratingsArray.filter((x) => x === 2).length * 100) /
            ratingsArray.length,
          (ratingsArray.filter((x) => x === 1).length * 100) /
            ratingsArray.length,
        ],
      },
    ],
  };
  return (
    <div
      className="section section-buttons"
      style={{ backgroundColor: Themes.MainBgTheme }}
    >
      <Container>
        <div className="title">
          <h2 style={{ color: Themes.UiTextTheme }}>Data</h2>
        </div>
        <Row>
          <Col>
            <img src={`${BACKEND_DOMAIN}image/${imageData}`} alt={imageData} />
          </Col>
          <Col>
            <HorizontalBar
              legend={{ display: false }}
              options={{
                maintainAspectRatio: true,
                title: {
                  display: true,
                  text: "Ratings in Percenages",
                  fontSize: 14,
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                      },
                    },
                  ],
                },
              }}
              data={dataHorBar}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImageDataDisplay;

//     render() {
//       return (

//   <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
// </div>
