// "use client";
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./Firebase";
// const Contact = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleData = async () => {
//     await createUserWithEmailAndPassword(auth, email, password);
//   };
//   return (
//     <div className="flex h-[100vh] w-[100vw] justify-center items-center">
//       <div className="form">
//         <input
//           placeholder="Message"
//           type="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input
//           placeholder="Email"
//           type="password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <button onClick={handleData}>Submit the data </button>
//       </div>
//     </div>
//   );
// };

// export default Contact;
