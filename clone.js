document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const videoItems = document.querySelectorAll(".video-item");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const body = document.body
   
    
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        videoItems.forEach(video => {
            const title = video.querySelector(".video-title").textContent.toLowerCase();
            video.style.display = title.includes(query) ? "block" : "none";
        });
    });
    
    
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = button.dataset.category;
            videoItems.forEach(video => {
                video.style.display = video.dataset.category === category || category === "all" ? "block" : "none";
            });
        });
    });
    
    
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
    
    
    videoItems.forEach(video => {
        const thumbnail = video.querySelector(".thumbnail");
        const durationTag = video.querySelector(".duration");
        
        thumbnail.addEventListener("mouseenter", function () {
            durationTag.style.display = "block";
        });
        
        thumbnail.addEventListener("mouseleave", function () {
            durationTag.style.display = "none";
        });
    });
});
