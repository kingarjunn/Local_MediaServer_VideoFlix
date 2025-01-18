function getroot(str){
    var x= String(

        (function () {/*
            
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video.js Example</title>

  <!-- Video.js CSS -->
  <link href="https://vjs.zencdn.net/7.14.3/video-js.css" rel="stylesheet">

  <!-- Video.js JavaScript -->
  <script src="https://vjs.zencdn.net/7.14.3/video.min.js"></script>
</head>
<body>

  <h1>Video.js Example</h1>

  <!-- Video.js Player -->
  <video id="my-video" class="video-js vjs-default-skin" controls preload="auto" width="640" height="360">
    <source src="*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1]
    )


    var y= String(

        (function () {/*" type="video/mp4">
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video.
            </p>
          </video>
        
          <!-- Initialize Video.js -->
          <script>
            var player = videojs('my-video');
            player.addClass('vjs-matrix');
          </script>
        
        </body>
        </html>*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1]
    )

    return String(x+String(str)+y);
}

function getroot(url,icon,name)
{
    var z= String(

        (function () {/*<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>VideoFLIX</title>
              <link rel="icon" href="#@fav/icon" type="image/x-icon">
              <!-- Latest Video.js CSS -->
              <link href="https://vjs.zencdn.net/7.20.1/video-js.css" rel="stylesheet">
            
              <!-- Video.js JavaScript -->
              <script src="https://vjs.zencdn.net/7.20.1/video.min.js"></script>
            
              <style>
                body {
                display: auto;
                font-family: 'Arial', sans-serif;
                color: #333;
                background: rgb(195,107,34);
                background: linear-gradient(0deg, rgba(195,107,34,1) 0%, rgba(253,187,45,1) 100%);
                background-size: 400% 400%;
                height:100vh;
                margin: 0;
                text-align: center;
                }
                video {
                  margin-bottom: 20px;
                  padding : 20px;
                }
                h1 {
                  color: #333;
                }
              </style>
                <p><span style="color:rgb(255,255,255);font-size: 40px;">Video</span><span style="font-weight:bold;font-size: 60px;color:rgb(255,18,18);">FLIX</span></p>
            </head>
            <body>
              <h1>#@movie</h1>
            
              <!-- Video.js Player -->
              <video id="my-video" class="video-js vjs-default-skin" controls preload="auto" width="640" height="360"
                autoplay loop muted>
                <!-- Source for video -->
                <source src="#@link" type="video/mp4">
            
                <!-- Captions (optional) -->
                <!-- <track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English"> -->
                
                <p class="vjs-no-js">
                  To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video.
                </p>
              </video>
            
              <!-- Initialize Video.js with all options enabled -->
              <script>
                var player = videojs('my-video', {
                  controls: true,       // Enable controls
                  autoplay: true,       // Enable autoplay
                  loop: true,           // Enable loop
                  muted: false,          // Enable mute by default
                  preload: 'auto',      // Preload video automatically
                  fluid: true,          // Make the player responsive
                  playbackRates: [0.5, 1, 1.5, 2] // Enable playback speed control
                });
              </script>
            
            </body>
            </html>
            */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1]
    );
    z=z.replaceAll('#@movie',name);
    z=z.replaceAll('#@link',url);
    z=z.replaceAll('#@fav',icon)
    return z;
}

function getindex(url)
{
    var z= String(

        (function () {/*
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VideoFlix</title>
    <link rel="icon" type="image/x-icon" href="#@url/icon">
    <link href="https://cdn.jsdelivr.net/npm/video.js@7.10.2/dist/video-js.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .video-js {
            width: 100%; 
            max-width: 1000px; 
            margin: 0 auto; 
        }
        html{

        }
        body{
            display: auto;
            font-family: 'Arial', sans-serif;
            color: #333;
            background: rgb(195,107,34);
            background: linear-gradient(0deg, rgba(195,107,34,1) 0%, rgba(253,187,45,1) 100%);
            background-size: 400% 400%;
            height:100vh;
            margin: 0;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #343a40;
            padding: 12px 20px;
            color: white;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        .navbar h1 {
            margin: 0;
            font-size: 1.8em;
            font-weight: 600;
        }

        .navbar input {
            padding: 8px 12px;
            font-size: 1em;
            border: none;
            border-radius: 5px;
            width: 250px;
        }

        .navbar .nav-buttons {
            display: flex;
            gap: 15px;
        }

        .navbar button {
            padding: 8px 18px;
            background-color: white;
            color: #343a40;
            font-size: 1.1em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
        }

        .navbar button:hover {
            background-color: #007bff;
            color: white;
        }

        .container {
            margin-top: 130px; 
            text-align: center;
            padding: 30px;
            width: 80%;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        li {
            background-color: #ffffff;
            padding: 12px 18px;
            margin: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            width: 250px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        li:hover {
            background-color: #f1f3f5;
            transform: translateY(-5px);
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
        }

        .pagination {
            margin-top: 20px;
            display: flex;
            justify-content: center;
        }

        .pagination button {
            padding: 8px 16px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 0 6px;
            font-size: 1em;
            transition: background-color 0.3s;
        }

        .pagination button:hover {
            background-color: #0056b3;
        }

        .pagination button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        #video-container {
            margin-top: 100px;
            display: none;
            text-align: center;
        }


        .video-container-wrapper {
            background-color: #ffffff;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 20px;
        }
        h1{
        color : rgb(238, 18, 18);
        }
        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 2.5rem;
            text-align : center;
        }

    </style>


    <!-- Navbar -->
    <div class="navbar">
        <input type="text" id="searchInput" placeholder="Filter video" onkeyup="filterList()">
        <div>
        <h2>Video</h2><h1>FLIX</h1> 
        </div>
        <div class="nav-buttons">
            <button onclick="fetchData('series')">Series</button>
            <button onclick="fetchData('movies')">Movies</button>
        </div>
    </div>
</head>
<body>
    <!-- Main Content Area -->
    <div class="container">
        <ul id="item-list"></ul>
        <div class="pagination">
            <button id="prevBtn" onclick="changePage('prev')" disabled>Previous</button>
            <button id="nextBtn" onclick="changePage('next')" disabled>Next</button>

        </div>

    </div>


    <script src="https://cdn.jsdelivr.net/npm/video.js@7.10.2/dist/video.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-mkv@1.0.0/videojs-mkv.min.js"></script>

    <script>
        let currentPage = 1;
        const itemsPerPage = 25;
        let totalItems = 0;
        let data = [];
        let filteredData = [];
        let currentCategory = 'series'; // Default category is series
        let url = '#@url' + '/';
        

        // Function to fetch data from the API based on category
        function fetchData(category) {
            currentCategory = category; // Update the current category
            fetch(url+'get/'+category)
                .then(response => response.json())
                .then(fetchedData => {
                    data = fetchedData;
                    filteredData = data;
                    totalItems = filteredData.length;
                    displayList(currentPage);
                    togglePaginationButtons();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        // Function to display the list based on currentPage
        function displayList(page) {
            const listElement = document.getElementById('item-list');
            listElement.innerHTML = ''; // Clear previous list

            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const currentPageData = filteredData.slice(start, end);

            currentPageData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                li.onclick = function() {
                    loadVideo(item); // Load video when item clicked
                };
                listElement.appendChild(li);
            });
        }

        // Function to change page
        function changePage(direction) {
            if (direction === 'prev') {
                currentPage--;
            } else if (direction === 'next') {
                currentPage++;
            }
            displayList(currentPage);
            togglePaginationButtons();
        }

        // Function to toggle the visibility of pagination buttons
        function togglePaginationButtons() {
            document.getElementById('prevBtn').disabled = currentPage === 1;
            document.getElementById('nextBtn').disabled = currentPage * itemsPerPage >= totalItems;
        }

        // Function to filter the list based on the search input
        function filterList() {
            const searchValue = document.getElementById('searchInput').value.toLowerCase();
            filteredData = data.filter(item => item.toLowerCase().includes(searchValue));
            totalItems = filteredData.length;
            currentPage = 1;
            displayList(currentPage);
            togglePaginationButtons();
        }

        // Function to load video based on clicked list item
        function loadVideo(videoName) {
            const videoURL = url +'pop/'+ currentCategory+'/' + String(videoName);
            window.open(videoURL, '_blank');
            
        }
    </script>

</body>

</html>

            */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1]
    );
    z=z.replaceAll('#@url',url);
    //z=z.replaceAll('#@fav')
    return z;
}

module.exports={getroot,getindex};