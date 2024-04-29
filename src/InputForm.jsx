import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    dob: "",
    whatsapp: "",
    institute: "",
    yearOfStudy: "",
    joinedRLC: false,
    experience: "",
    reference: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    console.log(data);
    fetch("https://getform.io/f/raeqozna", {
      method: "POST",
      body: data,
    }).then(() =>
      setFormData({
        name: "",
        cnic: "",
        dob: "",
        whatsapp: "",
        institute: "",
        yearOfStudy: "",
        joinedRLC: false,
        experience: "",
        reference: "",
      })
    );
  };

  return (
    <form className="container m-3" onSubmit={formSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <img src={require("./logo.jpeg")} style={{ width: "4rem" }} alt="" />
        <h1 style={{ textAlign: "center", marginLeft: "8px" }}>
          Rotaract Law Conference 2.0
        </h1>
      </div>
      <div className="container-fluid">
        <div style={{ fontWeight: "bold", fontSize: 20 }}>Introduction</div>
        Rotaract Law Conference is a Flagship Project initiated by Rotaract Club
        of Hyderabad Inspire. This year our theme is INNOLEGUM: INNOVATIONS IN
        LEGAL CAREER A legal conference that sets out to explore and showcase
        the cutting-edge developments and progressive ideas within the realm of
        law. The title itself, a blend of "innovation" and "legum" (Latin for
        law), reflects the central theme of the conference – the pursuit of
        innovative thinking and wisdom in the legal field. The Rotaract Law
        Conference serves as a platform for young legal minds, professionals,
        and enthusiasts to come together, exchange ideas, and engage in
        discussions that shape the future of the legal landscape. With the aim
        of fostering educational and professional development, the conference
        has proven to be a pivotal event for those passionate about law.
        Rotaract Law Conference is planned to spread awareness about law and
        order to promote a positive working relationship among young lawyers for
        a healthy pursuit of Legal Education. This conference permits the
        participants to acquire more knowledge about their field and will help
        how to cope up with the obstacles they will face in future. They will
        have the chance to gain knowledge from experts by attending Conference
        Sessions, or by meeting with them in person and conversing with them
        about their issues.
        <p className="mt-2">
          Contacts{": "}
          <p>
            <p>
              Rtr. Raza Ullah Junejo President of Rotaract Club of Hyderabad
              Inspire Conference Chair of Rotaract Law Conference 2.0
              03340344950 Rtr. Somia Mehak Past President of Rotaract Club of
              Hyderabad Inspire Conference Advisor of Rotaract Law Conference
              2.0 03163003972
            </p>
          </p>
        </p>
        <p>
          Venue:{"Mehran Art Council Hyderabad "} <span></span>
        </p>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            autoComplete="off"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="cnic" className="form-label">
            CNIC:
          </label>
          <input
            type="number"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            placeholder="Write it without blanks(-)"
            className="form-control"
            autoComplete="off"
            minLength={12}
            maxLength={12}
            required
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <label htmlFor="dob" className="form-label">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="whatsapp" className="form-label">
            WhatsApp Number (+92):
          </label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            maxLength={10}
            minLength={10}
            placeholder="3xxxxxxxxx"
            className="form-control"
            required
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <label htmlFor="institute" className="form-label">
            Institute:
          </label>
          <input
            type="text"
            id="institute"
            name="institute"
            value={formData.institute}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="yearOfStudy" className="form-label">
            Year of Study:
          </label>
          <input
            type="number"
            id="yearOfStudy"
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <div className="form-check">
            <input
              type="checkbox"
              id="joinedRLC"
              name="joinedRLC"
              checked={formData.joinedRLC}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="joinedRLC" className="form-check-label">
              Have you joined RLC last time?
            </label>
          </div>
        </div>
      </div>

      {formData.joinedRLC && (
        <div className="row mt-3">
          <div className="col-md-12">
            <label htmlFor="experience" className="form-label">
              Share your experience:
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
        </div>
      )}

      <div className="row mt-3">
        <div className="col-md-12">
          <label htmlFor="reference" className="form-label">
            Reference:
          </label>
          <input
            type="text"
            id="reference"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            placeholder="i.e. Fahad Memon"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
