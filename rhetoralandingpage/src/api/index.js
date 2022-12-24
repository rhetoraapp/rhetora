// utils
import axios from "../utils/axios";

// PostAccessRequest
const PostAccessRequest = async ({ name, companyName, email }) => {
  const response = await axios.post("/early-access", {
    name,
    companyName,
    email,
  });
  const { data } = response;
  console.log(data);
  return data;
};

// InviteFriend
const InviteFriendRequest = async ({ email }) => {
  const response = await axios.post("/invite", {
    email,
    invitedBy: localStorage.getItem("successfullAccess"),
  });
  const { data } = response;
  console.log(data);
  return data;
};

export { PostAccessRequest, InviteFriendRequest };
