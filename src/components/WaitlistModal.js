import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";
import { EMAIL_REGEX } from "../utils/contants";
import { InviteFriendRequest } from "../api";
import { Loading } from "./Loading";

export const WaitlistModal = ({ isOpen, closeModal, waitlistData }) => {
  const { points: currentPoints, position, email } = waitlistData;
  const [emails, setEmails] = useState([]);

  const [input, setInput] = useState("");
  const [points, setPoints] = useState(currentPoints);
  const [loading, setLoading] = useState(false);

  const inputDivRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emails.length && !input) return alert("Please enter an email address");

    let invitee_list;
    if (!emails.length) {
      // in the event that the user only entered one email, check if it is valid
      if (!input.match(EMAIL_REGEX)) return alert("Please enter a valid email address");
      invitee_list = [input];
    } else {
      invitee_list = emails;
    }

    setLoading(true);
    const data = await InviteFriendRequest(invitee_list, email);
    if (data.success) {
      closeModal();
      setEmails([]);
      setInput("");
      alert("Invitation sent successfully!");
    }
    if (data.error) {
      alert("An error occurred. Please try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    // add 100 points for every email. max 1000 points
    if (!emails.length) return setPoints(currentPoints);
    setPoints(Math.min((emails.length) * 100, 1000) + currentPoints);
  }, [emails]);

  useEffect(() => {
    // adds email to the list if the user enters a valid email and presses space
    if (input.endsWith(" ") && input.trim().match(EMAIL_REGEX)) {
      setEmails([...emails, input.trim()]);
      setInput("");
    }
  }, [input]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />

          </Transition.Child>
          <Loading loading={loading} />
          <div className="fixed inset-0 overflow-y-auto">

            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-[800px] w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-14 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title as="h3" className="text-center text-4xl font-bold leading-6">
                    Thank You!
                  </Dialog.Title>
                  <div className="mt-3">
                    <p className="text-center text-lg">
                      You are number{" "}
                      <span className="inline-block  h-6 rounded-full bg-minor px-2.5">
                        <p className="my-auto py-1.5 text-base leading-[18px] text-white">{position}</p>
                      </span>{" "}
                      on the list. Invite friends to jump the queue and earn rewards. Earn 100 points for every friend that signs up.
                    </p>
                  </div>
                  <div className="mx-auto mt-4 mb-1.5 flex h-11 w-full max-w-lg justify-between rounded-md border bg-white px-2.5 shadow">
                    <div className="invite-waitlist-input-div mr-4 flex h-full w-full flex-row  overflow-x-auto" ref={inputDivRef}>
                      {emails.map((email) => (
                        <div className="my-auto mx-1 h-8 items-center rounded bg-graylight px-2 pt-2">
                          <p className="text-gray-500 my-auto flex text-base">
                            {email}
                            <span className="ml-1.5 inline-block cursor-pointer" onClick={() => setEmails(emails.filter((e) => e !== email))}>
                              ×
                            </span>
                          </p>
                        </div>
                      ))}

                      <form onSubmit={handleSubmit} className="h-full w-full">
                        <input
                          className="h-full w-full min-w-max flex-1 border-none bg-transparent px-2 pt-1 leading-3 outline-none"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Enter an email address"
                        />
                      </form>
                    </div>
                    <button className="my-auto h-7 rounded bg-minor px-3 py-1 text-base text-white" onClick={handleSubmit}>
                      Invite
                    </button>
                  </div>

                  <div className="mx-auto mt-4 mb-1.5 flex w-full max-w-lg justify-between rounded-md border bg-white p-3 shadow">
                    <div className="flex w-full flex-col">
                      <div className="flex w-full flex-row justify-between">
                        <div className="font-bold">
                          <p className="text-2xl">{points} </p>
                          <p className="-mt-1 text-lg">Reward Points</p>
                        </div>
                        <img src={require("../assets/Logo-Regular.svg").default} className="h-12" alt="rhetora Logo" />
                      </div>

                      <ProgressBar points={points} />
                    </div>
                  </div>

                  <div className="mx-auto mt-4 mb-1.5 flex w-full max-w-lg justify-between rounded-md border bg-white p-3 shadow">
                    <ul className="w-full list-inside list-disc">
                      <li className="flex w-full  py-2">
                        <p className="list-item flex-1 text-lg">Get Early Access</p>
                        <p className="text-lg">100</p>
                      </li>
                      {/*Strike through  */}
                      {points >= 100 && <div className="-mt-[25px] mb-4 ml-auto h-0.5 w-[95%] bg-black" />}

                      <li className="flex w-full items-center justify-between py-2">
                        <p className="list-item flex-1 text-lg">Get Earlier Access</p>
                        <p className="text-lg">200</p>
                      </li>
                      {/*Strike through  */}
                      {points >= 200 && <div className="-mt-[25px] mb-4 ml-auto h-0.5 w-[95%] bg-black" />}

                      <li className="flex w-full items-center justify-between py-2">
                        <p className="list-item text-lg">Get First Month Free</p>
                        <p className="text-lg">300</p>
                      </li>
                      {/*Strike through  */}
                      {points >= 300 && <div className="-mt-[25px] mb-4 ml-auto h-0.5 w-[95%] bg-black" />}
                      <li className="flex w-full items-center justify-between py-2">
                        <p className="list-item text-lg">Get 3 Months free</p>
                        <p className="text-lg">500</p>
                      </li>
                      {/*Strike through  */}
                      {points >= 500 && <div className="-mt-[25px] mb-4 ml-auto h-0.5 w-[95%] bg-black" />}
                      <li className="flex w-full items-center justify-between py-2">
                        <p className="list-item text-lg">Get Rhetora Free for Life</p>
                        <p className="text-lg">1000</p>
                      </li>
                      {points >= 1000 && <div className="-mt-[25px] mb-4 ml-auto h-0.5 w-[95%] bg-black" />}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const ProgressBar = ({ points }) => {
  const dots = Array.from({ length: 10 }, (_, i) => i + 1);

  const renderCompletedDot = (dot) => (
    <li
      key={dot}
      className={` flex w-full items-center justify-end rounded-full before:my-auto before:inline-block before:h-3 before:w-full   before:bg-minor before:content-[''] ${dot === 1 && "before:rounded-l-full"
        }`}
    >
      <img src={require("../assets/checkmark-orange.svg").default} className={`h-[22px] ${dot === 1 ? "-mr-2" : "-mr-2"}`} />
    </li>
  );

  const renderInProgressDot = (dot) => (
    <li
      key={dot}
      className={
        dot !== 1 &&
        "flex w-full items-center rounded-full before:my-auto before:inline-block before:h-3 before:w-full before:bg-minor before:content-['']"
      }
    >
      <div
        className={`flex h-3 w-2 shrink-0 items-center bg-minor ${dot === 1 ? "w-6 justify-end rounded-l-full before:bg-minor" : "justify-center"}`}
      >
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
    </li>
  );

  const renderIncompleteDot = (dot) => (
    <li
      key={dot}
      className={`flex w-full items-center justify-center text-center ${dot !== 1 ? "before:inline-block before:w-full" : "-ml-2.5 before:w-1/2"}`}
    >
      <div className="h-2 w-2 shrink-0 items-center rounded-full bg-minor"></div>
    </li>
  );

  const renderDot = (dot) => {
    if (dot * 100 === points) {
      return renderCompletedDot(dot);
    } else if (dot * 100 < points) {
      return renderInProgressDot(dot);
    } else {
      return renderIncompleteDot(dot);
    }
  };

  return (
    <div className="mt-3">
      <ol className="flex h-8 w-full items-center justify-between rounded bg-minorlight px-3 !pr-5">{dots.map(renderDot)}</ol>

      {/* display points below the bar */}
      <div className="text-gray-500 mt-1.5 ml-1.5 flex w-full justify-between pl-3 pr-2.5 text-sm ">
        {dots.map((dot) => (
          <p className={`text-sm font-bold ${dot === 1 ? "ml-auto" : " ml-auto"} `} key={dot}>
            {dot * 100}
          </p>
        ))}
      </div>
    </div>
  );
};
