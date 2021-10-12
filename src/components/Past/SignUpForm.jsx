import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { SignUp } from "../reducer/reducer";

const SignUpForm = withRouter(({ Sign, history }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (!check) {
      console.log(id, password, email);
      Sign(id, password, email);
      history.push("/");
    }
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (password2 == password) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [password2]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={id} onChange={onChangeId} placeholder="id" />
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="password"
          required
        />
        <input
          type="password"
          value={password2}
          onChange={onChangePassword2}
          placeholder="password를 한 번 더 입력해주세요"
          required
        />
        {check && <div style={{ color: "red" }}>비밀번호가 틀렸습니다</div>}
        <input
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="email"
          required
        />
        <button>Signup</button>
      </form>
    </div>
  );
});

const mapStateToProps = (state, ownProps) => {
  return {
    User: state,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    Sign: (id, password, email) =>
      dispatch({ type: SignUp, id, password, email }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
