window.onload = function (){

    let m_previousButton = document.getElementById('previousButton');
    let m_nextButton = document.getElementById('nextButton');
    let m_image = document.getElementById('images');
    let imageToggle = 1;

        m_previousButton.addEventListener('click', previous);
        m_nextButton.addEventListener('click', next);
        //m_previousButton.addEventListener('click', checkImage);
        //m_nextButton.addEventListener('click', checkImage);

        function previous() {
            if(imageToggle == 1)
            {
                imageToggle = 5;
            }
            else
            {
                imageToggle -= 1;
            }
            if(imageToggle == 5)
            {
                document.getElementById('images').src = "https://i.pinimg.com/originals/ac/80/55/ac805547f8cce6339f4656c4eb8e6abb.jpg";
            }
            if(imageToggle == 4)
            {
                m_image.setAttribute("src", "image/newYorkCity.jpg");
                //document.getElementById('images').src = "image/newYorkCity.jpg";
            }
            if(imageToggle == 3)
            {
                m_image.setAttribute("src", "image/memorialStadium.jpg");
                //document.getElementById('images').src = "image/memorialStadium.jpg";
            }
            if(imageToggle == 2)
            {
                m_image.setAttribute("src", "image/polarBears.jpg");
                //document.getElementById('images').src = "image/polarBears.jpg";
            }
            if(imageToggle == 1)
            {
                m_image.setAttribute("src", "image/beaches.jpg");
                //document.getElementById('images').src = "image/beaches.jpg";
            }
            console.log("image toggle: " + imageToggle);
        }
        
        function next() {
            if(imageToggle == 5)
            {
                imageToggle = 1;
            }
            else
            {
                imageToggle += 1;
            }
            //console.log("image toggle : " + imageToggle);
            //checkImage(imageToggle);
            if(imageToggle == 5)
            {
                document.getElementById('images').src = "https://i.pinimg.com/originals/ac/80/55/ac805547f8cce6339f4656c4eb8e6abb.jpg";
            }
            if(imageToggle == 4)
            {
                m_image.setAttribute("src", "image/newYorkCity.jpg");
                //document.getElementById('images').src = "image/newYorkCity.jpg";
            }
            if(imageToggle == 3)
            {
                m_image.setAttribute("src", "image/memorialStadium.jpg");
                //document.getElementById('images').src = "image/memorialStadium.jpg";
            }
            if(imageToggle == 2)
            {
                m_image.setAttribute("src", "image/polarBears.jpg");
                //document.getElementById('images').src = "image/polarBears.jpg";
            }
            if(imageToggle == 1)
            {
                m_image.setAttribute("src", "image/beaches.jpg");
                //document.getElementById('images').src = "image/beaches.jpg";
            }
            console.log("image toggle: " + imageToggle);
        }

        /*function checkImage(imageToggle) {
            if(imageToggle = 5)
            {
                document.getElementById('images').src = "https://i.pinimg.com/originals/ac/80/55/ac805547f8cce6339f4656c4eb8e6abb.jpg";
            }
            if(imageToggle = 4)
            {
                m_image.setAttribute("src", "image/newYorkCity.jpg");
                //document.getElementById('images').src = "image/newYorkCity.jpg";
            }
            if(imageToggle = 3)
            {
                m_image.setAttribute("src", "image/memorialStadium.jpg");
                //document.getElementById('images').src = "image/memorialStadium.jpg";
            }
            if(imageToggle = 2)
            {
                m_image.setAttribute("src", "image/polarBears.jpg");
                //document.getElementById('images').src = "image/polarBears.jpg";
            }
            if(imageToggle = 1)
            {
                m_image.setAttribute("src", "image/beaches.jpg");
                //document.getElementById('images').src = "image/beaches.jpg";
            }
            console.log("image toggle: " + imageToggle);
        }*/  
}