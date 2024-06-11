"use client"
import ReactApexChart from "react-apexcharts"

const PieChart = ({ title, value, series, colors }: any) => {
    return (
        <div className="flex min-h-[110px] flex-row  items-center  justify-between gap-2 rounded-xl border bg-white  p-3">
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">{title}</span>
                <span className="mt-1 text-2xl font-bold text-gray-900">
                    {value}
                </span>
            </div>

            <ReactApexChart
                options={{
                    chart: { type: "donut" },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}
                series={series}
                type="donut"
                width="120px"
            />
        </div>
    )
}

export default PieChart