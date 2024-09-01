import style from "./Login.module.css";

const Login = () => {
  return (
    <div className={style.login}>
      <div className={style.holder}>
        <h1 className={style.textWhite}>Sign In</h1>
        <br />
        <form className={style.formData}>
          <input
            type="email"
            placeholder="Email or phone number"
            className={style.email}
          />
          <input
            type="password"
            placeholder="Password"
            className={style.password}
          />
          <button className={style.buttonName}>Sign In</button>
          <div className={style.subContainer1}>
            <input type="checkbox" className={style.checkbox} />
            <span className={style.checkboxText}>Remember me</span>
          </div>
        </form>
        <div className={style.subContainer2}>
          <h4 className={style.textWord}>New to Netflix?</h4>
          <h4 className={style.signup}>Sign up now.</h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
