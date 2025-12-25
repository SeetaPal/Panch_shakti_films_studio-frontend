
// import { useNavigate } from "react-router-dom";
// import { RegisterPopup } from "./Modal/RegisterPopup";
// import { useState } from "react";
// import axios from "axios";

// export const RegisterFirstPage = () => {
//   const Navigate = useNavigate();
//   const [showpopup, setshowpopup] = useState(false);

//   const handleshowpopup = () => {
//     setshowpopup(false);
//   };

//   // ✅ Form state
//   const [formData, setFormData] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     gender: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     website: "",
//     registrationOption: "",
//     reasonToRegister: "",
//     category: "",
//   });

//   // ✅ Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // ✅ Handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("❌ Passwords do not match!");
//       return;
//     }

//     if (!formData.gender || !formData.reasonToRegister) {
//       alert("❌ Please select Gender and Registration Reason!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         formData
//       );
//       console.log("✅ Registration successful:", response.data);
//       setshowpopup(true);

//       // Redirect after 3 seconds
//       setTimeout(() => {
//         setshowpopup(false);
//         Navigate("/login");
//       }, 3000);
//     } catch (error) {
//       console.error("❌ Registration failed:", error.response?.data || error);
//       alert(error.response?.data?.message || "Registration failed!");
//     }
//   };

//   return (
//     <div className="register-page d-flex justify-content-center align-items-center py-5">
//       <div className="container containers">
//         <div className="register-box mx-auto">
//           {/* Logo */}
//           <div className="text-center">
//             <img
//               src="publicAssets/images/logo.webp"
//               alt="PSFS Logo"
//               className="login-logo cursor-pointer"
//               onClick={() => Navigate("/")}
//             />
//           </div>

//           {/* Title */}
//           <h2
//             className="welcome-text display-6 pb-4 text-center"
//             style={{ letterSpacing: "1px", textTransform: "uppercase" }}
//           >
//             Registration <span>Form</span>
//           </h2>

//           {/* ✅ Main Form */}
//           <form onSubmit={handleSubmit}>
//             {/* First Name */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 First Name <span className="golden_color">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="First Name"
//                 required
//               />
//             </div>

//             {/* Middle Name */}
//             <div className="mb-3">
//               <label className="form-label text-white">Middle Name</label>
//               <input
//                 type="text"
//                 name="middleName"
//                 value={formData.middleName}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="Middle Name"
//               />
//             </div>

//             {/* Last Name */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 Last Name <span className="golden_color">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="Last Name"
//                 required
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 Phone Number <span className="golden_color">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="Phone Number"
//                 pattern="[0-9]{10}"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 E-mail <span className="golden_color">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="E-mail"
//                 required
//               />
//             </div>

//             {/* Gender */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 Gender <span className="golden_color">*</span>
//               </label>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === "Male"}
//                   onChange={handleChange}
//                 />
//                 <label className="form-check-label">Male</label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === "Female"}
//                   onChange={handleChange}
//                 />
//                 <label className="form-check-label">Female</label>
//               </div>
//             </div>

//             {/* Username */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 Username <span className="golden_color">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="Username"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 Password <span className="golden_color">*</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             {/* Confirm Password */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 Confirm Password <span className="golden_color">*</span>
//               </label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>

//             {/* Website */}
//             <div className="mb-3">
//               <label className="form-label text-white">Website</label>
//               <input
//                 type="text"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="Website Link Here.."
//               />
//             </div>

//             {/* Reason to Register */}
//             <div className="mb-3">
//               <label className="text-start pb-3 text-white">
//                 Choose Your Reason to Register{" "}
//                 <span className="golden_color">*</span>
//               </label>

//               {/* Option A */}
//               <div className="form-check mb-2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="reasonToRegister"
//                   value="Casting Agency / Production House hiring talent"
//                   checked={
//                     formData.reasonToRegister ===
//                     "Casting Agency / Production House hiring talent"
//                   }
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       reasonToRegister: e.target.value,
//                       registrationOption: "A",
//                     })
//                   }
//                 />
//                 <label className="form-check-label">
//                   Casting Agency / Production House hiring talent
//                 </label>
//               </div>

//               {/* Option B */}
//               <div className="form-check mb-2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="reasonToRegister"
//                   value="Model / Actor / Actress searching for work"
//                   checked={
//                     formData.reasonToRegister ===
//                     "Model / Actor / Actress searching for work"
//                   }
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       reasonToRegister: e.target.value,
//                       registrationOption: "B",
//                     })
//                   }
//                 />
//                 <label className="form-check-label">
//                   Model / Actor / Actress searching for work
//                 </label>
//               </div>

//               {/* Option C */}
//               <div className="form-check mb-2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="reasonToRegister"
//                   value="Client seeking creative or marketing services"
//                   checked={
//                     formData.reasonToRegister ===
//                     "Client seeking creative or marketing services"
//                   }
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       reasonToRegister: e.target.value,
//                       registrationOption: "C",
//                     })
//                   }
//                 />
//                 <label className="form-check-label">
//                   Client seeking creative or marketing services
//                 </label>
//               </div>
//             </div>

//             {/* Category */}
//             <div className="mb-3">
//               <label className="form-label text-white">
//                 Category <span className="golden_color">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="form-control input-custom"
//                 placeholder="e.g. Model, Director, Client"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="btn btn-primary w-100 continue-btn mt-3 fs-5"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Popup */}
//       {showpopup && <RegisterPopup cancelbtn={handleshowpopup} />}
//     </div>
//   );
// };


//test today 25
import { useNavigate } from "react-router-dom";
import { RegisterPopup } from "./Modal/RegisterPopup";
import { useState } from "react";
import axios from "axios";

export const RegisterFirstPage = () => {
  const Navigate = useNavigate();
  const [showpopup, setshowpopup] = useState(false);

  const handleshowpopup = () => {
    setshowpopup(false);
  };

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    username: "",
    password: "",
    confirmPassword: "",
    website: "",
    registrationOption: "",
    reasonToRegister: "",
    category: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    if (!formData.gender || !formData.reasonToRegister) {
      alert("❌ Please select Gender and Registration Reason!");
      return;
    }

    try {
      const API = import.meta.env.VITE_API_URL;
      console.log("API Hitting →", `${API}/auth/register`);

      const response = await axios.post(`${API}/auth/register`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ Registration successful:", response.data);
      setshowpopup(true);

      setTimeout(() => {
        setshowpopup(false);
        Navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("❌ Registration failed:", error.response?.data || error);
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center py-5">
      <div className="container containers">
        <div className="register-box mx-auto">
          {/* Logo */}
          <div className="text-center">
            <img
              src="publicAssets/images/logo.webp"
              alt="PSFS Logo"
              className="login-logo cursor-pointer"
              onClick={() => Navigate("/")}
            />
          </div>

          {/* Title */}
          <h2
            className="welcome-text display-6 pb-4 text-center"
            style={{ letterSpacing: "1px", textTransform: "uppercase" }}
          >
            Registration <span>Form</span>
          </h2>

          {/* Main Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-white">
                First Name <span className="golden_color">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="First Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="Middle Name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">
                Last Name <span className="golden_color">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">
                Phone Number <span className="golden_color">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">
                E-mail <span className="golden_color">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="E-mail"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">
                Gender <span className="golden_color">*</span>
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label text-white">
                Username <span className="golden_color">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="Username"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">
                Password <span className="golden_color">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="Password"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">
                Confirm Password <span className="golden_color">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">Website</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="Website Link Here.."
              />
            </div>

            <div className="mb-3">
              <label className="text-start pb-3 text-white">
                Choose Your Reason to Register{" "}
                <span className="golden_color">*</span>
              </label>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reasonToRegister"
                  value="Casting Agency / Production House hiring talent"
                  checked={
                    formData.reasonToRegister ===
                    "Casting Agency / Production House hiring talent"
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reasonToRegister: e.target.value,
                      registrationOption: "A",
                    })
                  }
                />
                <label className="form-check-label">
                  Casting Agency / Production House hiring talent
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reasonToRegister"
                  value="Model / Actor / Actress searching for work"
                  checked={
                    formData.reasonToRegister ===
                    "Model / Actor / Actress searching for work"
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reasonToRegister: e.target.value,
                      registrationOption: "B",
                    })
                  }
                />
                <label className="form-check-label">
                  Model / Actor / Actress searching for work
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reasonToRegister"
                  value="Client seeking creative or marketing services"
                  checked={
                    formData.reasonToRegister ===
                    "Client seeking creative or marketing services"
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reasonToRegister: e.target.value,
                      registrationOption: "C",
                    })
                  }
                />
                <label className="form-check-label">
                  Client seeking creative or marketing services
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label text-white">
                Category <span className="golden_color">*</span>
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control input-custom"
                placeholder="e.g. Model, Director, Client"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 continue-btn mt-3 fs-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showpopup && <RegisterPopup cancelbtn={handleshowpopup} />}
    </div>
  );
};
