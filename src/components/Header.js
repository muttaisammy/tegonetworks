function Header() {
  return (
    <header>
      <video src="./img/telecom3.jpg" ></video>
      <h1>We deliver Networking Products</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
         Create an Account
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
         Have an account? Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
