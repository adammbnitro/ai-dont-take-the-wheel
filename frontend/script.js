// Menu button functionality

const menuButton = document.getElementById("menuButton");

const menuPage = document.querySelector("#menuPage");

menuButton.addEventListener("click", () => {
  console.log("Menu button clicked");

  menuPage.classList.toggle("hidden");

  storySelectPage.classList.add("hidden");
  milestonesPage.classList.add("hidden");
});

// Timer functionality

// Check if we already have a saved start time
if (localStorage.getItem('timerStartTime')) {
    // We have a saved time, so use it
    startTime = parseInt(localStorage.getItem('timerStartTime'));
} else {
    // No saved time, so start fresh
    startTime = Date.now(); // Get current timestamp in milliseconds
    localStorage.setItem('timerStartTime', startTime);
}

function updateTimer() {
    // Calculate how much time has passed since we started
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime; // This gives us milliseconds
    
    // Convert milliseconds to seconds, minutes, hours, days
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let days = Math.floor(totalSeconds / 86400);

        // Update HTML elements
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
}

// Run updateTimer every 1000 milliseconds (1 second)
setInterval(updateTimer, 1000);
updateTimer();

// Reset button functionality

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
    console.log("Reset button clicked");
    
    // Clear local storage
    localStorage.removeItem('timerStartTime');

    // Reset start time
    startTime = Date.now();
    localStorage.setItem('timerStartTime', startTime);
    updateTimer();
  
  });

  // Clicking on a menu option removes the menu page

  const menuOptions = document.querySelector(".menu-option");

  menuOptions.addEventListener("click", () => {
    console.log("Menu option tab clicked");

    menuPage.classList.add("hidden");

    menuOptions.classList.remove("hidden");
  });

  // Milestones tab functionality

  const milestonesTab = document.getElementById("milestonesTab");

  const milestonesPage = document.getElementById("milestonePage");

  milestonesTab.addEventListener("click", () => {
    console.log("Milestones tab clicked");

    milestonesPage.classList.remove("hidden");

  });

  // ⬅️ Clicking the back button returns the menu page and removes all other pages

  // Add one event listener to the document body
  document.body.addEventListener("click", (event) => {
      // Check if the clicked element has the "backToMenu" class
      if (event.target.classList.contains("backToMenu")) {
          console.log("Back to menu button clicked");

          // Show menu page
          menuPage.classList.remove("hidden");
          
          // Hide all other pages
          milestonesPage.classList.add("hidden");
          storySelectPage.classList.add("hidden");
      }
  });

  // Milestones data structure to facilitate easy story selection prompt and card swtiching

  const milestonesData = {
  Mountain: {
    basecamp: { 
      name: "Basecamp", 
      day: [0, 1], 
      image: "./images/mountain/basecamp.jpg" 
    },
    firstClimb: { 
      name: "First Climb", 
      day: [3, 6], 
      image: "images/mountain/firstClimb.jpg" 
    },
    abandonedHut: { 
      name: "Abandoned Hut", 
      day: [9, 12], 
      image: "images/mountain/abandonedHut.jpg" 
    },
    ropeBridge: { 
      name: "Rope Bridge", 
      day: [15, 18], 
      image: "images/mountain/ropeBridge.jpg" 
    },
    secondClimb: { 
      name: "Second Climb", 
      day: [24, 30], 
      image: "images/mountain/secondClimb.jpg" 
    },
    ravine: { 
      name: "Ravine", 
      day: [35, 40], 
      image: "images/mountain/ravine.jpg" 
    },
    iceCave: { 
      name: "Ice Cave", 
      day: [45, 50], 
      image: "images/mountain/iceCave.jpg" 
    },
    signalTower: { 
      name: "Signal Tower", 
      day: [55, 60], 
      image: "images/mountain/signalTower.jpg" 
    },
    highAltitude: { 
      name: "High Altitude", 
      day: [67, 74, 81], 
      image: "images/mountain/highAltitude.jpg" 
    },
    summit: { 
      name: "Summit", 
      day: [88, 90], 
      image: "images/mountain/summit.jpg" 
    }
  },
  Colosseum: {
    prison: { 
      name: "Prison", 
      day: [0, 1], 
      image: "./images/colosseum/prison.jpg" 
    },
    entrance: { 
      name: "Entrance", 
      day: [3, 6], 
      image: "./images/colosseum/entrance.jpg" 
    },
    commonerOpponent: { 
      name: "Commoner", 
      day: [9, 12], 
      image: "./images/colosseum/comOpp.jpg" 
    },
    threeCommonersOpponent: { 
      name: "Three Commoners", 
      day: [15, 18], 
      image: "./images/colosseum/threeComOpp.jpg" 
    },
    gladiatorOpponent: { 
      name: "Gladiator", 
      day: [24, 30], 
      image: "./images/colosseum/gladOpp.jpg" 
    },
    beast: { 
      name: "Beast", 
      day: [35, 40], 
      image: "./images/colosseum/beastOpp.jpg" 
    },
    navalBattle: { 
      name: "Naval Battle", 
      day: [45, 50], 
      image: "./images/colosseum/naval.jpg" 
    },
    horseBackBattle: { 
      name: "Horseback", 
      day: [55, 60], 
      image: "./images/colosseum/horse.jpg" 
    },
    strippedOfArmor: { 
      name: "Stripped Of Armor", 
      day: [67, 74, 81], 
      image: "./images/colosseum/stripped.jpg" 
    },
    knighted: { 
      name: "Knighted", 
      day: [88, 90], 
      image: "./images/colosseum/knighted.jpg" 
    }
  }
};

// Syncing milestone cards to data structure

// Story selector tab functionality

const storySelectTab = document.getElementById("storySelectTab");

const storySelectPage = document.getElementById("storySelectPage");

storySelectTab.addEventListener("click", () => {
  console.log("Story selector tab clicked");

  menuPage.classList.add("hidden");

  storySelectPage.classList.remove("hidden");
});

