import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  let [state, setState] = useState(false);
  const [auth, setAuth] = useState("");
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
          console.log(auth);
          setState(auth.isSignedIn.get());
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
