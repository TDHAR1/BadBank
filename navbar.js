function NavBar(){
  return(
    <>
    <div className="container-fluid" role="navigation"> 
     <nav className="navbar navbar-light bg-light  navbar-expand-lg">    

      <a className="navbar-brand btn btn-light hovertext" data-hover=" Welcome to Bank Home page"href="#">Bad Bank</a>

     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">

            <a className="nav-link btn btn-light hovertext" data-hover="Fill form to create new account"href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light hovertext" data-hover= "Existing customers login" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light hovertext" data-hover="Deposit funds here" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light hovertext" data-hover=" Withdraw funds here" href="#/withdraw/">Withdraw</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link btn btn-light hovertext" data-hover="To check balance please login" href="#/balance/">Balance</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link btn btn-light hovertext" data-hover="View account information" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </div>
    </>
  );
}

{/* <div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="...">...</div> */}