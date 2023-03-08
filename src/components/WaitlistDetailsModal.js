import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";
import { Loading } from "./Loading";

export const WaitlistDetailsModal = ({ isOpen, closeModal, submit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !company) {
      alert("Please fill in all the fields");
      return;
    }

    submit(firstName, lastName, company)
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
                <Dialog.Panel className="h-[470px] w-full  max-w-lg transform justify-center overflow-hidden rounded-2xl bg-white p-14 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title as="h3" className="text-center text-4xl font-bold leading-6">
                    Almost There!
                  </Dialog.Title>
                  <div className="mt-3 px-3">
                    <p className="text-center text-lg">Psst. Rewards are on the next page.</p>

                    <form className="mt-8 mb-4 space-y-6">
                      {/* form to enter First Name, Last Name and Company. Do not use labels, only placeholders */}
                      <div className="-rounded-md">
                        <div>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border-gray-300 placeholder-gray-500 text-gray-900 relative my-4 block w-full appearance-none rounded-none rounded-t-md border px-3 py-2  shadow-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                            placeholder="First Name"
                          />

                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border-gray-300 placeholder-gray-500 text-gray-900 relative my-4 block w-full appearance-none rounded-none rounded-b-md border px-3 py-2  shadow-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                            placeholder="Last Name"
                          />
                          <input
                            id="company"
                            name="company"
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="border-gray-300 placeholder-gray-500 text-gray-900 relative my-4 mb-8 block w-full appearance-none rounded-none rounded-b-md border px-3 py-2  shadow-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                            placeholder="Company"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="w-full pt-4">
                      <button
                        onClick={handleSubmit}
                        className="ml-1/2 my-auto mx-auto  mt-8 flex h-8 justify-center self-center rounded bg-minor px-4 py-1 text-lg text-white shadow-md"
                      >
                        Go to rewards!
                      </button>
                    </div>
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
