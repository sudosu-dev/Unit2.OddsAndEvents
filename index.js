let unsorted = [];
let evens = [];
let odds = [];

function addToBank(number) {
  number = Number(number);
  if (typeof number === "number" && !Number.isNaN(number)) {
    if (
      !unsorted.includes(Math.trunc(number)) &&
      !evens.includes(Math.trunc(number)) &&
      !odds.includes(Math.trunc(number))
    ) {
      unsorted.push(Math.trunc(number));
    } else {
      alert("That number is already in the system.");
    }
  } else {
    alert("You did not enter a number. Please try again.");
  }
  render();
}

function sortFirst() {
  if (unsorted.length === 0) {
    alert("There are no numbers to sort.");
    return;
  }

  if (unsorted[0] % 2 === 0) {
    evens.push(unsorted[0]);
    unsorted.shift();
  } else if (unsorted[0] % 2 === 1) {
    odds.push(unsorted[0]);
    unsorted.shift();
  }
  render();
}

function sortAll() {
  if (unsorted.length === 0) {
    alert("There are no numbers to sort.");
    return;
  }

  for (const numToCheck of unsorted) {
    if (numToCheck % 2 === 0) {
      evens.push(numToCheck);
    } else if (numToCheck % 2 === 1) {
      odds.push(numToCheck);
    }
  }
  unsorted = [];
  render();
}

// ========= components ============

function getInputForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
<label>
  Add a number to the bank
  <input name="add-number" />
</label>
<button>Add number</button>
`;
  $form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = document.querySelector("input[name='add-number']").value;
    addToBank(value);
  });
  return $form;
}

function getSortOneButton() {
  const $button = document.createElement("button");
  $button.setAttribute("name", "sort-one-button");
  $button.textContent = "Sort 1";
  $button.addEventListener("click", function (e) {
    e.preventDefault();
    sortFirst();
  });
  return $button;
}

function getSortAllButton() {
  const $button = document.createElement("button");
  $button.setAttribute("name", "sort-all-button");
  $button.textContent = "Sort all";
  $button.addEventListener("click", function (e) {
    e.preventDefault();
    sortAll();
  });
  return $button;
}

function getControls() {
  const $controls = document.createElement("div");
  $controls.append(getInputForm(), getSortOneButton(), getSortAllButton());
  return $controls;
}

function displayBank() {
  const $output = document.createElement("output");
  //   $output.setAttribute("name", "bank-display");
  console.log("unsorted array", unsorted);
  $output.textContent = unsorted.toString();
  return $output;
}

function displayEvens() {
  const $output = document.createElement("output");
  //   $output.setAttribute("name", "evens-display");
  console.log("evens array", evens);
  $output.textContent = evens.toString();
  return $output;
}

function displayOdds() {
  const $output = document.createElement("output");
  //   $output.setAttribute("name", "odds-display");
  $output.textContent = odds.toString();
  return $output;
}

// ============ render ===================

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML =
    "<h1>Odds and Events</h1><p><getControls></getControls></p><h2>Bank</h2><p><displayBank></displayBank></p><h2>Odds</h2><p><displayOdds></displayOdds></p><h2>Evens</h2><p><displayEvens></displayEvens></p>";
  $app.querySelector("getControls").replaceWith(getControls());
  $app.querySelector("displayBank").replaceWith(displayBank());
  $app.querySelector("displayOdds").replaceWith(displayOdds());
  $app.querySelector("displayEvens").replaceWith(displayEvens());
}

render();
