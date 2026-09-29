import React from "react";
import { fetchData } from "../service/OrcService";
import { useEffect, useState } from "react";

export default function Contacts() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLeads = async () => {
      try {
        setLoading(true);

        const response = await fetchData({
          module: "Leads",
        });

        console.log("API Response:", response);

        setLeads(response.records || []);
      } catch (err) {
        console.error("Fetch Leads Error:", err);

        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getLeads();
  }, []);

  if (loading) {
    return <div>Loading Leads...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Leads</h1>

      {leads.map((lead) => (
        <div key={lead.id}>
          <h3>{lead.name}</h3>

          <p>{lead.email}</p>
        </div>
      ))}
    </div>
  );
}
