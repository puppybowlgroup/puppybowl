// import React from "react";
// import { useState } from "react";

// export default function NewPlayerForm() {
//   const [name, setName] = useState("");
//   const [team, setTeam] = useState("");
//   const [breed, setBreed] = useState("");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const response = await fetch(
//       "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-AM/players/",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPlayer),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Submission Failed");
//     }

//     const result = await response.json();
//     console.log(result);
//     setSuccess("Welcome To The Puppy Bowl");
//     setError(null);

//     return (
//       <>
//         <h2>New player Sign Up!</h2>
//         {error && <p>{error}</p>}
//         {success && <p style={{ color: "green" }}>{successMessage}</p>}

//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//             />
//           </label>
//           <label>
//             Breed:
//             <input
//               value={breed}
//               onChange={(event) => setBreed(event.target.value)}
//             />
//           </label>

//           <label>
//             Team:
//             <input
//               value={team}
//               onChange={(event) => setTeam(event.target.value)}
//             />
//           </label>

//           <button>Submit</button>
//         </form>
//       </>
//     );
//   };
// }
