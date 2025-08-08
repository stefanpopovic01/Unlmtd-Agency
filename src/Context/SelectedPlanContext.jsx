import { createContext, useContext, useState } from "react";

const SelectedPlanContext = createContext();

export const SelectedPlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null); // example: { page: 'Fashion', package: 'Basic' }

  return (
    <SelectedPlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </SelectedPlanContext.Provider>
  );
};

export const useSelectedPlan = () => useContext(SelectedPlanContext);
