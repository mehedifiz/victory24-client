import axios from "axios";
import { useContext, useState } from "react";
import { Authcontext } from "../../Auth/Authprovider";
import Swal from "sweetalert2";

const PostContent = () => {
    const { user } = useContext(Authcontext);
    const [type, setType] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const content = {
            type,
            name: data.get('name'),
            age: data.get('age'),
            bio: data.get('bio'),
            image: data.get('image'),
            location: data.get('location'),
            district: data.get('district'),
            gender: data.get('gender'),
            injuryDetails: data.get('injuryDetails'),
            role: data.get('role'),
            email: user.email
        };

        if (type === 'Shahid' || type === 'Injured') {
            content.date = data.get('date');
        }

        try {
            const response = await axios.post('http://localhost:4000/post', content, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            console.log(response.data);
            Swal.fire('Success', 'Post created successfully', 'success');
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'Failed to create post', 'error');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#12502b] to-[#460303] p-4 sm:p-8">
            <div className="bg-gradient-to-r from-[#08361a] to-[#3b0404] shadow-lg rounded-lg overflow-hidden w-full max-w-2xl p-6">
                <h1 className="text-2xl font-bold mb-4">নতুন পোস্ট করুন</h1>
                <form onSubmit={handlePost} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">টাইপ</label>
                        <select
                            name="type"
                            onChange={(e) => setType(e.target.value)}
                            className="mt-1 block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required














                            
                        >
                            <option value="">একটি টাইপ নির্বাচন করুন</option>
                            <option value="Shahid">শহীদ</option>
                            <option value="Injured">আহত</option>
                            <option value="Coordinator">সমন্বয়ক</option>
                            <option value="Key Contributor">মূল ভূমিকা পালনকারী</option>
                        </select>
                    </div>
                    {type && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">নাম</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="নাম"
                                    className="mt-1 block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring text-white focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">বয়স</label>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="বয়স"
                                    className="mt-1 text-white block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            {(type === 'Shahid' || type === 'Injured') && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">
                                        {type === 'Shahid' ? 'শহীদ হবার তারিখ' : 'আঘাতের তারিখ'}
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="mt-1 text-white block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-gray-300">বায়ো</label>
                                <textarea
                                    name="bio"
                                    placeholder={`শর্ট বায়ো (${type})`}
                                    className="mt-1 text-white block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">ইমেজ ইউআরএল</label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="ইমেজ ইউআরএল"
                                    className="mt-1 text-white block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">জেলা</label>
                                <input
                                    type="text"
                                    name="district"
                                    placeholder="জেলা"
                                    className="mt-1 text-white block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300">লিঙ্গ</label>
                                <select
                                    name="gender"
                                    className="mt-1 text-white block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                >
                                    <option value="">লিঙ্গ নির্বাচন করুন</option>
                                    <option value="পুরুষ">পুরুষ</option>
                                    <option value="নারী">নারী</option>
                                </select>
                            </div>
                            {type === 'Injured' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">আঘাতের বিস্তারিত</label>
                                    <textarea
                                        name="injuryDetails"
                                        placeholder="আঘাতের বিস্তারিত"
                                        className="mt-1 block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        rows="4"
                                    />
                                </div>
                            )}
                            {type === 'Coordinator' || type === 'Key Contributor' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">ভূমিকা</label>
                                    <input
                                        type="text"
                                        name="role"
                                        placeholder="ভূমিকা"
                                        className="mt-1 block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            )}
                        </>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 bg-blue-800 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            জমা দিন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostContent;
