function checkLogin(event) {
      event.preventDefault();

    
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

     
      if (username === 'user' && password === '1234') {
    
        window.location.href = 'file:///C:/Users/erldy/OneDrive/Documents/CS/Dy%20CS%20Website/Home.html'; 
      } else {
        alert('Invalid username or password. Please try again.');
      }
    }
	function reset(){
		window.location.href = 'file:///C:/Users/erldy/OneDrive/Documents/CS/Dy%20CS%20Website/Home.html'; 
	}