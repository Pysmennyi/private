let email_input = prompt(`please enter the email: `);
let user =`user@gmail.com`;
let admin = `admin@gmail.com`;
let user_password=`UserPass`;
let admin_password=`AdminPass`;
let length_1 = 6;
let length_2 = 5;

if (!email_input){
    alert(`Canceled`);
} else if(email_input.length<length_1){
    alert(`I don\`t know any emails having name length less than 6 symbols`);
}else if(email_input===user||email_input===admin){
    const password_input = prompt(`Please enter the password: `);
    if (!password_input){
        alert(`Canceled`);
    }else if(email_input === user && password_input === user_password ||
        email_input === admin && password_input === admin_password) {
        const confirm_pass = confirm(`Do you want to change your password?`);
     if (!confirm_pass) {
        alert(`You have failed the change.`);
    }else if(confirm_pass){
         const ask_old_pass = prompt(`write the old password: `);
         if(email_input === user && ask_old_pass === user_password ||
             email_input === admin && ask_old_pass === admin_password) {
     const new_pass = prompt(`enter the new password: `);
     if (new_pass.length<length_2){
         alert(`It’s too short password. Sorry.`);
     }else{
         const second_pass_check = prompt(`Please, enter new password again: `);
         if (second_pass_check===new_pass){
             alert(`You have successfully changed your password`);
         }else {
             alert(`You wrote the wrong password.`);
         }
     }
         }
     }
    }else {
        alert(`Wrong password`);
}
}else{
    alert(`I don\`t know you`);
}

