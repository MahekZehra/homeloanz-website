export const calculateMortgage = (
  propertyPrice,
  downPaymentPercent,
  interestRate,
  tenureYears
) => {

  const downPaymentAmount =
    propertyPrice * (downPaymentPercent / 100);


  const loanAmount =
    propertyPrice - downPaymentAmount;


  const monthlyInterest =
    interestRate / 100 / 12;


  const totalMonths =
    tenureYears * 12;


  const monthlyPayment =
    loanAmount *
    monthlyInterest *
    Math.pow(1 + monthlyInterest, totalMonths) /
    (Math.pow(1 + monthlyInterest, totalMonths) - 1);



  const totalPayment =
    monthlyPayment * totalMonths;


  const totalInterest =
    totalPayment - loanAmount;



  return {

    loanAmount: Math.round(loanAmount),

    monthlyPayment: Math.round(monthlyPayment),

    totalPayment: Math.round(totalPayment),

    totalInterest: Math.round(totalInterest),

  };

};