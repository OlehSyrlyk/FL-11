let email = prompt('Enter your email','');
const minemaillgn = 6;
let password = '';
let newpassword = '';
let adminpassword = 'AdminPass';
let newadminpassword ='';
const minpasswordlgn = 5;
let chgconfirm = '';
let oldusrpassword = '';

if (email === null || email === '') {
    alert('Canceled');
} else if (email.length < minemaillgn) {
    alert('I don`t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com') {
    password = prompt('Enter your password');
} else if (email === 'admin@gmail.com') {
    password = prompt('Enter your password');
} else {
    alert('I don`t know you');
}

if (password === null || password === '' ) {
    alert('Canceled');
} else if (password === 'UserPass') {
    chgconfirm = confirm('Do you want to change your password?');
    if (chgconfirm) {
        oldusrpassword = prompt('Enter your OLD password');
    } if (oldusrpassword === password){
          newpassword = prompt('Enter your NEW password');
          if (newpassword.length < minpasswordlgn) {
            alert('It’s too short password. Sorry.');   
          } else{
            if (newpassword === prompt('REENTER your NEW password')) {
                alert('You have successfully changed your password.');
            } else {
                alert('You wrote the wrong password');
            }
          }   
    } else if (oldusrpassword === null|| oldusrpassword === '') {
        alert('Cancelled'); 
    } else {
        alert('Wrong password');
    }
} else if (password === adminpassword) {
    chgconfirm = confirm('Do you want to change your password?'); 
    if (chgconfirm) {
        oldusrpassword = prompt('Enter your OLD password');
    } if (oldusrpassword === adminpassword){
          newadminpassword = prompt('Enter your NEW password');
          if (newpassword.length < minpasswordlgn) {
            alert('It’s too short password. Sorry.');   
          } else{
            if (newpassword === prompt('REENTER your NEW password')) {
                alert('You have successfully changed your password.');
            } else {
                alert('You wrote the wrong password');
            }
          }   
    } else if (oldusrpassword === null|| oldusrpassword === '') {
        alert('Cancelled'); 
    } else {
        alert('Wrong password');
    } 
}