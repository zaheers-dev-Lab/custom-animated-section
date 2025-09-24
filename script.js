document.addEventListener('DOMContentLoaded', () => {
    const points = document.querySelectorAll('.point');
    const healthcareText = document.getElementById('healthcare-text');
    const mainHeading = document.getElementById('main-heading');
    const mainParagraph = document.getElementById('main-paragraph');
    const body = document.body; 

    function updateCircleContent(content) {
        healthcareText.textContent = content;
    }

    function updateMainText(heading, paragraph) {
        mainHeading.textContent = heading;
        mainParagraph.textContent = paragraph;
    }

    function changeBackgroundColor(color) {
        body.style.backgroundColor = color;
    }

    points.forEach(point => {
        point.addEventListener('click', () => {
            
            points.forEach(p => p.classList.remove('active'));
            point.classList.add('active');
            const circleContent = point.dataset.circleContent;
            const bgColor = point.dataset.bgColor;
            const heading = point.dataset.mainHeading;
            const paragraph = point.dataset.mainParagraph;
            updateCircleContent(circleContent);
            changeBackgroundColor(bgColor);
            updateMainText(heading, paragraph);
        });
    });

    // const initialPoint = document.querySelector('.point.top');
    // if (initialPoint) {
    //     updateCircleContent(initialPoint.dataset.circleContent);
    //     changeBackgroundColor(initialPoint.dataset.bgColor);
    //     updateMainText(initialPoint.dataset.mainHeading, initialPoint.dataset.mainParagraph);
    // }
});