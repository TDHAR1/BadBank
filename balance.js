function Balance() {
    const ctx = React.useContext(UserContext);
    return (
    <Card
      bgcolor="primary"
      header="Balance"
      body={ (  
              <>
              
              <h2>Balance: $
              {JSON.stringify(ctx.users[0].balance)}
              </h2>

              </>
            
              
            )}
    />
           )

}
