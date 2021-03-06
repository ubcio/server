# UBCIO API

### This API allows client apps to connect to UBCIO and receive course/relevant data.

#### To test out the API, carry out the following steps

1. Clone the repository
2. `cd` into the repository and run `npm install`
3. Start up your MongoDB server. Please note that the default database that the API connects to has been named ubcio. You may need to create this database in mongodb or change the name of the DB in the relevant JS files.
4. Run `npm start` from the server directory to start up the API server.
5. Visit `localhost:3000/data/courses` to view data that the API sends out upon receving GET requests to the specified endpoints

#### In order to be able to make valid requests to the API, we recommend using Jquery Ajax methods. An example is given below

```javascript

function sendCourseDataRequest(){
  $.ajax({
      url: '/data/courses',
      method: 'GET'
  }).done(function(data) {
      alert("Data Received: "+ data);
  }).fail(function(error) {
      alert("Error Occured: "+ JSON.stringify(error));
  });
}

```

## ROUTES ##

Default URL that goes before every path is: TODO

*Anything italicized is an optional field*

Path | HTTP Method| Input Data | Output Data | Status Success | Status Error
-----|------------|------------|-------------|----------------|-------------
/data/signup | POST | {email: String , password: String} | {user: JSON , token: String} | {201} | {400 , 500}
/data/careerFairs | GET | N/A | {date: String, description: String, link: String, location: String, name: String} | {200} | {500}
/data/companies | GET | N/A | {name: String, reviews: [{review: String, createDate: String}]} | {200} | {500}
/data/courses | GET | N/A | {name: String, description: String, credits: String, prerequisites: String, corequisite: String, tips: [{tip: String, createDate: String}], reviews: [{review: String, createDate: String, professor: String}]} | {200} | {500}
/data/degreeRequirements | GET | N/A | {name: String, websites: [{buttonName: String, website: String}]} | {200} | {500}
/data/hackathons | GET | N/A | {date: String, description: String, link: String, location: String, name: String} | {200} | {500}
/data/jobPostings | GET | N/A | {title: String, company: String, location: String, deadline: String, term: String, link: String} | {200} | {500}
/data/professors | GET | N/A | {name: String, reviews: [{review: String, createDate: String, course: String}], courses: {courseName: String, reviewsIndex: [Number]}} | {200} | {500}
/data/seminars | GET | N/A | {date: String, description: String,  link: String, location: String, name: String} | {200} | {500}
/data/tutors | GET | N/A | {name: String, bio: String,  email: String, price: Number, reviews: [{review: String, createDate: String}]} | {200} | {500}
/data/courseTutors | GET | N/A | {name: String, tutors: [Number]} | {200} | {500} 
/pendingData/pendingCareerFair | POST | {link: String, name: String, time: String, location: String, description: String, email: String} | N/A | {200} | {500} 
/pendingData/pendingCompanyReview | POST | {company: String, review: String,email: String} | N/A | {200} | {500} 
/pendingData/pendingCourseReview | POST | {course: String,tip: String,email: String} | N/A | {200} | {500} 
/pendingData/pendingCourseTip | POST | {course: String, tip: String, email: String} | N/A | {200} | {500} 
/pendingData/pendingHackathon | POST | {link: String, name: String, time: String, location: String, description: String, email: String} | N/A | {200} | {500} 
/pendingData/pendingJobPosting | POST | {link: String, title: String, company: String, location: String, deadline: String, term: String, email: String} | N/A | {200} | {500} 
/pendingData/pendingProfReview | POST | {name: String, course: String, review: String, email: String} | N/A | {200} | {500} 
/pendingData/pendingSeminar | POST | {link: String, name: String, time: String, location: String, description: String, email: String} | N/A | {200} | {500} 
/pendingData/pendingSuggestion | POST | {suggestion: String, email: String} | N/A | {200} | {500} 
/pendingData/pendingTutorService | POST | {name: String, email: String, hourlyPrice: Number courses: String, bio: String} | N/A | {200} | {500} 

Quick reminder of HTTP status codes below: 

Status # | Meaning
---------|--------
2**  | Success
200 | Ok
201 | Created
3** | Redirection
4** | Client Error
400 | Bad Request
401 | Unauthorized
403 | Forbidden
404 | Not Found
418 | Im a teapot
5** | Server Error
500 | Internal Server Error
