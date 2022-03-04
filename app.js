
const inquirer = require('inquirer');
function display(){

    inquirer
    .prompt([
      {
          type:'list',
          name:'c1',
          choices:['registration', 'debit','credit' ]
      }
    ])

  .then(ans => {
      if(ans.c1==="registration"){
          console.log("REGISTARTION DETAILS")
          console.log("Name:Sam")
          console.log("Address:Delhi")
          console.log("Bank name:HDFC")
          displaynext()
      }

      else if(ans.c1==="debit"){
        console.log("HAVE A DEBIT ACCOUNT IN HDFC")
        console.log("Account No.-8938460005567")
        console.log("IFSC No.-HDFC09987")
        console.log("Address: Delhi")
        console.log("Account Holder: Mr.Sam")
        console.log("Date:12 sep-2019")
        displaynext()

      }
      else if(ans.c1==="credit"){
        console.log("HAVE A CREDIT ACCOUNT IN HDFC")
        console.log("Account No.-189764689977")
        console.log("IFSC No.-HDFC09987")
        console.log("Address: Delhi")
        console.log("Account Holder: Mr.Sam")
        console.log("Date:12 sep-2019")
        displaynext()

      }
      else{
          console.log("ok bye..")
      }
    
  });
}
function displaynext(){
    inquirer
  .prompt([
    {
        type:'list',
        name:'c2',
        choices:['back']
    }
  ]).then(ans=>{
      if(ans.c2=="back"){
          display()
      }
  })

}
display()
  