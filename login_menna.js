var users = { username : "" , Password : "" , Phone :"" ,  Age :"" , Gender :"" } ;
if(Password)
function accountt ()
{
    users.username = document.getElementById('username').value;
    users.Password = document.getElementById('Password').value;
    users.Phone = document.getElementById('Phone').value;
    users.Age = document.getElementById('Age').value;
    users.Gender = document.getElementById('Gender').value;
}
function check ()
{
    users.username = document.getElementById('username').value;
    users.Password = document.getElementById('Password').value;
   
    if(username==users.username && Password==  users.Password)
    {
        alert('Login successfully');
    }
    else
    {
        alert('not user');
    }
}
var user={username:""};
var newpass={newpass:""};
function checks(){
    user.username=document.getElementById('username').value;
    newpass.newpass=document.getElementById('newpass').value;
    if(user==users.username&&user==newpass.newpass)
    {
        alert('successfully');
    }
    else
    {
        alert('not found');
    }
}

