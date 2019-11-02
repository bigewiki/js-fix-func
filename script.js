const createMenu = (startNum, endNum, menuMsg, targetId) => {
  var strMsg = `<option style="display:none" value="">${menuMsg}</option>`;
  var counter = startNum;
  while (counter <= endNum) {
    strMsg += `<option value="${counter}">${counter}</option>`;
    counter++;
  }
  document.getElementById(targetId).innerHTML = strMsg;
};

const setupStuff = () => {
  //setting up new day for today
  const today = new Date();
  //getting the last day of the month with this voodoo magic js
  const lastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  //create the first menu
  createMenu(1, lastDay, "Choose a Day", "daymenu");
  //creating an old year variable
  const oldYear = today.getFullYear() - 125;
  //creating a this year var
  const thisYear = today.getFullYear();
  //creating the year menu!
  createMenu(oldYear, thisYear, "Choose a Year", "yearmenu");
  //creating the month menu
  createMenu(1, 12, "Choose a Month", "monthmenu");
  // and for some reason they need to choose a value from 25 to 1000
  createMenu(25, 1000, "Choose a Number", "numbermenu");
};

window.onload = setupStuff;
