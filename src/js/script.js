export function logic() {
  
  // Get elements
  const search = document.getElementsByClassName('search');
  const lower = document.getElementsByClassName("lower");
  const clear = document.getElementsByClassName("clear");
  const vehicle = document.querySelector(".selection");
  let name = document.getElementById("usinglocal");
  const sign = document.getElementById("sign");
  const ad = document.querySelector(".ad-slider");
  const model = document.getElementsByClassName("model");
  const history = document.getElementById("history");
  const carInfo = document.getElementsByClassName("carInfo1");
  let card = 0;
  const wheels = 2;
  const service = 3;
  const modification = 2;
  const cleaning = 3;
  let count = 0;
  let stationNames = [0,"PITSTOP", "AUTOHUB", "TURBOCARE SERVICE STATION"];
  let ads = ["Express Car Wash", "Perfect Stop"];
  const adnames = document.getElementsByClassName("ad-slide"); // Select actual ad slide elements
  const naming = ["Express Car Wash", "Perfect Stop"]

  const model1 = localStorage.getItem("Model") || "";
  const carType = localStorage.getItem("CarType") || "";

  document.getElementById("model").value = model1;
  document.getElementById("CarType").value = carType;

  history.addEventListener("click", ()=>{
    window.location.href = "/history.html"
  });

  let adIndex = 0;
  const adSlider = document.getElementById("adSlides");
  const totalAdSlides = adSlider.children.length;
  const leftBtn = document.querySelector(".ad-left");
  const rightBtn = document.querySelector(".ad-right");

  function slideAd(direction) {
    adIndex += direction;
    if (adIndex < 0) adIndex = totalAdSlides - 1;
    if (adIndex >= totalAdSlides) adIndex = 0;
    adSlider.style.transform = `translateX(-${adIndex * 100}%)`;
  }

  // Attach event listeners for the slider buttons
  leftBtn.addEventListener("click", () => slideAd(-1));
  rightBtn.addEventListener("click", () => slideAd(1));

  // Auto-slide functionality
  setInterval(() => {
    slideAd(1);
  }, 4000);

  const name1 = localStorage.getItem("username");
  if (name1) {
    document.getElementById("usinglocal").innerText = name1;
  }
  if (document.getElementById("usinglocal").innerText != "User") {
    sign.style.display = "none";
  }

function saveData() {
  localStorage.setItem("Model", carInfo[0].value);
  localStorage.setItem("CarType", vehicle.value);
}

  function removeElement() {
    while (lower[0].firstChild) {
      lower[0].removeChild(lower[0].firstChild);
    }
  }

  function contact(num, elem) {
    const phone = document.createElement("div");
    phone.classList.add("specificInfo");
    phone.innerText = `Contact - ${num}`;
    elem.append(phone);
  }

  function address(lane, elem) {
    const location = document.createElement("div");
    location.classList.add("specificInfo");
    location.innerText = `Address - ${lane}`;
    elem.append(location);
  }

  function book(elem) {
    const booking = document.createElement("div");
    booking.classList.add("booking");
    booking.classList.add("specificInfo");
    booking.innerText = "Book now";
    elem.append(booking);

    booking.addEventListener("click", () => {
      let parent = booking.parentElement.parentElement.firstChild;
      localStorage.setItem("StName", parent.innerText);
      window.location.href = "/booking.html";
      saveData();
    });
  }

  // Ensure ad elements exist before adding event listeners
  if (adnames.length > 0) {
    adnames[0].addEventListener("click", () => {
      window.location.href = "/booking.html";
      localStorage.setItem("StName", naming[0]); // Set name from the first ad
      saveData();
      
    });

    adnames[1].addEventListener("click", () => {
      window.location.href = "/booking.html";
      localStorage.setItem("StName", naming[1]); // Set name from the second ad
      saveData();
    });
  }

  function stationName(elem, name) {
    elem.innerText = name;
  }

  clear[0].addEventListener("click", () => {
    count = 0;
    search[0].value = "";
  });

  search[0].addEventListener('keydown', (e) => {
    if (e.key === "Enter" && count == 0) {
      let searchChanged = search[0].value.toLowerCase();
      ad.style.display = "none";
      if (searchChanged == "wheels") {
        count++;
        removeElement();
        for (let i = 0; i < wheels; i++) {
          card++;
          const result = document.createElement("div");
          result.classList.add("card");
          lower[0].append(result);
          for (let j = 1; j < 3; j++) {
            const info = document.createElement("div");
            info.classList.add("info");
            info.classList.add(`info${j}`);
            result.append(info);
            if (j == 1) {
              info.innerText = stationNames[card];
            }
            if (j == 2) {
              contact(9796654527, info);
              address("Samba", info);
              book(info);
            }
          }
        }
        card = 0;
      } else if (searchChanged == "service" || searchChanged == "servicing") {
        removeElement();
        for (let i = 0; i < service; i++) {
          card++;
          const result = document.createElement("div");
          result.classList.add("card");
          lower[0].append(result);
          for (let j = 1; j < 3; j++) {
            const info = document.createElement("div");
            info.classList.add("info");
            info.classList.add(`info${j}`);
            result.append(info);
            if (j == 1) {
              info.innerText = stationNames[card];
            }
            if (j == 2) {
              contact(9796654527, info);
              address("Samba", info);
              book(info);
            }
          }
        }
        card = 0;
      } else if (searchChanged == "emergency") {
        removeElement();
        const helpline  = document.createElement("a");
	      helpline.classList.add("help");
        helpline.href = "tel: 6262175662"
        helpline.textContent= "Call on this no. 6262175662"
        lower[0].append(helpline);

	
      } 
      
      else if (searchChanged == "cleaning") {
        removeElement();
        for (let i = 0; i < cleaning; i++) {
          card++;
          const result = document.createElement("div");
          result.classList.add("card");
          lower[0].append(result);
          for (let j = 1; j < 3; j++) {
            const info = document.createElement("div");
            info.classList.add("info");
            info.classList.add(`info${j}`);
            result.append(info);
            if (j == 1) {
              info.innerText = stationNames[card];
            }
            if (j == 2) {
              contact(9796654527, info);
              address("Samba", info);
              book(info);
            }
          }
        }
        card = 0;
      } else if (searchChanged == "modification") {
        removeElement();
        for (let i = 0; i < modification; i++) {
          card++;
          const result = document.createElement("div");
          result.classList.add("card");
          lower[0].append(result);
          for (let j = 1; j < 3; j++) {
            const info = document.createElement("div");
            info.classList.add("info");
            info.classList.add(`info${j}`);
            result.append(info);
            if (j == 1) {
              info.innerText = stationNames[card];
            }
            if (j == 2) {
              contact(9796654527, info);
              address("Samba", info);
              book(info);
            }
          }
        }
        card = 0;
      } else {
        removeElement();
        const noResult = document.createElement("h3");
        noResult.classList.add("heading");
        noResult.innerText = `No search results for "${search[0].value}" try searching for something else`;
        lower[0].append(noResult);
      }
    } else if (e.key == "Backspace") {
      if (search[0].value.length == 0) {
        count = 0;
      }
    }
  });

};
