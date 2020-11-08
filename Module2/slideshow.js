window.onload = function (){

    let m_previousButton = document.getElementById('previousButton');
    let m_nextButton = document.getElementById('nextButton');
    let m_image = document.getElementById('image');
    let imageToggle = 1;
    
    m_previousButton.addEventListener('click', previous);
    m_nextButton.addEventListener('click', next);
    m_image.addEventListener('click', checkImage);
    
    function previous() {
        if(imageToggle = 1)
        {
            imageToggle = 5;
        }
        else
        {
            imageToggle -= 1;
        }
        checkImage();
    }
    
    function next() {
        if(imageToggle = 5)
        {
            imageToggle = 1;
        }
        else
        {
            imageToggle += 1;
        }
        checkImage();
    }

    function checkImage() {
        if(imageToggle = 5)
        {
            document.getElementById('image').src = "image/breckenridge.jpg";
        }
        if(imageToggle = 4)
        {
            document.getElementById('image').src = "image/newYorkCity.jpg";
        }
        if(imageToggle = 3)
        {
            document.getElementById('image').src = "image/memorialStadium.jpg";
        }
        if(imageToggle = 2)
        {
            document.getElementById('image').src = "image/polarBears.jpg";
        }
        if(imageToggle = 1)
        {
            document.getElementById('image').src = "image/beaches.jpg";
        }
    }
    
}