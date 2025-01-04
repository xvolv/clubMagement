import { useState } from "react";
import "./clubAdmin.css";
import Image from "./image.png";
import React from "react";
import { addEvent, updateEvent, deleteEvent } from "../Service/EventService";

const AdminPage = () => {
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState({
    details: "", // Updated field name to 'details'
  });
  const [deleteEventState, setDelete] = useState({
    deleteId: "",
  });

  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      console.log({ ...deleteEventState });
      await deleteEvent(deleteEventState.deleteId);
      setMessage("Event deleted successfully");
    } catch (error) {
      console.error("Failed to delete event:", error);
      setMessage("Sorry, failed to delete event");
    }
  };

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      console.log({ ...details });
      await addEvent({ details: details.details }); // Ensure the correct structure
      setMessage("Event added successfully");
    } catch (error) {
      console.error("Failed to add event:", error);
      setMessage("Sorry, failed to add event");
    }
  };

  const [edit, setEdit] = useState({
    id: "",
    editedDetail: "",
  });

  const editHandler = async (e) => {
    e.preventDefault();
    try {
      const updatedEvent = {
        id: edit.id,
        details: edit.editedDetail, // Updated field name to 'details'
      };
      await updateEvent(edit.id, updatedEvent);
      setMessage("Event updated successfully");
    } catch (error) {
      console.error("Failed to update event:", error);
      setMessage("Sorry, failed to update event");
    }
  };

  const [adminTask, setAdminTask] = useState("add");

  return (
    <div className="club-admin-page">
      <div className="club-admin-content">
        <img src={Image} alt="" />
        <div className="two-contents">
          <div className="admin-tasks">
            <button
              onClick={() => setAdminTask("add")}
              className={adminTask === "add" ? "active-button" : ""}
            >
              Add Event⬇️
            </button>
            <button
              onClick={() => setAdminTask("edit")}
              className={adminTask === "edit" ? "active-button" : ""}
            >
              Edit Event⬇️
            </button>
            <button
              onClick={() => setAdminTask("delete")}
              className={adminTask === "delete" ? "active-button" : ""}
            >
              Delete Event⬇️
            </button>
          </div>
          {adminTask === "add" ? (
            <div>
              <form className="add-event-form" onSubmit={addHandler}>
                <h2> club admin panel</h2>
                <textarea
                  className="text-area"
                  name="details"
                  value={details.details} // Updated field name to 'details'
                  placeholder="Write your event details here ..."
                  required
                  onChange={
                    (e) => setDetails({ ...details, details: e.target.value }) // Updated field name to 'details'
                  }
                ></textarea>
                <button
                  onSubmit={addHandler}
                  className="submit-login"
                  type="submit"
                >
                  post
                </button>
              </form>
              <h1
                style={{
                  color: message.includes("successfully") ? "green" : "red",
                }}
              >
                {message}
              </h1>
            </div>
          ) : adminTask === "edit" ? (
            <div>
              <form className="add-event-form" onSubmit={editHandler}>
                <h2> admin panel</h2>
                <input
                  type="text"
                  name="id"
                  value={edit.id}
                  placeholder="Event id"
                  required
                  onChange={(e) => setEdit({ ...edit, id: e.target.value })}
                />
                <textarea
                  type="text"
                  name="editedDetail"
                  value={edit.editedDetail}
                  placeholder="Event details"
                  required
                  onChange={(e) =>
                    setEdit({ ...edit, editedDetail: e.target.value })
                  }
                ></textarea>
                <button className="submit-login" type="submit">
                  Save change
                </button>
              </form>
              <h1
                style={{
                  color: message.includes("successfully") ? "green" : "red",
                }}
              >
                {message}
              </h1>
            </div>
          ) : adminTask === "delete" ? (
            <div>
              <form className="add-event-form" onSubmit={deleteHandler}>
                <h2> club admin panel</h2>
                <input
                  type="text"
                  placeholder="Event Id"
                  required
                  name="eventId"
                  value={deleteEventState.deleteId}
                  onChange={(e) =>
                    setDelete({ ...deleteEventState, deleteId: e.target.value })
                  }
                />
                <textarea placeholder="Reason" required></textarea>
                <button className="submit-login" type="submit">
                  Delete Event
                </button>
              </form>
              <h1
                style={{
                  color: message.includes("successfully") ? "green" : "red",
                }}
              >
                {message}
              </h1>
            </div>
          ) : (
            <div>
              <form className="add-event-form">
                <h2> club admin panel</h2>
                <input type="text" placeholder="Event id" required />
                <textarea placeholder="Event details" required></textarea>
                <button className="submit-login" type="submit">
                  post
                </button>
                <h1
                  style={{
                    color: message.includes("successfully") ? "green" : "red",
                  }}
                >
                  {message}
                </h1>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
