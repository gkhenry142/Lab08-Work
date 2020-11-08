window.onload = function(){


    let m_dummyText = document.getElementById('dummyText');
    let m_button = document.getElementById('cssManipulator');
    let m_background = document.getElementById('background');

    let m_redBorderColor = document.getElementById('redBorderColor');
    let m_blueBorderColor = document.getElementById('blueBorderColor');
    let m_greenBorderColor = document.getElementById('greenBorderColor');

    let m_borderWidth = document.getElementById('borderWidth');
    let m_redBackgroundColor = document.getElementById('redBackgroundColor');
    let m_blueBackgroundColor = document.getElementById('blueBackgroundColor');
    let m_greenBackgroundColor = document.getElementById('greenBackgroundColor');
    let m_backgroundWidth = document.getElementById('backgroundWidth');




    m_button.addEventListener('click', changeValues);


    function changeValues() {

        m_dummyText.style.borderColor = "rgb(" + m_redBorderColor.value +", "+m_greenBorderColor.value+", "+m_blueBorderColor.value+")";
        console.log(""+ "rgb(" + m_redBorderColor.value +", "+m_greenBorderColor.value+", "+m_blueBorderColor.value+")");
        /*if(m_borderColor.value == "red")
        {
            console.log("Color is red");
            m_dummyText.style.borderColor = "red";
        }
        if(m_borderColor.value == "green")
        {
            m_dummyText.style.borderColor = "green";
        }
        if(m_borderColor.value == "blue")
        {
            m_dummyText.style.borderColor = "blue";
        }*/
        if(m_borderWidth.value == "thin")
        {
            m_dummyText.style.borderWidth = "thin";
            console.log("Border width is " + m_borderWidth.value);
        }
        if(m_borderWidth.value == "thick")
        {
            m_dummyText.style.borderWidth = "thick";
        }

        m_dummyText.style.backgroundColor = "rgb(" + m_redBackgroundColor.value +", "+m_greenBackgroundColor.value+", "+m_blueBackgroundColor.value+")";

        /*if(m_backgroundColor.value == "red")
        {
            console.log("Color is red");
            m_dummyText.style.backgroundColor = "rgb(168, 0, 0)";
        }
        if(m_backgroundColor.value == "green")
        {
            m_dummyText.style.backgroundColor = "green";
        }
        if(m_backgroundColor.value == "blue")
        {
            m_dummyText.style.backgroundColor = "blue";
        }*/

        if(m_backgroundWidth.value == "small")
        {
            m_background.style.backgroundColor = "white";
            console.log("Border width is " + m_borderWidth.value);
        }
        if(m_backgroundWidth.value == "whole page")
        {
            m_background.style.backgroundColor = "rgb(" + m_redBackgroundColor.value +", "+m_greenBackgroundColor.value+", "+m_blueBackgroundColor.value+")";
        }
        

    }

}