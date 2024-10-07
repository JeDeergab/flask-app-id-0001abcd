document.addEventListener("DOMContentLoaded", function()
{
        const HTML_Load00 = document.querySelector('.my_contents');
        const HTML_Base00 = `<div class="main_page"></div>`;
        if(HTML_Load00)
        {
                HTML_Load00.insertAdjacentHTML('beforeend', HTML_Base00);
        }


        // Fetch the external content from Flask
        fetch('/top_nav')
            .then(response => response.json())
            .then(data => {
                const Main_Load01 = document.querySelector('.main_page');
                const Main_Base01 = data.html; //use the HTML content from Flask API
                if(Main_Load01)
                {
                    Main_Load01.insertAdjacentHTML('beforeend', Main_Base01);
                }
        })
        .catch(error => console.error('Error fetching external content:', error));

	// Fetch the external content from Flask
        fetch('/body')
            .then(response => response.json())
            .then(data => {
                const Main_Load02 = document.querySelector('.main_page');
                const Main_Base02 = data.html; //use the HTML content from Flask API
                if(Main_Load02)
                {
                    Main_Load02.insertAdjacentHTML('beforeend', Main_Base02);
                }
        })
        .catch(error => console.error('Error fetching external content:', error));	
});
