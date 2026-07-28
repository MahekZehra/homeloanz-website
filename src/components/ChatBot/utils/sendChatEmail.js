import emailjs from "@emailjs/browser";

export const sendChatEmail = async (
  answers,
  recommendation
) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        // Customer Information
        from_name: answers.name,
        from_email: answers.email,
        phone: answers.phone,

        // Mortgage Details
        resident_status: answers.resident,
        mortgage_purpose: answers.purpose,
        employment_type: answers.employment,
        monthly_income: answers.income,
        property_value: answers.propertyValue,
        down_payment: answers.downPayment,
        existing_home_loan: answers.existingLoan,

        // AI Recommendation
        ai_title: recommendation.title,
        ai_message: recommendation.message,

        // Complete Message
        message: `
🏠 NEW MORTGAGE LEAD

Full Name:
${answers.name}

Phone:
${answers.phone}

Email:
${answers.email}

---------------------------------------

Resident Status:
${answers.resident}

Mortgage Purpose:
${answers.purpose}

Employment Type:
${answers.employment}

Monthly Income:
AED ${answers.income}

Property Value:
AED ${answers.propertyValue}

Down Payment:
${answers.downPayment}

Existing Home Loan:
${answers.existingLoan}

---------------------------------------

AI Assessment:
${recommendation.title}

${recommendation.message}
`,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return true;
  } catch (error) {
    console.error("EmailJS Error:", error);
    return false;
  }
};