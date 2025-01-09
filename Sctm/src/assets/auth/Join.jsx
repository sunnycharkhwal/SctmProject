import React from 'react';
import Logo from '../../images/logo.png';
import {BlueButton, OutlinedBtn} from '../component/Button';
import {NavLink, useNavigate} from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {LuMoveLeft} from 'react-icons/lu';
import {NewTooltip} from '../component/NewTooltip';
export const Join = () => {
  const [joinBusinessShow, setJoinBusinessShow] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <JoinBusinessModal
        show={joinBusinessShow}
        onHide={() => setJoinBusinessShow(false)}
      />
      <div className="joinDiv">
        <div className="joinDivInner">
          <img src={Logo} alt="logo" />
          <p>Your academy management app</p>
          <h3>Create New or Join Exisiting Business</h3>
          <p>You can add your own business & invite your co-workers OR</p>
          <p>If your business is on AcademyPRO, we will help you join them.</p>
          <div className="buttonDiv">
            <OutlinedBtn title="Join Business" />
            <BlueButton
              onClick={() => setJoinBusinessShow(true)}
              title="Join Business"
            />
          </div>
          <div className="LinkDiv">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/terms-and-policies">Terms</NavLink>
            <NavLink to="/privacy-policy">Privacy</NavLink>
          </div>
          <NewTooltip
            children={
              <Button
                variant="outlined"
                className="btnWithIcon BackBtn"
                onClick={() => navigate(-1)}>
                <span>
                  <LuMoveLeft />
                </span>
              </Button>
            }
            title="Back"
            placement="bottom"
          />
        </div>
      </div>
    </>
  );
};
const JoinBusinessModal = props => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <div className="JoinBusinessModal_div">
          <h3>Join Business</h3>
          <p>
            Please ask the admin to add you as a user. You will receive an email
            from support@stm.co when they add you. Follow the link in the email
            to start using Stm.
          </p>
          <OutlinedBtn onClick={props.onHide} title="OK" />
        </div>
      </Modal.Body>
    </Modal>
  );
};
