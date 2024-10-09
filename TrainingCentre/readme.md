# Training Center Registry

This project is an MVP for a registry of government-funded training centers. It provides two APIs to create and retrieve training center information.

## Features

- Create a new training center with validation
- Retrieve a list of all training centers
- Uses Spring Boot, MySQL, and Jakarta Persistence

## Requirements

- Java 11 or higher
- Maven
- MySQL

#1. Import the Project into Eclipse IDE
- Open Eclipse IDE.
- Click on File > Import.
- Select Existing Maven Projects and click Next.
- Browse to the root directory of the cloned repository.
- Select the project and click Finish.

#2. Configure the Database
- Update the application.properties file with your MySQL credentials:

	spring.datasource.url=jdbc:mysql://localhost:3306/training_center_db
	spring.datasource.username=your_username
	spring.datasource.password=your_password
	spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
	spring.jpa.hibernate.ddl-auto=update
	spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# 3. Build and Run the Application
- Use Maven to build and run the application:
- mvn clean install
- mvn spring-boot:run

#API Endpoints

##Create a Training Center
URL: /api/training-centers
1.Method: POST
	Content-Type: application/json
	Request Body:JSON
	
	{
	  "centerName": "Example Center",
	  "centerCode": "ABC123456789",
	  "address": {
	    "detailedAddress": "123 Main St",
	    "city": "Example City",
	    "state": "Example State",
	    "pincode": "123456"
	  },
	  "studentCapacity": 100,
	  "coursesOffered": ["Course1", "Course2"],
	  "contactEmail": "example@example.com",
	  "contactPhone": "+1234567890"
	}

##Get All Training Centers
URL: /api/training-centers
Method: GET
Response:JSON

{
  "centerName": "Example Center",
  "centerCode": "ABC123456789",
  "address": {
    "detailedAddress": "123 Main St",
    "city": "Example City",
    "state": "Example State",
    "pincode": "123456"
  },
  "studentCapacity": 100,
  "coursesOffered": ["Course1", "Course2"],
  "contactEmail": "example@example.com",
  "contactPhone": "+1234567890"
}

#Validation
CenterName: Must be less than 40 characters.
CenterCode: Must be exactly 12 alphanumeric characters.
ContactEmail: Must be a valid email address.
ContactPhone: Must be a valid phone number.

#Exception Handling
Validation errors are handled by a global exception handler and return appropriate error messages


