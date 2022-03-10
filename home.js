function Home() {

  return (
    <Card
    
    bgcolor="light"
    txtcolor="dark"
    header="Bank Home Page"
    title="Welcome to the bank!"
    text="You can Create Account, Login, Check Balance, Deposit and Withdraw Funds."
    body={(<img src="./img/bank.png" className="img-fluid" alt="Responsive image" />)}
    />
  );
}