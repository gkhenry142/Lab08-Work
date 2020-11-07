window.onload = function (){


let m_passwordLabel = document.getElementById('passwordLabel');
let m_passwordTextBox1 = document.getElementById('passwordTextBox1');
let m_passwordButton = document.getElementById('passwordButton');
let m_confirmedLabel = document.getElementById('confirmedLabel');
let m_passwordTextBox2 = document.getElementById('passwordTextBox2');

m_passwordButton.addEventListener('click', enterPassword);

function enterPassword() {
    if(m_passwordTextBox1.value == m_passwordTextBox2.value) {
        m_passwordButton.innerHTML = "Enter another Password";
        m_passwordLabel.innerHTML = "Passwords: ";
        m_confirmedLabel.innerHTML = "Confirmed!";
    }
    else{
        m_passwordButton.innerHTML = "Try again";
        m_passwordLabel.innerHTML = "Passwords: ";
        m_confirmedLabel.innerHTML = "Failed, please enter password again.";
    }

    m_passwordButton.addEventListener('click', reloadPage)
    
}

function reloadPage() {
    location.reload();
}


}
