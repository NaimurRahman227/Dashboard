import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Cell,
} from "recharts";


const data = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 45 },
  { day: "Sun", value: 75 },
];

const ProjectAnalysis = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full md:h-80 felx flex-col card-hover min-h-[250px] ">
      <h3 className="font-semibold mb-6">Projects Analysis</h3>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          {/* SVG Pattern for Stripes */}
          <defs>
            <pattern
              id="striped"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform="rotate(45)"
            >
              <rect width="6" height="6" fill="#ffffff" />
              <line
                x1="0"
                y="0"
                x2="0"
                y2="6"
                stroke="#16a34a"
                strokeWidth="3"
              />
            </pattern>
          </defs>

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          <Bar
            dataKey="value"
            radius={[50, 50, 50, 50]} // full capsule
            barSize={45}
          >
            {data.map((entry, index) => {
              // First 3 + Last 2 striped
              if (index <= 2 || index >= 5) {
                return <Cell key={index} fill="url(#striped)" />;
              }

              // Middle bars solid shades
              const colors = ["#14532d", "#16a34a", "#86efac"];
              return (
                <Cell
                  key={index}
                  fill={colors[index - 3]}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectAnalysis;