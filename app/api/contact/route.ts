import nodemailer from "nodemailer";
import { google } from "googleapis";

async function sendEmail(to: string | undefined, subject: string, text: string) {
  try {
    const transporter = nodemailer.createTransport({
      // service: "gmail",
      host: "smtp.gmail.com",
      port: 465, // Port for secure connection
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    // throw new Error("Failed to send email");
  }
}

// Function to add data to Google Sheet
// async function addToGoogleSheet(name: string, email: string) {
//   try {
//     const auth = new google.auth.GoogleAuth({
//       keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     const sheets = google.sheets({ version: "v4", auth });
//     const spreadsheetId = process.env.GOOGLE_SHEET_ID;

//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: "Sheet1!A:B", // Adjust the range based on your sheet structure
//       valueInputOption: "RAW",
//       requestBody: {
//         values: [[name, email]],
//       },
//     });

//     console.log("Data added to Google Sheet:", response.data);
//   } catch (error) {
//     console.error("Error adding data to Google Sheet:", error);
//     // throw new Error("Failed to add data to Google Sheet");
//   }
// }


export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response("All fields are required", { status: 400 });
    }

    sendEmail(process.env.EMAIL, "New Contact Form Submission", `Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
      .then(() => {
        // addToGoogleSheet(name, email)
        //   .then(() => {
        //     console.log("Data added to Google Sheet successfully");
        //   });
        console.log("Email sent successfully");
      });
    console.log("Contact Form Submission:", { name, email, message });

    return new Response("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}