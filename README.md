# Nerd Out 


## Assignment
As part of General Assembly's Backend 2-day Hackathon, I was tasked to build a functional **FULL CRUD** **API** using data from a JSON file.

The JSON file contains 1,000 attendees in this format
## Attendee sample

```
{
		"id": 1,
		"name": "Bob Ross",
		"phone": "453-848156",
		"address": "4010 Electric Av.",
		"city": "Las Vegas",
		"state": "Nevada",
		"country": "United States",
		"postalZip": "34556",
		"email": "HappyTrees@happyclouds.edu",
		"Company": "Apple",
		"companyFunded": 82.16,
		"userID": "DO19252537151321083934722339",
		"team": 6,
		"paid": true,
		"date": "02/23",
		"title": "CustomerSuccess"
}
```

# Check out the Project on Heroku:
https://nerd-out-3-day-hackathon-2022.herokuapp.com/api 

# API Features:

## Read
|   Feature    | url |
| ----------- | ----------- |
| Shows all 1,000 attendees      | /api/       |
| Shows all attendees based on their team number  | /api/team/<Team Number #> |
| Shows all attendees based on their companies  |  /api/company/<Company Name > |
| Shows all attendees based on their job title |  /api/company/<Job Title > |
	

## Update
- Find attendee id #**793** and change their company from `Google` to `NASA`
	
## Delete	
- Find attendee id #**98** Mojo Jojo and delete them from the **API**

## Create
- Create a new attendee

###  Additional Bonus Features:
 - Convert the phone field format from `xxx-xxxxxxx` to `(xxx) xxx-xxxx`.
 - Take the date format from month/year and separate it to have it's own fields (month and year)
 - Be able to search by any part of the name and return the results 
	
### Ice Boxed
- Improve runtime of the index page (Instead of loading all 1000 at once, only load 10 at a time)
- Add pagination
