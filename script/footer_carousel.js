function createFooterCarousel() {
    const carouselContainer = document.getElementById("carouselContent");

    fetch("data/portfolio.json")
        .then(response => response.json())
        .then(data => {
            data.forEach((project, index) => {
                const carouselItem = document.createElement("article");

                // La première slide DOIT avoir la classe "active"
                carouselItem.classList.add("carousel-item");
                if (index === 0) {
                    carouselItem.classList.add("active");
                }

                carouselItem.innerHTML = `
                  <div class="d-flex flex-column align-items-center text-center p-4">
                    <p class="mb-2">${project.resumeText}</p>
                    <a 
                      href="${project.link}" 
                      class="btn btn-outline-light btn-sm"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Voir le projet
                    </a>
                  </div>
                `;

                carouselContainer.appendChild(carouselItem);
            });
        });
}

createFooterCarousel();