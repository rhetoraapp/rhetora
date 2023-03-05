import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const WaitlistModal = ({ isOpen, closeModal, email }) => {
  const [emails, setEmails] = useState(["abdulrahman"]);

  const [input, setInput] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(100);

  const addEmail = (e) => {
    e.preventDefault();
    if (input) {
      setEmails([...emails, input]);
    }
    setInput("");
  };

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
                <Dialog.Panel className="h-[800px] w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-16 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-center text-4xl font-bold leading-6">
                    Thank You!
                  </Dialog.Title>
                  <div className="mt-3">
                    <p className="text-center text-lg">
                      You are number{" "}
                      <span className="inline-block  h-6 rounded-full bg-minor px-2.5">
                        <p className="my-auto py-1.5 text-base leading-[18px] text-white">{waitlistCount}</p>
                      </span>{" "}
                      on the list. Invite friends to jump the queue and earn rewards. Earn 100 points for every friend that signs up.
                    </p>
                  </div>
                  <div className="mx-auto mt-4 mb-1.5 flex h-11 w-full max-w-lg justify-between rounded-md border bg-white px-2.5 shadow">
                    <div className="overflow-x-auto flex flex-row h-full w-full">
                    {emails.map((email) => (
                      <div className="my-auto h-8 items-center rounded bg-graylight px-2 mx-1 pt-2">
                        <p className="text-gray-500 my-auto flex text-base">
                          {email}
                          <span className="ml-1.5 inline-block cursor-pointer" onClick={() => setEmails(emails.filter((e) => e !== email))}>
                            ×
                          </span>
                        </p>
                      </div>
                    ))}

                    <form onSubmit={addEmail} className="h-full w-full">
                      <input
                        className="h-full w-full flex-1 border-none bg-transparent px-2 pt-1 leading-3 outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      />
                    </form>
                    </div>
                    <button className="my-auto h-6 rounded bg-minor px-3 py-0.5 text-base text-white" onClick={addEmail}>
                      Invite
                    </button>
                  </div>

                  <div className="mx-auto mt-4 mb-1.5 flex w-full max-w-lg justify-between rounded-md border bg-white p-2.5 shadow">
                    <div className="flex flex-col"></div>
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
