import React, { useState } from "react";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare form data to be sent
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("file", file);

    try {
      // Send form data to the backend for email processing
      const response = await fetch("sendEmail", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Email sent successfully
        console.log("Email sent successfully!");
        // You may show a success message to the user or redirect to a thank-you page
      } else {
        // Error in sending email
        console.error("Failed to send email.");
        // You may show an error message to the user
      }
    } catch (error) {
      console.error("Error while sending the email:", error);
      // You may show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
