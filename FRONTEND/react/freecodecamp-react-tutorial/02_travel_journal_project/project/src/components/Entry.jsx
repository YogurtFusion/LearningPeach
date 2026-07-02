import React from "react";
const Entry = (props) => {
  return (
    // {...entry}
    <article className="card">
      <div className="card-picture">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="card-body">
        <div className="subhead">
          <img src="src\assets\marker.png" alt="marker icon" />
          <span>{props.countryName} </span>
          <a className="subhead-link" href={props.googleMapsLink}>
            View on Google Maps
          </a>
        </div>
        <h1>{props.title} </h1>
        <span>{props.dates} </span>
        <p>{props.text} </p>
      </div>
    </article>
  );
};

export default Entry;


// import React from "react";
// const Entry = (props) => {
//   return (
//     <article className="card">
//       <div className="card-picture">
//         <img src={props.img.src} alt={props.entry.img.alt} />
//       </div>
//       <div className="card-body">
//         <div className="subhead">
//           <img src="src\assets\marker.png" alt="marker icon" />
//           <span>{props.countryName} </span>
//           <a className="subhead-link" href={props.googleMapsLink}>
//             View on Google Maps
//           </a>
//         </div>
//         <h1>{props.title} </h1>
//         <span>{props.dates} </span>
//         <p>{props.text} </p>
//       </div>
//     </article>
//   );
// };

// export default Entry;

// import React from "react";
// const Entry = (props) => {
//   return (
//     <article className="card">
//       <div className="card-picture">
//         <img src={props.img.src} alt={props.img.alt} />
//       </div>
//       <div className="card-body">
//         <div className="subhead">
//           <img src="src\assets\marker.png" alt="marker icon" />
//           <span>{props.countryName} </span>
//           <a className="subhead-link" href={props.link}>
//             View on Google Maps
//           </a>
//         </div>
//         <h1>{props.PlaceName} </h1>
//         <span>{props.dates} </span>
//         <p>{props.description} </p>
//       </div>
//     </article>
//   );
// };

// export default Entry;
