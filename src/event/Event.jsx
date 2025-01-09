import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Correct import

const Event = () => {
  const [name, setName] = useState("");
  const [reservationDetails, setReservationDetails] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create a reservation string
    const details = `Name: ${name}`;
    setReservationDetails(details);
  };

  return (
    <div>
      <div >
        <img
          style={{ borderRadius: "50% ", width:"200px" ,height:"200px" }}
          src="https://art.rtistiq.com/en-us/_next/image?url=https%3A%2F%2Fd28jbe41jq1wak.cloudfront.net%2FBlogsImages%2FPop_Art_Compressed_638237807745595223.jpg&w=1920&q=75"
          alt=""
        />
        <h1>Lets grow together</h1>
      </div>

      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Get RSVB</button>
      </form>

      {reservationDetails && (
        <div
          id="qrCode"
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
            display: "inline-block",
          }}
        >
          <QRCodeSVG value={reservationDetails} size={150} />
        </div>
      )}
    </div>
  );
};

export default Event;
