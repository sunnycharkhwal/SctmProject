import React, {useState} from 'react';
import QRCode from 'react-qr-code';
import ProfileIcon from '../../../../images/ProfileIcon.svg';
import {Button} from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import {BackBarWithIcon} from '../../../component/Button';
import demoAd from '../../../../images/demoAd.png';

export const StudentDetail = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const UserImg = 'https://picsum.photos/200/300?grayscale';
  const AadhaarCardImg = '';
  return (
    <>
      <BackBarWithIcon
        name="Deependra Bhaskar"
        UserImg={UserImg}
        pageLink={-1}
      />
      <AadhaarCardModal
        AadhaarCardImg={AadhaarCardImg}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="StudentDetailDiv">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="StudentDetail_name">
              {UserImg ? (
                <img className="img1" src={UserImg} alt="User Image" />
              ) : (
                <img className="img2" src={ProfileIcon} alt="Profile Icon" />
              )}
              <p>Deependra bhaskar</p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="StudentDetail_QrCode">
              <MyQRCode />
              <p>Scan the QR Code to view...</p>
            </div>
          </div>
          <div className="col-12">
            <div className="StudentDetail_info">
              <div className="TitleTop">Personal Information</div>
              <div className="StudentDetail_info_inner">
                <div className="row g-2">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Father name</h3>
                      <p>Father name</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Mother name</h3>
                      <p>Mother name</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Gender</h3>
                      <p>Gender</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Name on Certificate</h3>
                      <p>Certificate name</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Date of Birth</h3>
                      <p>12/05/2025</p>
                      <small>Age as on today 23 years 12 months 1 day</small>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Birth Poof</h3>
                      <p>Aadhaar Card</p>
                      <Button
                        className="buttonView"
                        variant="text"
                        onClick={() => setModalShow(true)}>
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="StudentDetail_info">
              <div className="TitleTop">Particulars</div>
              <div className="StudentDetail_info_inner">
                <div className="row g-2">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Belt</h3>
                      <p>White Belt</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Weight</h3>
                      <p>70 kg</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Height</h3>
                      <p>50 ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="StudentDetail_info">
              <div className="TitleTop">Address Information</div>
              <div className="StudentDetail_info_inner">
                <div className="row g-2">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Country</h3>
                      <p>Country name</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Pin Code</h3>
                      <p>000000</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>State</h3>
                      <p>State name</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>District</h3>
                      <p>District name</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Address</h3>
                      <p>Address goes here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="StudentDetail_info">
              <div className="TitleTop">Emergency Contact number</div>
              <div className="StudentDetail_info_inner">
                <div className="row g-2">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Father</h3>
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Mother</h3>
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Guardian</h3>
                      <p>1234567890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="StudentDetail_info">
              <div className="TitleTop">Other Information</div>
              <div className="StudentDetail_info_inner">
                <div className="row g-2">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Aadhar number</h3>
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>School/College worked for</h3>
                      <p>School/College worked for</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Name of Person who has signed the form</h3>
                      <p>Name goes here</p>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="StudentDetail_info_text">
                      <h3>Relation ship with Participant</h3>
                      <p>Relationship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AadhaarCardModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Birth Poof</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="AadhaarCardImg_div">
          <img
            src={props.AadhaarCardImg || demoAd}
            alt={props.AadhaarCardImg ? 'User' : 'Default'}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="text">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
const MyQRCode = ({
  qrValue = 'https://www.npmjs.com/package/react-qr-code',
  qrHeight = 100,
  qrWidth = 100,
}) => {
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');

  // The QR code component uses a single `size` prop for both dimensions,
  // so we'll take the smaller of the two to ensure it fits within the desired dimensions.
  const qrSize = Math.min(qrHeight, qrWidth);

  return (
    <>
      <QRCode value={qrValue} bgColor={back} fgColor={fore} size={qrSize} />
    </>
  );
};
