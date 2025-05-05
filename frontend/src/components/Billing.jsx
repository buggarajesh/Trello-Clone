import React from "react";

const Billing = () => {
  return (
    <div className="bg-[#1d2125] text-white min-h-screen w-full px-6 py-8">
      <h1 className="text-xl font-semibold mb-6">Billing</h1>

      {/* Workspace Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#579dff] text-black font-bold rounded w-12 h-12 flex items-center justify-center text-lg">
          T
        </div>
        <div>
          <h2 className="text-lg font-semibold">Trello Workspace</h2>
          <p className="text-sm text-[#b6c2cf]">Premium · Private</p>
        </div>
      </div>

      {/* Premium Details */}
      <div className="border-t border-[#a6c5e229] pt-6 space-y-6">
        {/* Plan Summary */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="font-medium mb-1">Current plan</h4>
            <p className="text-sm text-[#b6c2cf]">
              You're on the <span className="text-[#1d7afc] font-medium">Premium</span> plan.
              Enjoy features like advanced checklists, unlimited boards, and priority support.
            </p>
          </div>
          <button className="bg-[#2c3e50] hover:bg-[#3a4a5a] text-sm px-4 py-2 mt-2 md:mt-0 rounded self-start">
            Manage plan
          </button>
        </div>

        {/* Payment Method */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="font-medium mb-1">Payment method</h4>
            <p className="text-sm text-[#b6c2cf]">Visa ending in **** 4242</p>
          </div>
          <button className="bg-[#2c3e50] hover:bg-[#3a4a5a] text-sm px-4 py-2 mt-2 md:mt-0 rounded self-start">
            Update payment
          </button>
        </div>

        {/* Billing History */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="font-medium mb-1">Billing history</h4>
            <p className="text-sm text-[#b6c2cf]">
              View and download your invoices and receipts.
            </p>
          </div>
          <button className="bg-[#2c3e50] hover:bg-[#3a4a5a] text-sm px-4 py-2 mt-2 md:mt-0 rounded self-start">
            View invoices
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;


