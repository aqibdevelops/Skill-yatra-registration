import React from 'react'
import './registration.css'
import axios from 'axios'

const baseUrl = "http://127.0.0.1:7012/app1/v1/PublicServer/registrati8"

const postDataInit= {}

postDataInit.get = {
    "postParam": {
        "jvId": 14,
        "selectionChoiceCount": 0
    }
}

postDataInit.location = {
	"postParam": {
		"jvId": "14",
		"location": "district",
		"parentLocation": "state",
		"parentLocationId": 4
	}
}

function Registration() {

    axios.post("http://127.0.0.1:7012/app1/v1/PublicServer/registrati8/get", postDataInit.get)
    .then((response) => {
      sessionStorage.setItem("initializationObject", JSON.stringify(response))
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  
    axios.post("http://127.0.0.1:7012/app1/v1/PublicServer/registrati8/location", postDataInit.location)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

    const initdata = JSON.parse(sessionStorage.getItem("initializationObject"))

    const submitHandler = async () => {
        await axios.post("http://127.0.0.1:7012/app1/v1/PublicServer/registrati8/save", {
            "postParam": {
              "obj": {
                "address": sessionStorage.getItem("houseNo")+sessionStorage.getItem("location"),
                "assemblyId": 81,
                "categoryId": sessionStorage.getItem("Caste"),
                "configArr": {
                  "asemblyConstituncyMandatory": 0,
                  "counsilConstitutionMandatory": 1,
                  "courseMandatory": 1,
                  "districtMandatory": 1,
                  "isDistrictSearchIsAllow": 0,
                  "maxDOB": 46,
                  "maxSectorPreferenceAllow": 3,
                  "minDOB": 18,
                  "minSectorPreferenceAllow": 1,
                  "policeStationMandatory": 1,
                  "postOfficeMandatory": 1,
                  "sectorMandatory": 1,
                  "talukaMandatory": 1,
                  "tehsilMandatory": 0,
                  "viewAssesmblyConstitution": 1,
                  "viewCounsilConstitution": 1,
                  "viewDistrictPreference": 1,
                  "viewPoliceStation": 1,
                  "viewPostOffice": 1,
                  "viewSectorPreference": 1,
                  "viewTalukaPreference": 0,
                  "viewTeaTribe": 1,
                  "viewTehsil": 1
                },
                "contactVerification": {
                  "email1Verified": null,
                  "enteredMobile1OTP": sessionStorage.getItem("OTP"),
                  "insertedId": sessionStorage.getItem("insertedId"),
                  "mobile1": sessionStorage.getItem("MobileNo"),
                  "mobile1OTP": sessionStorage.getItem("otpBackend"),
                  "mobile1Verified": true
                },
                "councilId": 10,
                "countryId": 97,
                "currentAddressSameAsPermanentAddress": 1,
                "declarationAccept": true,
                "disability": 0,
                "districtId": sessionStorage.getItem("districtName"),
                "dob": sessionStorage.getItem("dateOfBirth"),
                "fatherName": sessionStorage.getItem("fathersName"),
                "firstName": sessionStorage.getItem("firstName"),
                "genderName": sessionStorage.getItem("gender"),
                "idNumber": sessionStorage.getItem("IdCardNo"),
                "idType": sessionStorage.getItem("IdType"),
                "isAntodayaCardHolder": 0,
                "isBocw": 0,
                "isBPLCardHolder": 0,
                "isMinority": 0,
                "isNregaCardHolder": 0,
                "isTeaTribe": 0,
                "isWillingDistrict": 0,
                "isWillingState": 0,
                "jvId": "14",
                "lastName": sessionStorage.getItem("lastName"),
                "mobile1": sessionStorage.getItem("MobileNo"),
                "motherName": sessionStorage.getItem("mothersName"),
                "pin": sessionStorage.getItem("Pincode"),
                "placeName": sessionStorage.getItem("CityVillageName"),
                "policeStation": sessionStorage.getItem("PS"),
                "postOffice": sessionStorage.getItem("PO"),
                "Preference": [
                  true,
                  true,
                  true
                ],
                "preferenceArr": JSON.parse(sessionStorage.getItem("preferanceArr")),
                "preferenceDist1": "",
                "preferenceDist2": "",
                "preferenceDist3": "",
                "preferenceState1": "",
                "preferenceState2": "",
                "preferenceState3": "",
                "qualificationId": 10,
                "religionId": sessionStorage.getItem("Religion"),
                "sectorCourseDetails": [],
                "selectedPreferenceArr": JSON.parse(sessionStorage.getItem("preferanceArr")),
                "stateId": 4,
                "ulbId": 21,
                "urban": 1
              }
            }
        }).then((response) => {
            sessionStorage.setItem("success_message", response.data.message)
            console.log(response)
        })
      }

  return (
    <>
    <div className='card'>
        <h3>Basic details</h3>
        <div className='row pt-3'>
            <div className='col-sm-4 d-flex flex-column'>Name
                <input onChange={e => {sessionStorage.setItem("name", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Father's name
                <input onChange={e => {sessionStorage.setItem("fathersName", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Mother's name
                <input onChange={e => {sessionStorage.setItem("mothersName", e.target.value)}} type='text'></input>
            </div>
        </div>
        <div className='row pt-3'>
            <div className='col-sm-4 d-flex flex-column datepicker' type='date'>Date of birth
                <input type='date' onChange={e => {sessionStorage.setItem("dateOfBirth", e.target.value)}}></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Gender
                <select onChange={e => {sessionStorage.setItem("gender", e.target.value)}} type='text'>
                    {initdata.data.genderArr.map((s)=>(
                        <option value={s.genderId}>{s.genderName}</option>
                    ))}
                </select>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Mobile number
                <input onChange={e => {sessionStorage.setItem("mobileNumber", e.target.value)}} type='text'></input>
            </div>
        </div>
        <div className='row pt-3'>
            <div className='col-sm-4 d-flex flex-column'>School name
                <input onChange={e => {sessionStorage.setItem("schoolName", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Class
                <select onChange={e => {sessionStorage.setItem("class", e.target.value)}} type='text'></select>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Social category
                <select onChange={e => {sessionStorage.setItem("socialCategory", e.target.value)}} type='text'>
                    {initdata.data.categoryArr.map((s)=>(
                        <option value={s.categoryId}>{s.categoryName}</option>
                    ))}
                </select>
            </div>
        </div>
        <hr className='mt-5 mb-5'></hr>
        <h3>Residential details</h3>
        <div className='row pt-3'>
            <div className='col-sm-2 d-flex flex-column'>House no
                <input onChange={e => {sessionStorage.setItem("houseNo", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-6 d-flex flex-column'>Location
                <input onChange={e => {sessionStorage.setItem("location", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>City/Town/Village
                <input onChange={e => {sessionStorage.setItem("cityTownVillage", e.target.value)}} type='text'></input>
            </div>
        </div>
        <div className='row pt-3'>
            <div className='col-sm-4 d-flex flex-column'>State
                <input value={"Assam"} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>District
                <select onChange={e => {sessionStorage.setItem("district", e.target.value)}} type='text'>
                    {initdata.data.districtArr.map((s)=>(
                        <option value={s.districtId}>{s.districtName}</option>
                    ))}
                </select>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Pincode
                <input onChange={e => {sessionStorage.setItem("pincode", e.target.value)}} type='text'></input>
            </div>
        </div>
        <hr className='mt-5 mb-5'></hr>
        <h3>Family details</h3>
        <div className='row pt-3'>
            <div className='col-sm-4 d-flex flex-column'>Father's occupation
                <input onChange={e => {sessionStorage.setItem("fathersOccupation", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Mother's occupation
                <input onChange={e => {sessionStorage.setItem("mothersOccupation", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Family members
                <input onChange={e => {sessionStorage.setItem("numberOfFamily", e.target.value)}} type='number'></input>
            </div>
        </div>
        <hr className='mt-5 mb-5'></hr>
        <h3>Counsellor details</h3>
        <div className='row pt-3'>
            <div className='col-sm-4 d-flex flex-column'>Name of counsellor
                <input onChange={e => {sessionStorage.setItem("counsellorName", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Date of counselling
                <input onChange={e => {sessionStorage.setItem("dateOfCounselling", e.target.value)}} type='text'></input>
            </div>
            <div className='col-sm-4 d-flex flex-column'>Remarks
                <input onChange={e => {sessionStorage.setItem("counsellorRemarks", e.target.value)}} type='text'></input>
            </div>
        </div>
    </div>
    <div className='button-class'><button type='submit' onClick={submitHandler} className='btn btn-primary'>Submit</button></div>
    </>
  )
}

export default Registration