//global variables

let dropdown1 = document.getElementById("firstRanking");
let dropdown2 = document.getElementById("secondRanking");
let dropdown3 = document.getElementById("thirdRanking");
let dropdown4 = document.getElementById("fourthRanking");
let dropdown5 = document.getElementById("fifthRanking");
//FUNCTIONS ----------------
function addRow() {
  let table = document.getElementById("results");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2)
    
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL 3";
}

function removeRow() {
  document.getElementById("results").deleteRow(-1);
}

function showHidden() {
  let elements = document.getElementsByClassName('hidden');
for (let i in elements) {
  if (elements.hasOwnProperty(i)) {
    elements[i].className = 'show-class';
    }
  }
}

function trustTheProcess() {
  document.getElementById("firstRanking").selectedIndex = 0;
  document.getElementById("secondRanking").selectedIndex = 0;
  document.getElementById("thirdRanking").selectedIndex = 0;
  document.getElementById("fourthRanking").selectedIndex = 0;
  document.getElementById("fifthRanking").selectedIndex = 0;
  displayPick();
}

function middleBuild() {
  document.getElementById("firstRanking").selectedIndex = 7;
  document.getElementById("secondRanking").selectedIndex = 8;
  document.getElementById("thirdRanking").selectedIndex = 9;
  document.getElementById("fourthRanking").selectedIndex = 10;
  document.getElementById("fifthRanking").selectedIndex = 11;
  displayPick();
}

function garPax() {
  document.getElementById("firstRanking").selectedIndex = 2;
  document.getElementById("secondRanking").selectedIndex = 3;
  document.getElementById("thirdRanking").selectedIndex = 6;
  document.getElementById("fourthRanking").selectedIndex = 6;
  document.getElementById("fifthRanking").selectedIndex = 6;
  displayPick();
}

function linearGrowth() {
  document.getElementById("firstRanking").selectedIndex = 0;
  document.getElementById("secondRanking").selectedIndex = 2;
  document.getElementById("thirdRanking").selectedIndex = 6;
  document.getElementById("fourthRanking").selectedIndex = 8;
  document.getElementById("fifthRanking").selectedIndex = 12;
  displayPick();
}

function displayPick() {
  let firstYear = document.getElementById("firstRanking").selectedIndex + 1;
  let secondYear = document.getElementById("secondRanking").selectedIndex + 1;
  let thirdYear = document.getElementById("thirdRanking").selectedIndex + 1;
  let fourthYear = document.getElementById("fourthRanking").selectedIndex + 1;
  let fifthYear = document.getElementById("fifthRanking").selectedIndex + 1;
  document.getElementById("number1").innerHTML = generatePick(firstYear);
  document.getElementById("number2").innerHTML = generatePick(secondYear);
  document.getElementById("number3").innerHTML = generatePick(thirdYear);
  document.getElementById("number4").innerHTML = generatePick(fourthYear);
  document.getElementById("number5").innerHTML = generatePick(fifthYear);
  document.getElementById("old1").innerHTML = oldOdds(firstYear);
  document.getElementById("old2").innerHTML = oldOdds(secondYear);
  document.getElementById("old3").innerHTML = oldOdds(thirdYear);
  document.getElementById("old4").innerHTML = oldOdds(fourthYear);
  document.getElementById("old5").innerHTML = oldOdds(fifthYear);
}


//function to generate a random number 1-1000 and convert that number into a pick based on tank ranking and pick odds
function generatePick(ranking = 1) {
  let num = Math.floor(Math.random() * 1000);
//  let ranking = document.querySelector("#firstRanking").value

//if finish with the worst record

  if (ranking == 1) {
    if (num >= 0 && num < 141) {
      return "<strong>1</strong>";
      }
    if (num > 140 && num < 274) {
      return 2;
      }
    if (num > 273 && num < 401) {
      return 3;
      }
    if (num > 400 && num < 521) {
      return 4;
      }
    if (num > 520 && num < 1000) {
      return 5;
      }

    }

//if finish with the 2nd-worst record

  if (ranking == 2) {
    if (num >= 0 && num < 141) {
      return "<strong>1</strong>";
      }
    if (num > 140 && num < 274) {
      return 2;
      }
    if (num > 273 && num < 401) {
      return 3;
      }
    if (num > 400 && num < 521) {
      return 4;
      }
    if (num > 520 && num < 799) {
      return 5;
      }
    if (num > 798 && num < 1000) {
      return 6;
      }

    }

//if finish with the 3rd-worst record
  if (ranking == 3) {
    if (num >= 0 && num < 141) {
      return "<strong>1</strong>";
      }
    if (num > 140 && num < 274) {
      return "<strong>2</strong>";
      }
    if (num > 273 && num < 401) {
      return 3;
      }
    if (num > 400 && num < 521) {
      return 4;
      }
    if (num > 520 && num < 669) {
      return 5;
      }
    if (num > 668 && num < 929) {
      return 6;
      }
    if (num > 928 && num < 1000) {
      return 7;
      }

    }

//4th
  if (ranking == 4) {
    if (num >= 0 && num < 125) {
      return "<strong>1</strong>";
      }
    if (num > 124 && num < 247) {
      return "<strong>2</strong>";
      }
    if (num > 246 && num < 366) {
      return "<strong>3</strong>";
      }
    if (num > 365 && num < 481) {
      return 4;
      }
    if (num > 480 && num < 553) {
      return 5;
      }
    if (num > 552 && num < 810) {
      return 6;
      }
    if (num > 809 && num < 977) {
      return 7;
      }
    if (num > 976 && num < 1000) {
      return 8;
      }

    }


//5th
  if (ranking == 5) {
    if (num >= 0 && num < 105) {
      return "<strong>1</strong>";
      }
    if (num > 104 && num < 210) {
      return "<strong>2</strong>";
      }
    if (num > 209 && num < 316) {
      return "<strong>3</strong>";
      }
    if (num > 315 && num < 421) {
      return "<strong>4</strong>";
      }
    if (num > 420 && num < 443) {
      return 5;
      }
    if (num > 442 && num < 639) {
      return 6;
      }
    if (num > 638 && num < 906) {
      return 7;
      }
    if (num > 905 && num < 993) {
      return 8;
      }
    if (num > 992 && num < 1000) {
      return 9;
      }

  }


//6th
  if (ranking == 6) {
    if (num >= 0 && num < 90) {
      return "<strong>1</strong>";
      }
    if (num > 89 && num < 182) {
      return "<strong>2</strong>";
      }
    if (num > 181 && num < 276) {
      return "<strong>3</strong>";
      }
    if (num > 275 && num < 372) {
      return "<strong>4</strong>";
      }
    if (num > 371 && num < 458) {
      return 6;
      }
    if (num > 457 && num < 756) {
      return 7;
      }
    if (num > 755 && num < 961) {
      return 8;
      }
    if (num > 960 && num < 998) {
      return 9;
      }
    if (num > 997 && num < 1000) {
      return 10;
      }

    }



//7th
  if (ranking == 7) {
    if (num >= 0 && num < 75) {
      return "<strong>1</strong>";
      }
    if (num > 74 && num < 153) {
      return "<strong>2</strong>";
      }
    if (num > 152 && num < 234) {
      return "<strong>3</strong>";
      }
    if (num > 233 && num < 319) {
      return "<strong>4</strong>";
      }
    if (num > 318 && num < 516) {
      return 7;
      }
    if (num > 515 && num < 857) {
      return 8;
      }
    if (num > 856 && num < 986) {
      return 9;
      }
    if (num > 985 && num < 1000) {
      return 10;
      }

    }



// 8th
  if (ranking == 8) {
    if (num >= 0 && num < 60) {
      return "<strong>1</strong>";
      }
    if (num > 59 && num < 123) {
      return "<strong>2</strong>";
      }
    if (num > 122 && num < 190) {
      return "<strong>3</strong>";
      }
    if (num > 189 && num < 262) {
      return "<strong>4</strong>";
      }
    if (num > 261 && num < 607) {
      return 8;
      }
    if (num > 606 && num < 928) {
      return 9;
      }
    if (num > 927 && num < 995) {
      return 10;
      }
    if (num > 994 && num < 1000) {
      return 11;
      }

    }


//fix 9th
  if (ranking == 9) {
    if (num >= 0 && num < 45) {
      return "<strong>1</strong>";
      }
    if (num > 44 && num < 93) {
      return "<strong>2</strong>";
      }
    if (num > 92 && num < 145) {
      return "<strong>3</strong>";
      }
    if (num > 144 && num < 202) {
      return "<strong>4</strong>";
      }
    if (num > 201 && num < 709) {
      return 9;
      }
    if (num > 708 && num < 968) {
      return 10;
      }
    if (num > 967 && num < 998) {
      return 11;
      }
    if (num > 997 && num < 1000) {
      return 12;
      }

    }


//fix 10th
  if (ranking == 10) {
    if (num >= 0 && num < 30) {
      return "<strong>1</strong>";
      }
    if (num > 29 && num < 63) {
      return "<strong>2</strong>";
      }
    if (num > 62 && num < 99) {
      return "<strong>3</strong>";
      }
    if (num > 98 && num < 139) {
      return "<strong>4</strong>";
      }
    if (num > 138 && num < 798) {
      return 10;
      }
    if (num > 797 && num < 988) {
      return 11;
      }
    if (num > 987 && num < 1000) {
      return 12;
      }
    }


//11th
  if (ranking == 11) {
    if (num >= 0 && num < 20) {
      return "<strong>1</strong>";
      }
    if (num > 19 && num < 42) {
      return "<strong>2</strong>";
      }
    if (num > 41 && num < 66) {
      return "<strong>3</strong>";
      }
    if (num > 65 && num < 94) {
      return "<strong>4</strong>";
      }
    if (num > 93 && num < 870) {
      return 11;
      }
    if (num > 869 && num < 996) {
      return 12;
      }
    if (num > 995 && num < 1000) {
      return 13;
      }
    }


//12th
  if (ranking == 12) {
    if (num >= 0 && num < 15) {
      return "<strong>1</strong>";
      }
    if (num > 14 && num < 32) {
      return "<strong>2</strong>";
      }
    if (num > 31 && num < 51) {
      return "<strong>3</strong>";
      }
    if (num > 50 && num < 72) {
      return "<strong>4</strong>";
      }
    if (num > 71 && num < 933) {
      return 12;
      }
    if (num > 932 && num < 999) {
      return 13;
      }
    if (num > 998 && num < 1000) {
      return 14;
      }
    }


//13th
  if (ranking == 13) {
    if (num >= 0 && num < 10) {
      return "<strong>1</strong>";
      }
    if (num > 9 && num < 21) {
      return "<strong>2</strong>";
      }
    if (num > 20 && num < 33) {
      return "<strong>3</strong>";
      }
    if (num > 32 && num < 47) {
      return "<strong>4</strong>";
      }
    if (num > 46 && num < 976) {
      return 13;
      }
    if (num > 975 && num < 1000) {
      return 14;
      }
    }
    

//14th 
if (ranking == 14) {
  if (num >= 0 && num < 5) {
    return "<strong>1</strong>";
    }
  if (num > 4 && num < 11) {
    return "<strong>2</strong>";
    }
  if (num > 10 && num < 17) {
    return "<strong>3</strong>";
    }
  if (num > 16 && num < 24) {
    return "<strong>4</strong>";
    }
  if (num > 23 && num < 1000) {
    return 14;
    }
  }
}




function oldOdds(ranking = 1) {
  let num = Math.floor(Math.random() * 1000);
//  let ranking = document.querySelector("#firstRanking").value

//if finish with the worst record

  if (ranking == 1) {
    if (num >= 0 && num < 250) {
      return "<strong>1</strong>";
      }
    if (num > 249 && num < 465) {
      return 2;
      }
    if (num > 464 && num < 643) {
      return 3;
      }
    if (num > 642 && num < 1000) {
      return 4;
      }
  }

//if finish with the 2nd-worst record

  if (ranking == 2) {
    if (num >= 0 && num < 199) {
      return "<strong>1</strong>";
      }
    if (num > 198 && num < 387) {
      return 2;
      }
    if (num > 386 && num < 558) {
      return 3;
      }
    if (num > 557 && num < 877) {
      return 4;
      }
    if (num > 876 && num < 1000) {
      return 5;
      }
  }

//if finish with the 3rd-worst record
  if (ranking == 3) {
    if (num >= 0 && num < 156) {
      return "<strong>1</strong>";
      }
    if (num > 155 && num < 313) {
      return "<strong>2</strong>";
      }
    if (num > 312 && num < 469) {
      return 3;
      }
    if (num > 468 && num < 695) {
      return 4;
      }
    if (num > 694 && num < 960) {
      return 5;
      }
    if (num > 959 && num < 1000) {
      return 6;
      }
    }

//4th
  if (ranking == 4) {
    if (num >= 0 && num < 119) {
      return "<strong>1</strong>";
      }
    if (num > 118 && num < 245) {
      return "<strong>2</strong>";
      }
    if (num > 244 && num < 378) {
      return "<strong>3</strong>";
      }
    if (num > 377 && num < 477) {
      return 4;
      }
    if (num > 476 && num < 827) {
      return 5;
      }
    if (num > 826 && num < 988) {
      return 6;
      }
    if (num > 987 && num < 1000) {
      return 7;
      }
    }


//5th
  if (ranking == 5) {
    if (num >= 0 && num < 88) {
      return "<strong>1</strong>";
      }
    if (num > 87 && num < 185) {
      return "<strong>2</strong>";
      }
    if (num > 184 && num < 292) {
      return "<strong>3</strong>";
      }
    if (num > 291 && num < 553) {
      return 5;
      }
    if (num > 552 && num < 912) {
      return 6;
      }
    if (num > 911 && num < 996) {
      return 7;
      }
    if (num > 995 && num < 1000) {
      return 8;
      }
  }


//fix 6th
  if (ranking == 6) {
    if (num >= 0 && num < 63) {
      return "<strong>1</strong>";
      }
    if (num > 62 && num < 134) {
      return "<strong>2</strong>";
      }
    if (num > 133 && num < 215) {
      return "<strong>3</strong>";
      }
    if (num > 214 && num < 656) {
      return 6;
      }
    if (num > 655 && num < 960) {
      return 7;
      }
    if (num > 959 && num < 999) {
      return 8;
      }
    if (num > 998 && num < 1000) {
      return 9;
      }
    }



//7th
  if (ranking == 7) {
    if (num >= 0 && num < 43) {
      return "<strong>1</strong>";
      }
    if (num > 42 && num < 92) {
      return "<strong>2</strong>";
      }
    if (num > 91 && num < 150) {
      return "<strong>3</strong>";
      }
    if (num > 149 && num < 749) {
      return 7;
      }
    if (num > 748 && num < 981) {
      return 8;
      }
    if (num > 980 && num < 1000) {
      return 9;
      }
    }



// 8th
  if (ranking == 8) {
    if (num >= 0 && num < 28) {
      return "<strong>1</strong>";
      }
    if (num > 27 && num < 61) {
      return "<strong>2</strong>";
      }
    if (num > 60 && num < 100) {
      return "<strong>3</strong>";
      }
    if (num > 99 && num < 825) {
      return 8;
      }
    if (num > 824 && num < 993) {
      return 9;
      }
    if (num > 992 && num < 1000) {
      return 10;
      }
    }


//9th
  if (ranking == 9) {
    if (num >= 0 && num < 17) {
      return "<strong>1</strong>";
      }
    if (num > 16 && num < 37) {
      return "<strong>2</strong>";
      }
    if (num > 36 && num < 61) {
      return "<strong>3</strong>";
      }
    if (num > 60 && num < 874) {
      return 9;
      }
    if (num > 873 && num < 996) {
      return 10;
      }
    if (num > 995 && num < 1000) {
      return 11;
      }
    }


//10th
  if (ranking == 10) {
    if (num >= 0 && num < 11) {
      return "<strong>1</strong>";
      }
    if (num > 10 && num < 24) {
      return "<strong>2</strong>";
      }
    if (num > 23 && num < 40) {
      return "<strong>3</strong>";
      }
    if (num > 39 && num < 910) {
      return 10;
      }
    if (num > 909 && num < 999) {
      return 11;
      }
    if (num > 998 && num < 1000) {
      return 12;
      }
    }


//11th
  if (ranking == 11) {
    if (num >= 0 && num < 8) {
      return "<strong>1</strong>";
      }
    if (num > 7 && num < 17) {
      return "<strong>2</strong>";
      }
    if (num > 16 && num < 29) {
      return "<strong>3</strong>";
      }
    if (num > 28 && num < 936) {
      return 11;
      }
    if (num > 935 && num < 999) {
      return 12;
      }
    if (num > 998 && num < 1000) {
      return 13;
      }
    }


//12th
  if (ranking == 12) {
    if (num >= 0 && num < 7) {
      return "<strong>1</strong>";
      }
    if (num > 6 && num < 15) {
      return "<strong>2</strong>";
      }
    if (num > 14 && num < 25) {
      return "<strong>3</strong>";
      }
    if (num > 24 && num < 960) {
      return 12;
      }
    if (num > 959 && num < 999) {
      return 13;
      }
    if (num > 998 && num < 1000) {
      return 14;
      }
    }


//13th
  if (ranking == 13) {
    if (num >= 0 && num < 6) {
      return "<strong>1</strong>";
      }
    if (num > 5 && num < 13) {
      return "<strong>2</strong>";
      }
    if (num > 12 && num < 22) {
      return "<strong>3</strong>";
      }
    if (num > 21 && num < 982) {
      return 13;
      }
    if (num > 981 && num < 1000) {
      return 14;
      }
    }
    

//14th 
if (ranking == 14) {
  if (num >= 0 && num < 5) {
    return "<strong>1</strong>";
    }
  if (num > 4 && num < 11) {
    return "<strong>2</strong>";
    }
  if (num > 10 && num < 18) {
    return "<strong>3</strong>";
    }
  if (num > 17 && num < 1000) {
    return 14;
    }
  }
}
