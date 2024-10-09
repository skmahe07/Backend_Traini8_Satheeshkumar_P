package com.Traini8.TrainingCentre.dto;


import java.time.Instant;
import java.util.List;


import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;



@Entity
public class TrainingCenter {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @NotBlank
	    @Size(max = 40)
	    private String centerName;

	    @NotBlank
	    @Pattern(regexp = "^[a-zA-Z0-9]{12}$")
	    private String centerCode;

	    @Embedded
	    private Address address;

	    private int studentCapacity;

	    @ElementCollection
	    private List<String> coursesOffered;

	    private Instant createdOn;

	    @Email
	    private String contactEmail;

	    @NotBlank
	    @Pattern(regexp = "^\\+?[0-9. ()-]{7,25}$")
	    private String contactPhone;


		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getCenterName() {
			return centerName;
		}

		public void setCenterName(String centerName) {
			this.centerName = centerName;
		}

		public String getCenterCode() {
			return centerCode;
		}

		public void setCenterCode(String centerCode) {
			this.centerCode = centerCode;
		}

		public Address getAddress() {
			return address;
		}

		public void setAddress(Address address) {
			this.address = address;
		}

		public int getStudentCapacity() {
			return studentCapacity;
		}

		public void setStudentCapacity(int studentCapacity) {
			this.studentCapacity = studentCapacity;
		}

		public List<String> getCoursesOffered() {
			return coursesOffered;
		}

		public void setCoursesOffered(List<String> coursesOffered) {
			this.coursesOffered = coursesOffered;
		}

		public Instant getCreatedOn() {
			return createdOn;
		}

		public void setCreatedOn(Instant createdOn) {
			this.createdOn = createdOn;
		}

		public String getContactEmail() {
			return contactEmail;
		}

		public void setContactEmail(String contactEmail) {
			this.contactEmail = contactEmail;
		}

		public String getContactPhone() {
			return contactPhone;
		}

		public void setContactPhone(String contactPhone) {
			this.contactPhone = contactPhone;
		}
	   
	    
}


@Embeddable
class Address {
	    private String detailedAddress;
	    private String city;
	    private String state;
	    private String pincode;
	    
		public String getDetailedAddress() {
			return detailedAddress;
		}
		public void setDetailedAddress(String detailedAddress) {
			this.detailedAddress = detailedAddress;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
		public String getPincode() {
			return pincode;
		}
		public void setPincode(String pincode) {
			this.pincode = pincode;
		}

	   
	    
}

