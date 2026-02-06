import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";

export default function PaymentSettingsPage() {
    return (
        <div className="p-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
            <div className="bg-[#0f172a] p-6 rounded-t-lg">
                <h1 className="text-xl font-bold text-white tracking-tight">Payment Gateway Settings</h1>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-b-lg shadow-sm space-y-8 -mt-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Switch className="data-[state=checked]:bg-[#0f172a]" />
                        <div className="space-y-0.5">
                            <h3 className="text-[14px] font-bold text-gray-800">Test Mode</h3>
                            <p className="text-[11px] text-gray-500">Enable to use Razorpay test keys</p>
                        </div>
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Razorpay API Key <span className="text-red-500">*</span></label>
                            <Input className="h-11 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-[#0f172a] bg-blue-50/30" placeholder="Enter API Key" />
                            <p className="text-[10px] text-gray-400 italic px-1 font-medium">Test: rzp_test_xxx | Live: rzp_live_xxx</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Razorpay Secret Key <span className="text-red-500">*</span></label>
                            <Input type="password" underline="false" className="h-11 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-[#0f172a] bg-blue-50/30" placeholder="•••••" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Company/Institute Name <span className="text-red-500">*</span></label>
                            <Input className="h-11 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-[#0f172a]" placeholder="Enter Company Name" />
                            <p className="text-[10px] text-gray-400 italic px-1 font-medium">This will appear on the Razorpay checkout page</p>
                        </div>
                    </div>

                    <div className="bg-gray-500/80 p-6 rounded-sm text-white space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-gray-800 shrink-0">
                                <span className="text-[10px] font-bold text-gray-600">i</span>
                            </div>
                            <h4 className="text-[13px] font-bold">Test Mode Instructions:</h4>
                        </div>
                        <div className="space-y-1 text-[11px] font-medium pl-7">
                            <p>Test Card: <span className="text-blue-300">4111 1111 1111 1111</span></p>
                            <p>CVV: Any 3 digits (e.g., <span className="text-blue-300">123</span>)</p>
                            <p>Expiry: Any future date</p>
                            <p>Name: Any name</p>
                            <p>Get test keys from: <span className="text-blue-300">Razorpay Dashboard</span></p>
                        </div>
                    </div>

                    <Button
                        onClick={() => alert("Payment settings saved successfully!")}
                        className="w-full bg-[#0f172a] hover:bg-[#151c63] text-white py-6 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                    >
                        <Save size={16} /> Save Settings
                    </Button>
                </div>
            </div>

            <div className="pt-8 text-center">
                <p className="text-[10px] text-gray-400 font-medium">Copyright 2026-27 © DITRP INDIA All rights reserved.</p>
            </div>
        </div>
    );
}






