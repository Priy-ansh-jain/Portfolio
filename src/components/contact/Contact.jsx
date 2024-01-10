import React, { useState, useEffect } from "react";
import "./contact.css";
import contact from "../../assets/contact.jpg";
import { useCookies } from "react-cookie";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [submittedEmails, setSubmittedEmails] = useState([]);
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [showTable, setShowTable] = useState(false);
  // const [cookies, setCookies] = useCookies(["formSubmissions"]);
//  we have alerady provide key name as in array

  const [editingIndex, setEditingIndex] = useState(null);

  // this for name , email ,  sbject, message..............//

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setNameError("Name must be at least 3 characters");
    } else {
      setNameError("");
    }
    handleFormValidation();
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    if (event.target.value.length < 3) {
      setSubjectError("Subject must be at least 3 characters");
    } else {
      setSubjectError("");
    }
    handleFormValidation();
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    if (event.target.value.length < 3) {
      setMessageError("Message must be at least 3 characters");
    } else {
      setMessageError("");
    }
    handleFormValidation();
  };

 

  // useEffect(() => {
    
  //   const storedSubmissions = cookies.formSubmissions || [];
  //   setAllSubmissions(storedSubmissions);
  // }, [cookies.formSubmissions]);




  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
  };

  useEffect(() => {
    const emailRegex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(".+"))@((([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})|(\.([a-zA-Z]{2,})))$/i;
    if (!emailRegex.test(email)) {
      // setEmailError('Enter a valid email address');
    // } else if (submittedEmails.includes(email.toLowerCase())) {
    //   setEmailError("Email already is in used. *");
    } else {
      setEmailError("");
    }
  }, [email, submittedEmails]);

  const handleFormValidation = () => {
    const isNameValid = name.length >= 3;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isSubjectValid = subject.length >= 3;
    const isMessageValid = message.length >= 3;
    // setNameError(isNameValid ? "" : "Name is necessary to be filled *");
    setEmailError(isEmailValid ? "" : "Email is necessary to be filled *");
    setSubjectError(isSubjectValid ? "" : "Subject is necessary to be filled");
    setMessageError(isMessageValid ? "" : "Message is necessary to be filled");

    const isValid =
      isNameValid && isEmailValid && isSubjectValid && isMessageValid;
    setFormValid(isValid);

    return isValid;
  };

  //  this is for to clear the data in local storage use when needed
  // useEffect(() => {
  //   localStorage.removeItem("formSubmissions");
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleFormValidation()) {
      const newSubmission = { name, email, subject, message };
      setSubmittedEmails([...submittedEmails, email.toLowerCase()]);
      setAllSubmissions([...allSubmissions, newSubmission]);

      
      // for local stroage .......
      // const storedSubmissions =
      //   JSON.parse(localStorage.getItem("formSubmissions")) || [];
      // localStorage.setItem(
      //   "formSubmissions",
      //   JSON.stringify([...storedSubmissions, newSubmission])
      // );
      // for local stroage .......

      // setCookies("formSubmissions", [...allSubmissions, newSubmission], {
      //   path: "/",
      // });

      sessionStorage.setItem("formSubmissions",JSON.stringify(newSubmission))

      alert("Form submitted successfully!");
      console.log("Form submitted:", newSubmission);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // to show table on the web screen and at scrolll.....

      setShowTable(true); // Show the table after submission

      // to show table on the web screen and at scrolll,....
    } else {
      console.log("Form not submitted due to validation errors");
    }
  };


// const handleRemove = (index) =>{
// const updatedData = allSubmissions.filter((Item) => Item !== index)
// setAllSubmissions(updatedData)
// localStorage.setItem("formSubmissions",JSON.stringify(updatedData))

//  }
//   const handleEdit = (index) => {
//   setEditingIndex(index);

//     const editData = allSubmissions[index];
//     setName(editData.name);
//     setEmail(editData.email);
//     setSubject(editData.subject);
//     setMessage(editData.message);
//   };
//   const handleUpdate = () => {
//     if (handleFormValidation()) {
//       const updatedSubmission = { name, email, subject, message };
//       const updatedSubmissions = [...allSubmissions];
//       updatedSubmissions[editingIndex] = updatedSubmission;

//       localStorage.setItem("formSubmissions", JSON.stringify(updatedSubmissions));
//       setAllSubmissions(updatedSubmissions);
//       setEditingIndex(null);

//       alert("Form updated successfully!");
//       console.log("Form updated:", updatedSubmission);
//       setName("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//     } else {
//       console.log("Form not updated due to validation errors");
//     }
//   };

  


  return (
    <section className="contact__details">
      <div className="contact">
        <div className="contact__form">
          <h1>Hire Me.</h1>
          <p>
            I am available for freelance work. Connect with me via phone: 01923
            088574 or email: admin@example.com
          </p>
          <div className="form__detail"> 
          <form  onSubmit={handleSubmit}>
       
              <input
                type="text"
                name="Your Name"
                id="A"
                value={name}
                placeholder="Your Name"
                onChange={handleNameChange}
              />
              <br />
              {nameError && <span className="error">{nameError}</span>}
         
            
              <input
                type="text"
                name="Email"
                id="B"
                value={email}
                placeholder="Your Email"
                onChange={handleEmailChange}
              />
              <br />
              {emailError && <span className="error">{emailError}</span>}
      
              <input
                type="text"
                name="subject"
                id="C"
                value={subject}
                placeholder="Write a Subject"
                onChange={handleSubjectChange}
              />
              <br />
              {subjectError && <span className="error">{subjectError}</span>}
         
           
              <textarea
                name=""
                id="D"
                cols="30"
                rows="2"
                value={message}
                placeholder="Write Your Message"
                onChange={handleMessageChange}
              ></textarea>
              <br />
              {messageError && <span className="error">{messageError}</span>}
        

            <div className="submit__buttton">
            {/* {editingIndex !== null ? (
                <button className="update" onClick={handleUpdate} disabled={!formValid}>
                  UPDATE
                </button>
              ) : ( */}
                <button className="submit" onClick={handleSubmit} disabled={!formValid}>
                  {showTable ? "SUBMIT" : "SUBMIT"}
                </button>
              {/* )} */}
            </div>
           
            
          </form>
          </div>

          {/* coookiess   */}

          {/* {allSubmissions.map((submission, index) => (
            <div key={index} className="cookie">
              <p>name:</p> <br />
              <p>email:</p>
              <p>subject:</p>
              <p>message:</p>
              <div>
                <p>{submission.name}</p>

                <p>{submission.email}</p>

                <p>{submission.subject}</p>

                <p>{submission.message}</p>
              </div>
            </div>
          ))} */}
          {/* coookiess   */}

          {/* localStorage */}
          {showTable && (
            <div className="form__details">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {allSubmissions.map((submission, index) => (
                    <tr key={index}>
                      <td>{submission.name}</td>
                      <td>{submission.email}</td>
                      <td>{submission.subject}</td>
                      <td>{submission.message}</td>
                      {/* <td><button id="butt" onClick={() =>handleRemove(submission)}>remove</button></td>
                      <td><button id="butt" onClick={() => handleEdit(index)}>
                          Edit
                        </button></td> */}
                    </tr>
                    
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* localStorage */}
        </div>
        <div className="contact__image">
          <img src={contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
