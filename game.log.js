function username(){
  Number1 = document.getElementById("n1").value;
    Number2 = document.getElementById("n2").value;
    
    localStorage.setItem("number1", Number1);
    localStorage.setItem("number2", Number2);
    window.location="quiz.html"
    }