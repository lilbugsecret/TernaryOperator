function clickMe() {
  let a = prompt("Nhập vào số a:");
  let b = prompt("Nhập vào số b:");
  let sum = parseFloat(a) + parseFloat(b);
  sum > 4 ? alert("Below") : alert("Over");
}
function clickMe2() {
  let message = prompt("Nhập vào tin nhắn:", "");
  message == "Employee"
    ? alert("Hello")
    : message == "Director"
    ? alert("Greetings")
    : message == ""
    ? alert("No login")
    : alert("Other");
}
function clickMe3() {}
