/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "Heather Gallop",
  "role" : "Web Designer and Developer",
  "contacts" : {
    "mobile" : "(276)226-0704",
    "email" : "doyouseeitmyway@gmail.com",
    "github" : "hgallop",
    "location" : "Bassett, VA"
  },
  "picUrl" : "http://res.cloudinary.com/hgallopcloud/image/upload/c_thumb,h_338/v1504625943/profileheadshot_kakusy.jpg",
  "welcomeMessage" : "Hello!",
  "skills" : ["HTML", "CSS", "BootStrap", "JavaScript", "jQuery", "Git", "Linux"]
};

var work = {
  "jobs": [
  {
    "employer" : "Upwork",
    "title" : "Freelancer",
    "dates" : "8-1-2017 to Present",
    "location" : "Bassett, VA",
    "description" : "Participates in contracted work of various nature."
  },
  {
    "employer" : "KAB III Inc. Subway",
    "title" : "Area Manager",
    "dates" : "10-23-2014 to 9-1-2016",
    "location" : "Martinsville, VA",
    "description" : "Managed one store location and supervised the managers of two other stores. Revised, published, and distributed new company wide Employee Handbook. Audited weekly paperwork company-wide. Prepared audit reports for owner."
  },
  {
    "employer" : "Follett Higher Education Group, Patrick Henry Community College Bookstore",
    "title" : "Sales Associate",
    "dates" : "12-1-2009 to 5-20-2014",
    "location" : "Martinsville, VA",
    "description" : "Operated point of sale, assisted students with book purchases, fulfilled online orders, general stocking and merchandising. Completed internship under General Manager."
  }
 ]
};

var projects = {
  "projects" : [
    {
      "title" : "Fun with Images",
      "date" : "9-2017",
      "description" : "A styled webpage that allows users to upload an image and apply various filters.",
      "image" : ["https://s3-us-west-2.amazonaws.com/i.cdpn.io/1392396.veLEOL.small.55284eab-0c9f-46e7-9aca-6ce2630a4090.png"]
    },
    {
      "title" : "Green Screen Project",
      "date" : "8-2017",
      "description" : "A styled webpage that allows users to upload and combine a green screen image and a background image.",
      "image" : ["https://s3-us-west-2.amazonaws.com/i.cdpn.io/1392396.NaGwQw.small.548ec740-a88f-4d2b-b182-8a75761bbed1.png"]
    },
    {
      "title" : "Todo list",
      "date" : "8-2017",
      "description" : "An unstyled webpage allowing users to add list items, mark them as completed, and delete items.",
      "image" : ["https://s3-us-west-2.amazonaws.com/i.cdpn.io/1392396.dzQxqe.small.bae39972-8da4-406f-9dd5-5282e9bf3693.png"]
    },
  ]
};

var education = {
	"school": [
    {
      "name": "Patrick Henry Community College",
      "location" : "Martinsville, VA",
      "degree" : "Associates in Business Technology",
      "dates" : "2010-2012",
      "url" : "http://www.patrickhenry.edu/",
      "majors" : ["Business Management"]
		},
  ],
  "onlineCourses" : [
		{
			"school": "Codecademy",
			"title": "Learn HTML and CSS, Learn Responsive Design, Learn Java Script, Learn the Command Line",
      "dates" : "7-2017 to Present",
      "url" : "https://www.codecademy.com/"
		},
		{
			"school" : "Free Code Camp",
			"title" : "Completed 281 Items on the MAP",
      "dates" : "7-2017 to Present",
      "url" : "https://www.freecodecamp.org/"
		},
		{
			"school" : "Udacity",
			"title" : "Intro to HTML and CSS, Intro to Java Script, Linux Command Line Basics, How to Use Git and Git Hub, Basic JavaScript",
			"dates" : "8-2017 to Present",
      "url" : "https://www.udacity.com/"
		},
		{
			"school" : "edX",
			"title" : "Introduction to Linux",
      "dates" : "8-2017 to Present",
      "url" : "https://www.edx.org/"
		},
		{
			"school": "Watch and Code",
			"title": "Practical JS",
      "dates" : "8-2017",
      "url" : "https://watchandcode.com/"
		},
		{
			"school" : "Coursera",
			"title" : "Programing Foundations with Java Script, HTML, and CSS",
      "dates" : "9-2017 to Present",
      "url" : "https://www.coursera.org/"
		}
	]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedresumeImage = HTMLbioPic.replace("%data%", bio.picUrl);
$("#header").append(formattedresumeImage);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

var formattedcontactEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedcontactEmail);
var formattedcontactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts:last").append(formattedcontactMobile);
var formattedcontactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts:last").append(formattedcontactGithub);



if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
  $("#skills").append(formattedSkill);
} else {
  console.log("No skills present.");
};

function displayWork() {
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}
};

displayWork();

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].image.length > 0) {
      for (image in projects.projects[project].image) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();

education.display = function() {
for (school in education.school) {
    $("#education").append(HTMLschoolStart);
    var formatted2Name = HTMLschoolName.replace("%data%", education.school[school].name).replace("#", education.school[school].url);
    $(".education-entry:last").append(formatted2Name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[school].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.school[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[school].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[school].majors);
    $(".education-entry:last").append(formattedMajor);
  }
};

education.display();

education.disply = function() {
  $("#education").append(HTMLonlineClasses);
  for ( var course in education.onlineCourses) {
    var formattedSchoolName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].school).replace("#", education.onlineCourses[course].url);
    $(".online-entry:last").append(formattedSchoolName);
    var formattedCourseTitle = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].title);
    $(".online-entry:last").append(formattedCourseTitle);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".online-entry:last").append(formattedDates);
  }
};

education.disply();

$("#mapDiv").append(googleMap);
