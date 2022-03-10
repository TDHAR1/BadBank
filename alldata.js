function AllData() {
  const ctx = React.useContext(UserContext);
  return (
  <Card
    bgcolor="primary"
    header="AllData"
    body={ (  
            <>
            
            <h4>
              <p>       
              Name: {JSON.stringify(ctx.users[0].name)}</p>
              <p>
              Email: {JSON.stringify(ctx.users[0].email)}</p>
              <p>
              Password: {JSON.stringify(ctx.users[0].password)}</p>
              <p>
              Balance: ${JSON.stringify(ctx.users[0].balance)}</p>
              </h4>

            </>
          
            
          )}
  />
         )

}


// function AllData() {
//   const ctx = React.useContext(UserContext);
//   return (
//     <h1>All Data
//       {JSON.stringify(ctx)}
//     </h1>
//   );
// }