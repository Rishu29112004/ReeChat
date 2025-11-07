import { UserRoundPen } from "lucide-react";
import React from "react";

const contactsData = [
  { name: "Rohit" },
  { name: "Rishu" },
  { name: "Manoj" },
  { name: "Abhishek" },
  { name: "Amit" },
  { name: "Neha" },
  { name: "Priya" },
];

const Contacts = () => {
  return (
    <div className="w-[280px] h-screen sticky top-16 bg-white border-l border-gray-200 shadow-sm">
      <div className="p-8 fixed">
        <p className="font-mono font-bold text-xl text-slate-800 mb-4">Contacts</p>
        <div className="flex flex-col gap-2">
          {contactsData.map((contact) => (
            <div
              key={contact.name}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0CAF60] to-green-400 flex items-center justify-center text-white font-bold">
                {contact.name.charAt(0)}
              </div>
              <p className="font-mono font-semibold text-base text-slate-800">
                {contact.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
