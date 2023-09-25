"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { food } from "@/constants";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  index: number;
}

const CarDetails = ({ isOpen, closeModal, index }: CarDetailsProps) => {
  console.log("opened");
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
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
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
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh] 
                overflow-y-auto transform rounded-2xl bg-white text-left 
                shadow-xl transition-all flex flex-col gap-5 p-6"
                >
                  <div className="bg-[#171919] flex justify-center">
                    <h1 className="2xl:text-[72px] sm:text-[44px] text-[28px] font-extrabold text-[#F7F7F7]">
                      {food[index].name}
                    </h1>
                  </div>
                  <button
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <Image
                      src="/assets/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-96 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={food[index].img}
                        alt="Food Model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    {/* <h2 className="font-semibold text-xl capitalize">
                      {food[index].name}
                    </h2> */}

                    <div className="w-full flex justify-center items-center py-1">
                      <h3 className="font-semibold text-base text-[#F7F7F7] capitalize tracking-[0.5rem]">
                        <span className="bg-[#171919] py-1 px-4 pl-6">
                          MACROS
                        </span>
                      </h3>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {/* {Object.entries(food[index].macros).map(
                        ([key, value]) => (
                          <div
                            className="flex justify-between gap-5 w-full text-right"
                            key={key}
                          >
                            <h4 className="text-gray capitalize">
                              {key.split("_").join(" ")}
                            </h4>

                            <p className="text-black-100 font-semibold">
                              {value}g
                            </p>
                          </div>
                        )
                      )} */}
                      {/* <div className="flex flex-col"> */}
                      <ul className="list-disc p-4 gap-4 flex flex-col">
                        {food[index].ingredients?.map((item) => (
                          <li>
                            <p className="text-[16px] tracking-[0.5rem] font-bold">{`${
                              item.quantity
                            } ${item.name.toUpperCase()} = ${
                              item.calories
                            } CALORIES (PER MEAL)`}</p>
                          </li>
                        ))}
                      </ul>
                      {/* </div> */}
                    </div>
                    <h1 className="text-[18px] tracking-[0.5rem] font-extrabold">{`TOTAL CALORIES INTAKE : ${food[index].totalCalories} CALORIES (PER MEAL)`}</h1>
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

export default CarDetails;
