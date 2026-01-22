// Function to dynamically create HTML elements from the JSON file
function addModalListeners() {
    const buttons = document.querySelectorAll(".open-project-modal");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const portfolioKey = button.dataset.portfolio;
            const index = button.dataset.projectIndex;
            const project = portfolios[portfolioKey][index];
            if(!project) return ;

            document.getElementById("modalTitle").textContent = project.title;
            document.getElementById("modalResume").textContent = project.resumeText;
            document.getElementById("modalObjective").textContent = project.objectiveText;

            const progressionList = document.getElementById("modalProgression");
            progressionList.innerHTML = "";

            if (project.progressionText?.length) {
            project.progressionText.forEach(progression => {
                const li = document.createElement("li");
                li.textContent = progression;
                progressionList.appendChild(li);
            });
            }
            
            const link = document.getElementById("modalLink");
            if (project.link) {
                link.href = project.link;
                link.style.display = "inline-block";
            } else {
                link.style.display = "none";
            }
        });
    });
}

const portfolios = {
    professional: [],
    personalDone: [],
    personalFuture: []
}



function createPortfolioFromJSON() {
    const container = document.querySelector("#professional_portfolio");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            portfolios.professional = data;
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="images/Portfolio/${item.image}" alt="${item.alt}">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <div class="text-center">
                            <button 
                            class="btn btn-success open-project-modal"
                            data-portfolio="professional"
                            data-project-index="${index}"
                            data-bs-toggle="modal"
                            data-bs-target="#projectModal"
                            >
                                Détails du projet
                            </button>
                        </div>
                    </div>
                </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
            addModalListeners();
        });
}

function createPersonalDonePortfolioFromJSON() {
    const container = document.querySelector("#personal_portfolio_done");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/personal_portfolio_done.json")
        .then((response) => response.json())
        .then((data) => {
            portfolios.personalDone = data;
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="images/Portfolio/${item.image}" alt="${item.alt}">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <div class="text-center">
                            <button 
                            class="btn btn-success open-project-modal"
                            data-portfolio="personalDone"
                            data-project-index="${index}"
                            data-bs-toggle="modal"
                            data-bs-target="#projectModal"
                            >
                                Détails du projet
                            </button>
                        </div>
                    </div>
                </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
            addModalListeners();
        });
}

function createPersonalFuturePortfolioFromJSON() {
    const container = document.querySelector("#personal_portfolio_future");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/personal_portfolio_future.json")
        .then((response) => response.json())
        .then((data) => {
            portfolios.personalFuture = data;
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="images/Portfolio/${item.image}" alt="${item.alt}">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <div class="text-center">
                            <button 
                            class="btn btn-success open-project-modal"
                            data-portfolio="personalFuture"
                            data-project-index="${index}"
                            data-bs-toggle="modal"
                            data-bs-target="#projectModal"
                            >
                                Détails du projet
                            </button>
                        </div>
                    </div>
                </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
            addModalListeners();
        });
}

createPortfolioFromJSON();
createPersonalDonePortfolioFromJSON();
createPersonalFuturePortfolioFromJSON()