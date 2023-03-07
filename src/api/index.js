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
const InviteFriendRequest = async ({ email }) => {
  const response = await axiosInstance.post("/invite", {
    email,
    invitedBy: localStorage.getItem("successfullAccess"),
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

export { PostAccessRequest, InviteFriendRequest, JoinWaitlistRequest };
