let totalMatch = 0;
const initialState = {
  match: [],
};

//create a new match
function createMatch() {
  //retrieve match from local storage
  let match = JSON.parse(localStorage.getItem("match"));

  const matchNumber = document.querySelectorAll(".match").length + 1;

  if (matchNumber > totalMatch) {
    totalMatch = matchNumber;
  } else {
    totalMatch = totalMatch + 1;
  }

  // set initial state
  initialState.match.push({
    matchName: `Match ${totalMatch}`,
    value: 0,
  });

  // get current date and time
  // var today = new Date();
  // var date =
  //   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // var time =
  //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // var dateTime = date + " " + time;

  const matchName = `Match ${totalMatch}`;

  //create a new match
  var newMatch = document.createElement("div");
  // newMatch.classList.add("match");
  newMatch.innerHTML = `
   <div class="match">
          <div class="wrapper">
            <button onClick="(deleteMatch(${totalMatch}))" class="lws-delete deleteBtn${totalMatch}">
              <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">${matchName}</h3>
          </div>
          <div class="inc-dec">
            <form class="incrementForm">
              <h4>Increment</h4>
              <input type="number" name="increment${totalMatch}" class="lws-increment" id="increment${totalMatch}" />
            </form>
            <form class="decrementForm">
              <h4>Decrement</h4>
              <input type="number" name="decrement${totalMatch}" class="lws-decrement" id="decrement${totalMatch}" />
            </form>
          </div>
          <div class="numbers">
            <h2 class="lws-singleResult" id="screen${totalMatch}">0</h2>
          </div>
        </div>
  
  `;
  document.getElementById("allMatches").appendChild(newMatch);

  //set at local storage
  localStorage.setItem("match", JSON.stringify(match));
}

//delete a match from the list
function deleteMatch(e) {
  const match = document.querySelector(`.deleteBtn${e}`).parentElement
    .parentElement;
  match.remove();
  //render match names
}

// select dom elements

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = () => {
  const value = parseInt(document.getElementById("increment-value").value) || 0;
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = () => {
  const value = parseInt(document.getElementById("decrement-value").value) || 0;
  return {
    type: DECREMENT,
    payload: value,
  };
};
