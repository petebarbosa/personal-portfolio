export const calculateExperience = () => {
  const startDate = new Date(2021, 4);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();

  if (monthDiff < 0) {
    years--;
  }

  const totalMonths = years * 12 + (monthDiff < 0 ? monthDiff + 12 : monthDiff);

  if (totalMonths < 12) {
    return "less than a year";
  } else if (years === 1) {
    return "1 year";
  } else {
    const monthsAfterYears = totalMonths % 12;
    if (monthsAfterYears === 0) {
      return `${years} years`;
    }
    return monthsAfterYears > 5 ? `almost ${years + 1} years` : `${years}+ years`;
  }
};
