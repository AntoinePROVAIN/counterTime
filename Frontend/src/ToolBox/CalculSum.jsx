// utils/calculateSums.js

export const calculateSum = (monthArray) => {
    return monthArray.reduce((total, time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return total + hours*60 + minutes;
    }, 0);
  };
  
  export const calculateYearlySum = (months) => {
    return Object.values(months).reduce((total, monthArray) => {
      return total + calculateSum(monthArray);
    }, 0);
  };
