import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { Login } from "../../reducer/reducer";

const LoginForm = React.memo(({ User, Login }) => {
  const user = User.user;
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const index = user.find((i) => i.id === id);
      if (index) {
        if (password === index.password) {
          Login(id, password);
        } else {
          alert("error");
        }
      } else {
        alert("error");
      }
    },
    [id, password]
  );

  const onChangeId = useCallback(
    (e) => {
      setId(e.target.value);
    },
    [id]
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={id} onChange={onChangeId} required />
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
});

const mapStateToProps = (state) => {
  return { User: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    Login: (id, password) => dispatch({ type: Login, id, password }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
