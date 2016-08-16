var projects = {
    "web_projects": [
    { 
        "name": "My Profile Web-Page",
        "date_created": "30 Jul 2016",
        "images": "",
        "description": "This project is my personal project where I code everything you see here from scratch. I used most of the things that I have learnt from Udacity to create this project." 
    },
    { 
        "name": "Health Optimization Project",
        "date_created": "24 Jul 2016",
        "images": "",
        "description": "The purpose of this project is to track one's calories of what they eat every day. In this project, I used Backbone JS as an MVC and Underscore JS. I also used an API that is provided by nutritionix."
    },
    { 
        "name": "Tourist Atrraction Map in Singapore",
        "date_created": "08 Jun 2016",
        "images": "",
        "description": "The purpose of this project is to show 10 tourist attraction points in Singapore that I have stored as Javascript Object. I have used google maps API to create this project to point the location based on location's latitude and longitude."
    },
    { 
        "name": "Frogger Game Clone",
        "date_created": "03 Jun 2016",
        "images":"",
        "description": "This project is a classic arcade game, 'Frogger Game'. Most of the assest of this project were given by Udacity. However, I have to create the game sequence and its mechanism using JavaScript."
    }],
    // web-projects end
    "display": function(){
        for (project in projects.web_projects) {
            $("#projects").append(HTMLprojectStart);
            //title
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.web_projects[project].name);
            $(".project-entry:last").append(formattedTitle);
            //dates
            var formattedDate = HTMLprojectDates.replace("%data%", projects.web_projects[project].date_created);
            $(".project-entry:last").append(formattedDate);
            //description
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.web_projects[project].description);
            $(".project-entry:last").append(formattedDescription);
        }
    }
};

projects.display();