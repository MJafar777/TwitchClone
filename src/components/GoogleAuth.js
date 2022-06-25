import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  let [state, setState] = useState(false);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "314979823268-ujftgn3jnp6l6n3d0j7pvaifgftdop9f.apps.googleusercontent.com",
          plugin_name: "TwitchClone",
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
          setState(auth.isSignedIn.get());
          kirishFunc();
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (val) => {
    setState(val);
  };

  const clickSignIn = () => {
    auth.signIn();
  };
  const clickSignOut = () => {
    auth.signOut();
  };

  const kirishFunc = () => {
    if (state === true) {
      return (
        <div>
          <form className="ui form">
            <button
              onClick={() => {
                clickSignOut();
              }}
              className="ui button google red"
            >
              <i className="google icon " />
              Sign Out
            </button>
          </form>
        </div>
      );
    } else if (state === false) {
      return (
        <div>
          <form className="ui form">
            <button
              onClick={() => {
                clickSignIn();
              }}
              className="ui button google green"
            >
              <i className=" google icon " />
              Sign In
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form className="ui form">
            <button onClick={() => {}} className="ui button google green">
              Waiting...
            </button>
          </form>
        </div>
      );
    }
  };

  return <div>{kirishFunc()}</div>;
};

export default GoogleAuth;

// // 216603255520-tatr1gov1ft3hg7knnto1kbddkblm7q3.apps.googleusercontent.com

// import React, { useEffect, useState } from "react";

// const GoogleAuth = () => {
//   let [kirishMalumotlar, setKirishmalumotlar] = useState("");
//   const [kirilganmi, setKirilganmi] = useState(null);

// useEffect(() => {
//   window.gapi.load("auth2", function () {
//     window.gapi.auth2
//       .init({
//         client_id:
//           "216603255520-4k9iiscga04ncn04j2kasrbf375hme28.apps.googleusercontent.com",
//         scope: "email",
//         plugin_name: "TwitchCloneJafar",
//       })
//       .then(() => {
//         setKirishmalumotlar(window.gapi.auth2.getAuthInstance());
//         kirishMalumotlar.isSignIn.listen(onAuthChange);
//         console.log(kirishMalumotlar);
//       });
//   });
// });

//   const onAuthChange = () => {
//     setKirilganmi({kirganYokiKirmagan : kirishMalumotlar.isSignIn()})
//   };

//   const kirishFunc = () => {
//     if (kirishMalumotlar && !kirishMalumotlar.isSignIn.gen()) {
//       console.log(kirishMalumotlar);
//       kirishMalumotlar.signIn();
//       return (
//         <div>
//           <p>
//             {kirishMalumotlar.at.currentUser.get().getBasicProfile().getName()}
//           </p>
//         </div>
//       );
//     } else if (kirishMalumotlar && kirishMalumotlar.isSignIn.gen()) {
//       kirishMalumotlar.signOut();
//     } else {
//       <p>Waiting...</p>;
//     }
//   };
//   return (
//     <div>
//       <form className="ui form">
//         <button
//           onClick={() => {
//             kirishFunc();
//           }}
//           className="ui button google red"
//         >
//           <i className="google icon " />
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GoogleAuth;
