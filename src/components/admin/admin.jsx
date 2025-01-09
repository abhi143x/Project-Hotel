import React, { useState } from "react";
import "./admin.css";

const Adminlogin = () => {
  const [loginpage, setLoginpage] = useState({
    adminname: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLoginpage({ ...loginpage, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("logindata:", loginpage);
    alert("login successfull");
  };

  return (
    <div className="body">
      <div className="maindiv">
        <form className="fm" action={handleSubmit}>
          <h4>ADMIN LOGIN</h4>

          <div className="lgf">
            {/* <label htmlFor="Admin Name">Admin Name</label> */}
            <input
              type="text"
              placeholder="Admin Name"
              onClick={handlechange}
            />
          </div>
          <br></br>
          <div className="lgf2">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="Password"
              placeholder="Password"
              onClick={handlechange}
            />
          </div>
          <br></br>
          <button type="submit" className="btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
export default Adminlogin;
