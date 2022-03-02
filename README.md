# Nerd Out 


## Assignment
As part of General Assembly's Backend 2-day Hackathon, I was tasked to build a functional **FULL CRUD** **API** using data from the JSON file.

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

## Features:

# Get
- Shows all 1,000 attendees
- Shows all attendees based on their team number
- Shows all attendees based on their companies
- Show all attendees based on their job title

# Update
- Find attendee id #**793** and change their company from `Google` to `NASA`
- Find attendee id #**98** Mojo Jojo and delete them from the **API**

# Create
- Create a new attendee

###  Bonus:

 - Deploy your API
 - Add a README that goes through what your API does
 - Convert the phone field format from `xxx-xxxxxxx` to `(xxx) xxx-xxxx`.
 - Take the date format from month/year and separate it to have it's own fields (month and year)
 - Be able to search by any part of the name and return the results 
