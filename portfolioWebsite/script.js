const toggleDropdown = () => {
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
};

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = checkTime(today.getMinutes());
  let s = checkTime(today.getSeconds());

  document.getElementById("time").innerHTML = `${h}:${m}:${s}`;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  return i < 10 ? "0" + i : i; // Add leading zero if needed
}
