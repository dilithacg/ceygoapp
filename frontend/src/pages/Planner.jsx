import React from "react";
import PlannerForm from "../components/planner/PlannerForm";
import PlannerResult from "../components/planner/PlannerResult";

const Planner = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <PlannerForm />
      <PlannerResult />
    </div>
  );
};

export default Planner;
