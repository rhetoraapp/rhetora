// utils
import axiosInstance from "../utils/axios";

// PostAccessRequest
const PostAccessRequest = async ({ name, companyName, email }) => {
  const response = await axiosInstance.post("/early-access", {
    name,
    companyName,
    email,
  });
  const { data } = response;
  return data;
};

// InviteFriend
const InviteFriendRequest = async (invitee_list, host_email) => {
  const response = await axiosInstance.post("/waitlist/invite", {
    invitee_list,
    host_email,
  });
  const { data } = response;
  return data;
};

// join waitlist
const JoinWaitlistRequest = async (email) => {
  const { data } = await axiosInstance.post("/waitlist/join", {
    email: email,
  });

  return data;
};

// redeem Invitation
const RedeemInvitationRequest = async (inviteCode) => {
  const { data } = await axiosInstance.post( `/waitlist/redeem/${inviteCode}`)
  return data;
};

export { PostAccessRequest, InviteFriendRequest, JoinWaitlistRequest, RedeemInvitationRequest };
