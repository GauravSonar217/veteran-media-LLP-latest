// fetching services data
// Fetching data from local JSON file

let serviceData = []; // Empty array to store fetched data

// Function to fetch data
async function fetchData() {
    try {
        const response = await fetch("../data/serviceData.json");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        return [];
    }
}

// Function to load and store data upon page load
async function loadData() {
    try {
        serviceData = await fetchData();
        console.log('Data loaded:', serviceData); // Log fetched data
    } catch (error) {
        console.error('Error while loading data:', error);
    }
}

// Event listener for h1 click
// const arr = document.querySelectorAll('h1')

// arr.forEach((d)=>{
//     d.addEventListener('click', (e)=>{
//         console.log(e.currentTarget)
//     })
// })
const services = document.querySelectorAll('.serveName');
services.forEach((elem, index) => {
    console.log(elem);
    console.log(index);
    elem.addEventListener("click", () => {
        const subserveCont = document.getElementById("subServeCont");
        const subserveList = document.createElement("li");

        console.log(subserveList);
        subserveCont.appendChild(subserveList);
        //  Check if data is available
        if (serviceData.length > 0) {
            // Perform operations using serviceData after clicking h1
            subserveList.textContent = `${serviceData[index].serviceName}`
            console.log('Data available:', serviceData[index]);
            subserveCont.appendChild(subserveList);
            // Show or manipulate the data as needed
        } else {
            console.log('Data not available yet. Click again after data is loaded.');
            // Inform the user that data is not available yet
            // You can modify this part based on your UI/UX requirements
        }

    })

})
    // services.addEventListener('click', () => {
    //    
    // });

    // Call the function to load data when the page loads
    window.addEventListener('load', () => {
        loadData(); // Fetch data upon page load
    });

    // function Func() {
    //     fetch("../data/serviceData.json")
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return res.json();
    //         })
    //         .then((data) =>{
    //             servicesData = data;
    //         })

    //             // console.log(data);
    //         .catch(error => {
    //             console.error('There was a problem fetching the data:', error);
    //         });
    // }
    // Func();
    // setTimeout(() => {
    //     console.log(servicesData);
    //     // Perform operations or use 'serviceData' as needed
    // }, 2000);
    // console.log(servicesData);
    // let serviceName = document.querySelectorAll(".services h1");
    // serviceName.forEach(serve => serve.addEventListener("click", function () {
    //     const subserveCont = document.getElementById("subServeCont");


    // }));
    // function createSubServicesList(servicesData) {
    //     console.log(servicesData);
    //     // console.log(subServicesList);

    //     servicesData.forEach(service => {

    //     });
    // }


    // Function to change the title and favicon when the tab becomes visible
    function changeTitleAndFavicon() {
        document.title = "Veteran Media LLP | Full Service Digital Agency That Drives Revenue";
        document.querySelector("link[rel*='icon']").href = "../media/png/favicon.ico";
    }

    // Function to restore the original title and favicon when the tab becomes hidden
    function restoreTitleAndFavicon() {
        document.title = "Missing you already";
        document.querySelector("link[rel*='icon']").href = "../media/svg/sad.ico";
    }

    // Check if the Page Visibility API is supported
    if (document.hidden !== undefined) {
        // Add event listeners for visibility changes
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                restoreTitleAndFavicon(); // Tab is hidden
            } else {
                changeTitleAndFavicon(); // Tab is visible again
            }
        });
    } else {
        console.log("Page Visibility API not supported.");
    }




    // soft scroll
    // Variables to control the scroll animation
    let isScrolling = false;
    let targetScroll = 0;

    // Function to smoothly scroll the content
    function smoothScroll() {
        const currentScroll = document.getElementById('content').scrollTop;
        const scrollSpeed = 5000; // Adjust this value to control the scroll speed

        if (Math.abs(targetScroll - currentScroll) <= scrollSpeed) {
            // Close enough to the target scroll position, stop scrolling
            document.getElementById('content').scrollTop = targetScroll;
            isScrolling = false;
        } else {
            if (currentScroll < targetScroll) {
                // Scroll down
                document.getElementById('content').scrollTop += scrollSpeed;
            } else {
                // Scroll up
                document.getElementById('content').scrollTop -= scrollSpeed;
            }

            // Schedule the next frame
            requestAnimationFrame(smoothScroll);
        }
    }

    // Event listener for scroll
    document.getElementById('content').addEventListener('scroll', function (event) {
        if (!isScrolling) {
            // When the user scrolls, set the target scroll position
            targetScroll = event.target.scrollTop;
            isScrolling = true;
            // Start the smooth scrolling animation
            smoothScroll();
        }
    });

    // Event listener for stopping scroll
    document.getElementById('content').addEventListener('wheel', function () {
        // When the user stops scrolling (mouse wheel input)
        isScrolling = false;
    });