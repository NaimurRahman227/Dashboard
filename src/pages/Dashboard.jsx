import { useEffect, useState } from "react";
import api from "../api/axios";
import Layout from "../components/layout/layout";
import DashboardGrid from "../components/dashboard/DashboardGrid";
import StatsSection from "../components/dashboard/StatsSection";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/dashboard");
        setData(res.data);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh] text-gray-500">
          Loading dashboard...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4 sm:p-6 lg:p-6">
        <StatsSection/>
        <DashboardGrid data={data} />
      </div>
    </Layout>
  );
};

export default Dashboard;