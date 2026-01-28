document.addEventListener('DOMContentLoaded', () => {
    const actionButtons = document.querySelectorAll('.action-btn');

    actionButtons.forEach(btn => {
        const heartImg = btn.querySelector('img[alt="like"]');
        
        if (heartImg) {
            let isLiked = false;

            btn.addEventListener('click', () => {
                isLiked = !isLiked;
                
                if (isLiked) {
                    heartImg.style.filter = "invert(20%) sepia(80%) saturate(6000%) hue-rotate(345deg) brightness(90%)";
                    heartImg.style.content = "url('../assets/heart-filled.svg')"; 
                    heartImg.style.transform = "scale(1.2)";
                } else {
                    heartImg.style.filter = "none";
                    heartImg.style.transform = "scale(1)";
                    heartImg.style.content = "url('../assets/heart.svg')";
                }
            });
        }
    });
});