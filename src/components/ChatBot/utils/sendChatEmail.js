import emailjs from "@emailjs/browser";

export const sendChatEmail = async (answers) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: answers.name,
        phone: answers.phone,
        from_email: answers.email,
        resident_status: answers.resident,
        message: `
Mortgage Purpose: ${answers.purpose}

Monthly Income: ${answers.income}
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