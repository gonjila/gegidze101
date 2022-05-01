import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { reportsContext } from "../../context/reportsCtx";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ projects, productsPrices }) {
  const { totalAmount } = useContext(reportsContext);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const chartData = {
    labels: projects.map((project) => project.name),
    datasets: [
      {
        label: "# of Votes",
        data: productsPrices.map((price) => (price * 100) / totalAmount),
        backgroundColor: projects.map(
          () => `rgba(${255}, ${getRandomInt(255)}, ${getRandomInt(255)}, 1)`
        ),
        borderColor: projects.map(
          () =>
            `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(
              255
            )}, 1)`
        ),
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chartData} />;
}

export default DoughnutChart;
