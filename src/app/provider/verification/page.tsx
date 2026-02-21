'use client'

import React, { useState, useRef } from 'react';
import {
    ShieldCheck,
    Upload,
    Camera,
    ChevronRight,
    CheckCircle2,
    FileText,
    ExternalLink,
    AlertCircle,
    User,
    ArrowLeft,
    Loader2
} from 'lucide-react';

type Step = 'intro' | 'identity' | 'selfie' | 'license' | 'submitting' | 'success';

export default function VerificationPage() {
    const [step, setStep] = useState<Step>('intro');
    const [idFront, setIdFront] = useState<string | null>(null);
    const [idBack, setIdBack] = useState<string | null>(null);
    const [selfie, setSelfie] = useState<string | null>(null);
    const [license, setLicense] = useState<string | null>(null);

    const steps = [
        { id: 'intro', label: 'Start' },
        { id: 'identity', label: 'Identity' },
        { id: 'selfie', label: 'Face Match' },
        { id: 'license', label: 'License' },
        { id: 'success', label: 'Done' },
    ];

    const currentStepIndex = steps.findIndex(s => s.id === (step === 'submitting' ? 'license' : step));

    const handleSubmitting = () => {
        setStep('submitting');
        setTimeout(() => {
            setStep('success');
        }, 4000);
    };

    return (
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            {/* Header Area */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-emerald-100/50">
                    <ShieldCheck size={14} />
                    Trust & Safety Protocol
                </div>
                <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-4 italic">Identity Verification 2.0</h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium max-w-lg mx-auto leading-relaxed">
                    Complete your profile verification to unlock the "Verified Provider" badge and gain priority in search results.
                </p>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-between mb-16 relative px-4">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
                {steps.map((s, idx) => {
                    const isActive = idx <= currentStepIndex;
                    return (
                        <div key={s.id} className="relative z-10 flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${isActive ? 'bg-[#1E7B7C] text-white scale-110' : 'bg-white dark:bg-gray-950 text-gray-400 dark:text-gray-500 border border-gray-100 dark:border-gray-800'
                                }`}>
                                {idx < currentStepIndex ? <CheckCircle2 size={20} /> : <span className="text-sm font-black">{idx + 1}</span>}
                            </div>
                            <span className={`text-[10px] font-black uppercase tracking-widest mt-4 ${isActive ? 'text-[#1E7B7C]' : 'text-gray-400 dark:text-gray-500'}`}>
                                {s.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Main Card */}
            <div className="bg-white dark:bg-gray-950/60 backdrop-blur-xl border border-white dark:border-gray-800 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-gray-200/20 relative overflow-hidden min-h-[500px] flex flex-col">

                {step === 'intro' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 rounded-[32px] bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-inner">
                            <User size={48} />
                        </div>
                        <div className="space-y-4 max-w-sm">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Why Verify?</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                                Verified accounts are 4x more likely to be hired. We use industry-standard encryption to protect your documents.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-left">
                                <ShieldCheck className="text-emerald-500 mb-2" size={20} />
                                <h4 className="text-xs font-black text-gray-900 dark:text-gray-100 uppercase">Secured by Stripe</h4>
                                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold">End-to-end encrypted storage</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-left">
                                <CheckCircle2 className="text-[#1E7B7C] mb-2" size={20} />
                                <h4 className="text-xs font-black text-gray-900 dark:text-gray-100 uppercase">Verified Badge</h4>
                                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold">Visible on search and profile</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setStep('identity')}
                            className="w-full bg-[#1E7B7C] text-white py-4 rounded-3xl font-black shadow-xl shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                        >
                            Start Verification
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}

                {step === 'identity' && (
                    <div className="flex-1 space-y-8 animate-in slide-in-from-right-8 duration-500">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Upload Government ID</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Please upload a clear photo of your Driver's License or International Passport.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className={`relative group cursor-pointer border-2 border-dashed rounded-3xl p-8 transition-all flex flex-col items-center justify-center min-h-[220px] ${idFront ? 'border-[#1E7B7C] bg-emerald-50/20' : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 /50 hover:bg-gray-50 dark:bg-gray-900'
 }`}>
                                <input type="file" className="hidden" onChange={(e) => setIdFront(URL.createObjectURL(e.target.files![0]))} />
                                {idFront ? (
                                    <img src={idFront} className="absolute inset-2 w-full h-full object-cover rounded-2xl" alt="ID Front" />
                                ) : (
                                    <>
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-950 shadow-sm flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-[#1E7B7C] transition-colors mb-4 italic">
                                            <Upload size={24} />
                                        </div>
                                        <span className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">ID Front Side</span>
                                    </>
                                )}
                            </label>

                            <label className={`relative group cursor-pointer border-2 border-dashed rounded-3xl p-8 transition-all flex flex-col items-center justify-center min-h-[220px] ${idBack ? 'border-[#1E7B7C] bg-emerald-50/20' : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 /50 hover:bg-gray-50 dark:bg-gray-900'
 }`}>
                                <input type="file" className="hidden" onChange={(e) => setIdBack(URL.createObjectURL(e.target.files![0]))} />
                                {idBack ? (
                                    <img src={idBack} className="absolute inset-2 w-full h-full object-cover rounded-2xl" alt="ID Back" />
                                ) : (
                                    <>
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-950 shadow-sm flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-[#1E7B7C] transition-colors mb-4 italic">
                                            <Upload size={24} />
                                        </div>
                                        <span className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">ID Back Side</span>
                                    </>
                                )}
                            </label>
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <button onClick={() => setStep('intro')} className="flex-1 py-4 rounded-3xl border-2 border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-500 font-black hover:bg-gray-50 dark:bg-gray-900 transition-all">Back</button>
                            <button
                                onClick={() => setStep('selfie')}
                                disabled={!idFront || !idBack}
                                className={`flex-[2] py-4 rounded-3xl font-black shadow-lg transition-all ${idFront && idBack ? 'bg-[#1E7B7C] text-white shadow-[#1E7B7C]/20 active:scale-95' : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                    }`}
                            >
                                Next Step
                            </button>
                        </div>
                    </div>
                )}

                {step === 'selfie' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-in slide-in-from-right-8 duration-500">
                        <div className="w-48 h-48 rounded-full border-4 border-dashed border-[#1E7B7C] p-2 relative">
                            {selfie ? (
                                <img src={selfie} className="w-full h-full rounded-full object-cover" alt="Selfie" />
                            ) : (
                                <div className="w-full h-full rounded-full bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center text-gray-300">
                                    <Camera size={48} className="mb-2" />
                                    <span className="text-[10px] font-black uppercase tracking-widest px-6 italic">Position your face within the frame</span>
                                </div>
                            )}
                            <button
                                className="absolute bottom-2 right-2 w-12 h-12 bg-[#1E7B7C] text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all"
                                onClick={() => setSelfie("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop")}
                            >
                                <Camera size={24} />
                            </button>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 italic underline decoration-[#1E7B7C]/30">Liveness Check</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium max-w-sm">Capture a live selfie to confirm your identity matches your uploaded document.</p>
                        </div>
                        <div className="flex gap-4 w-full">
                            <button onClick={() => setStep('identity')} className="flex-1 py-4 rounded-3xl border-2 border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-500 font-black hover:bg-gray-50 dark:bg-gray-900 transition-all">Back</button>
                            <button
                                onClick={() => setStep('license')}
                                disabled={!selfie}
                                className={`flex-[2] py-4 rounded-3xl font-black shadow-lg transition-all ${selfie ? 'bg-[#1E7B7C] text-white shadow-[#1E7B7C]/20 active:scale-95' : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                    }`}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {step === 'license' && (
                    <div className="flex-1 space-y-8 animate-in slide-in-from-right-8 duration-500">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 italic">Professional Credentials</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Upload your business license, liability insurance, or trade certification (Optional but recommended).</p>
                        </div>

                        <label className={`relative group cursor-pointer border-2 border-dashed rounded-[32px] p-12 transition-all flex flex-col items-center justify-center ${license ? 'border-[#1E7B7C] bg-emerald-50/20' : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:bg-gray-100'
                            }`}>
                            <input type="file" className="hidden" onChange={(e) => setLicense(e.target.files![0].name)} />
                            <div className={`w-20 h-20 rounded-3xl bg-white dark:bg-gray-950 shadow-md flex items-center justify-center mb-6 transition-all duration-500 ${license ? 'text-emerald-500 scale-110' : 'text-gray-300 group-hover:text-[#1E7B7C]'}`}>
                                <FileText size={40} />
                            </div>
                            <span className="text-sm font-black text-gray-600 mb-2 uppercase tracking-widest">{license || "Upload Document"}</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-bold">PDF, JPEG, or PNG (Max 5MB)</span>
                        </label>

                        <div className="flex gap-4 mt-auto">
                            <button onClick={() => setStep('selfie')} className="flex-1 py-4 rounded-3xl border-2 border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-500 font-black hover:bg-gray-50 dark:bg-gray-900 transition-all">Back</button>
                            <button
                                onClick={handleSubmitting}
                                className="flex-[2] bg-[#1E7B7C] text-white py-4 rounded-3xl font-black shadow-xl shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all"
                            >
                                Submit for Review
                            </button>
                        </div>
                    </div>
                )}

                {step === 'submitting' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-500">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full border-4 border-gray-100 dark:border-gray-800 border-t-[#1E7B7C] animate-spin" />
                            <ShieldCheck size={40} className="absolute inset-0 m-auto text-[#1E7B7C]" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 tracking-tighter italic">Analyzing Identity Matrix</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Our biometric engine is currently matching your attributes...</p>
                        </div>
                        <div className="w-full max-w-xs h-2 bg-gray-50 dark:bg-gray-900 rounded-full overflow-hidden">
                            <div className="h-full bg-[#1E7B7C] rounded-full animate-progress-fast" />
                        </div>
                    </div>
                )}

                {step === 'success' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-in slide-in-from-bottom-8 duration-700">
                        <div className="w-24 h-24 rounded-[32px] bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 scale-110 animate-pulse">
                            <CheckCircle2 size={48} />
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight italic">Success! Under Review</h2>
                            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-md">
                                Your documentation has been submitted successfully. Our safety team will review your credentials within <span className="text-gray-900 dark:text-gray-100 font-black">24-48 hours</span>.
                            </p>
                        </div>

                        <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100 w-full max-w-sm flex items-center gap-4">
                            <div className="p-3 bg-white dark:bg-gray-950 rounded-2xl shadow-sm text-emerald-500 font-black italic">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="text-left">
                                <h4 className="text-sm font-black text-emerald-900 uppercase tracking-tighter">Verification Pending</h4>
                                <p className="text-[10px] text-emerald-700 font-bold italic">Expect the verified badge soon!</p>
                            </div>
                        </div>

                        <button
                            className="bg-gray-900 text-white px-10 py-4 rounded-3xl font-black shadow-xl hover:scale-[1.05] transition-all italic active:scale-95"
                            onClick={() => window.location.href = '/provider/dashboard'}
                        >
                            Return to Dashboard
                        </button>
                    </div>
                )}

            </div>

            {/* Background elements (Decorative) */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E7B7C]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </div>
    );
}
