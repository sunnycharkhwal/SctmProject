import React, {useState} from 'react';

import UploadImg from '../../images/UploadImg.svg';
import {IoCameraOutline} from 'react-icons/io5';
import {BlueButton} from '../component/Button';
import {useNavigate} from 'react-router';

export const AddStudentForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <form action="" className="formTop_div">
        <div className="row g-3">
          <div className="col-12">
            <div className="form_div">
              <div className="formFooter formBanner">
                <img src={UploadImg} alt="img" />
                <p>Banner size 1080px * 400px</p>
              </div>
              <input type="file" id="banner" hidden />
              <label htmlFor="banner" className="UploadBtn">
                <span className="icon">
                  <IoCameraOutline />
                </span>
                <span className="btnText">
                  Upload banner <br />
                  1080px * 400px
                </span>
              </label>
            </div>
          </div>
          <div className="col-12 formTop_Title">
            Individual Registration form
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile1" className="form-label">
                Upload your Photo
              </label>
              <input
                className="form-control UploadInput"
                type="file"
                id="formFile"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control NormalInput"
                placeholder="ENTER YOUR FIRST NAME"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Middle name
              </label>
              <input
                type="text"
                className="form-control NormalInput"
                placeholder="ENTER YOUR MIDDLE NAME"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Last/Sur Name
              </label>
              <input
                type="text"
                className="form-control NormalInput"
                placeholder="ENTER YOUR LAST/SUR NAME"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Father Name
              </label>
              <input
                type="text"
                className="form-control NormalInput"
                placeholder="ENTER YOUR FATHER NAME"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Mother Name
              </label>
              <input
                type="text"
                className="form-control NormalInput"
                placeholder="ENTER YOUR MOTHER NAME"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label mb-0">
                Certificate Name
              </label>
              <br />
              <small>
                For Name, select from the present options. This is how it will
                be printed on the Certificate.*
              </small>
              <br />
              <label htmlFor="formFile" className="form-label mt-3">
                First name <span className="ms-2">Middle name</span>
              </label>
              <input
                type="text"
                className="form-control NormalInput"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Select your gender
              </label>
              <select
                className="form-select selectInput"
                aria-label="Default select example">
                <option defaultValue>Select your gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control NormalInput"
                style={{width: '10rem'}}
                placeholder="ENTER YOUR FIRST NAME"
              />
              <small style={{color: '#1A7F37'}}>
                Your age as on today 23 years 12 months 1 day
              </small>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Upload your Birth proof (Example: Aadhar card, Passport, any gov
                id containing date of birth)
              </label>
              <input
                className="form-control UploadInput"
                type="file"
                id="formFile"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Belt
              </label>
              <select
                className="form-select selectInput"
                aria-label="Default select example">
                <option defaultValue>Select your belt</option>
                <option value="1">White belt</option>
                <option value="2">Demo</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Weight
              </label>
              <select
                className="form-select selectInput"
                aria-label="Default select example">
                <option defaultValue>Select your Weight</option>
                <option value="1">70 Kg</option>
                <option value="2">60 Kg</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Height
              </label>
              <select
                className="form-select selectInput"
                aria-label="Default select example">
                <option defaultValue>Select your Height</option>
                <option value="1">70 cm</option>
                <option value="2">60 cm</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Country
              </label>
              <select
                className="form-select selectInput"
                aria-label="Default select example">
                <option defaultValue>Select your Country</option>
                <option value="1">India</option>
                <option value="2">Demo</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Pin code
              </label>
              <input
                type="text"
                className="form-control NormalInput"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                State
              </label>
              <select
                className="form-select selectInput"
                aria-label="Default select example">
                <option defaultValue>Select your State</option>
                <option value="1">Delhi</option>
                <option value="2">Demo</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                District
              </label>
              <select
                className="form-select selectInput"
                aria-label="Default select example">
                <option defaultValue>Select your District</option>
                <option value="1">Delhi</option>
                <option value="2">Demo</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"></textarea>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Emergency contact number
              </label>
              <div className="row g-3 ">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control NormalInput"
                    placeholder="FATHER"
                  />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control NormalInput"
                    placeholder="MOTHER"
                  />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control NormalInput"
                    placeholder="GURDIAN"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Aadhar number
              </label>
              <input
                type="number"
                className="form-control NormalInput"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                School/College/Firm you are working for
              </label>
              <input
                type="text"
                className="form-control NormalInput"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label htmlFor="formFile" className="form-label">
                Name of the person who is signing the form and relation with the
                Participant in Case of minor
              </label>
              <div className="row g-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control NormalInput"
                    placeholder="NAME OF THE PERSON SIGNING THE FORM"
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control NormalInput"
                    placeholder="RELATION WITH THE PARTICIPANT"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form_div">
              <label className="form-label">Footer</label>
              <div className="formFooter">
                <img src={UploadImg} alt="img" />
                <p>Footer size 1080px * 400px</p>
              </div>
              <input type="file" id="footer" hidden />
              <label htmlFor="footer" className="UploadBtn">
                <span className="icon">
                  <IoCameraOutline />
                </span>
                <span className="btnText">
                  Upload footer <br />
                  1080px * 400px
                </span>
              </label>
            </div>
          </div>
          <div className="col-12 text-center">
            <BlueButton
              onClick={() => navigate('/add-student-form-detail')}
              title="continue"
            />
          </div>
        </div>
      </form>
    </>
  );
};
