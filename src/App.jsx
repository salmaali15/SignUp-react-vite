import './App.css';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1 p-5">
      <div className="m-auto">
        <form className="border rounded-4 w-100 p-4">
          <h2 className="text-center mb-3">Sign Up</h2>

          <div className="form-group">
            <label htmlFor="name" className="mb-2">Enter your name</label>
            <input type="text" id="name" className="form-control" />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="email" className="mb-2">Enter your email</label>
            <input type="text" id="email" className="form-control" />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="password" className="mb-2">Enter your password</label>
            <input type="password" id="password" className="form-control" />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="confirm-password" className="mb-2">Enter your password again</label>
            <input type="password" id="confirm-password" className="form-control" />
          </div>

    
          <div className="mt-3">
            <label className="mb-2">Select Your Gender</label>
            <div>
              <input type="radio" className="btn-check" name="gender" id="male" value="male" autoComplete="off" />
              <label className="btn btn-secondary me-2" htmlFor="male">Male</label>

              <input type="radio" className="btn-check" name="gender" id="female" value="female" autoComplete="off" />
              <label className="btn btn-secondary" htmlFor="female">Female</label>
            </div>
          </div>

          <div className="form-check mt-3">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-success text-uppercase mt-3 px-3 fs-5">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
