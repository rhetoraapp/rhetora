import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { RedeemInvitationRequest } from "../api";

const RedeemInvite = () => {
  useEffect(() => {
    const redeemInvite = async () => {
      const inviteCode = window.location.pathname.split("/")[2];
      await RedeemInvitationRequest(inviteCode);
    };
    redeemInvite();
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-1/2 pt-24 text-center text-4xl">Thank you for signing up for our waitlist!</div>
      <Footer />
    </div>
  );
};
export default RedeemInvite;
