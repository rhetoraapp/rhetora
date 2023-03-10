import React, { useEffect, useState } from "react";
import { WaitlistDetailsModal } from "../WaitlistDetailsModal";
import { WaitlistModal } from "../WaitlistModal";
import { Loading } from "../Loading";
import { EMAIL_REGEX } from "../../utils/contants";
import { JoinWaitlistRequest } from "../../api";
import "../../styles/EarlyAccessForm.css";

const WaitlistForm = ({ color }) => {
  const [email, setEmail] = React.useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waitlistData, setWaitlistData] = useState({});
  const [openWaitlistDetailsModal, setOpenWaitlistDetailsModal] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onEnterEmail = async (e) => {
    e.preventDefault();

    // validate email
    if (!email.match(EMAIL_REGEX)) {
      alert("Please enter a valid email address");
      return;
    }
    setOpenWaitlistDetailsModal(true);
  };

  const joinWaitlist = async (firstName, lastName, company) => {
    setLoading(true);
    const data = await JoinWaitlistRequest(email, firstName, lastName, company);
    if (data.success === true) {
      setWaitlistData(data);
      openModal();
      setOpenWaitlistDetailsModal(false);
      setEmail("");
    }

    if (data.error) {
      alert("Something went wrong. Please try again later.");
      setOpenWaitlistDetailsModal(false);
    }
    setLoading(false);
  };

  return (
    <>
      <Loading loading={loading} />
      <WaitlistModal isOpen={modalOpen} closeModal={closeModal} waitlistData={waitlistData} />
      <WaitlistDetailsModal isOpen={openWaitlistDetailsModal} closeModal={() => setOpenWaitlistDetailsModal(false)} submit={joinWaitlist} />
      {/* Loading Screen */}
    
      <form className="-ml-1 flex flex-1 rounded-full bg-white border mt-1" onSubmit={onEnterEmail}>
        <button className={`my-1 ml-1 h-10 w-[180px] rounded-full ${color} px-2 py-1.5 pt-2.5 text-center text-white`}>EARLY ACCESS</button>
        <input
          className="my-1 ml-2 h-full w-full  bg-transparent pt-2 outline-none"
          placeholder="Business Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </>
  );
};

export default WaitlistForm;
