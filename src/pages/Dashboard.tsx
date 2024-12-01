import PerformanceCard from "../components/PerformanceCard";

const Dashboard = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
        <PerformanceCard
          progress={10}
          showMiniCircle={true}
          label={"Teachers"}
          sx={{
            strokeColor: "red",
            bgColor: { color: "ffffff", transparency: "" },
            barWidth: 5,
            valueSize: undefined,
            valueColor: "#000",
            textSize: undefined,
            textColor: "#000",
            miniCircleColor: "red",
            miniCircleSize: undefined,
            valueAnimation: true,
            intersectionEnabled: undefined,
          }}
        />
        <PerformanceCard
          progress={60}
          showMiniCircle={true}
          label={"Students"}
          sx={{
            strokeColor: "red",
            bgColor: { color: "ffffff", transparency: "" },
            barWidth: 5,
            valueSize: undefined,
            valueColor: "#000",
            textSize: undefined,
            textColor: "#000",
            miniCircleColor: "red",
            miniCircleSize: undefined,
            valueAnimation: true,
            intersectionEnabled: undefined,
          }}
        />
      </div>
    </>
  );
};

export default Dashboard;
