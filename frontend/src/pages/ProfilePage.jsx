import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Home, Heart } from "lucide-react";

const ProfilePage = () => {
    const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
    const [selectedImg, setSelectedImg] = useState(null);
    const [maritalStatus, setMaritalStatus] = useState(authUser?.maritalStatus || "Single");
    const [city, setCity] = useState(authUser?.city || "");

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
            const base64Image = reader.result;
            setSelectedImg(base64Image);
            await updateProfile({ profilePic: base64Image });
        };
    };

    const handleUpdateProfile = async () => {
        await updateProfile({ maritalStatus, city });
    };

    return (
        <div className="h-screen pt-20">
            <div className="max-w-2xl mx-auto p-4 py-8">
                <div className="bg-base-300 rounded-xl p-6 space-y-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">Profile</h1>
                        <p className="mt-2">Your profile information</p>
                    </div>

                    {/* Avatar Upload Section */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <img
                                src={selectedImg || authUser.profilePic || "/avatar.png"}
                                alt="Profile"
                                className="size-32 rounded-full object-cover border-4"
                            />
                            <label htmlFor="avatar-upload" className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}>
                                <Camera className="w-5 h-5 text-base-200" />
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={isUpdatingProfile}
                                />
                            </label>
                        </div>
                        <p className="text-sm text-zinc-400">{isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}</p>
                    </div>

                    {/* Personal Info */}
                    <div className="space-y-6">
                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Full Name
                            </div>
                            <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.fullName}</p>
                        </div>

                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email Address
                            </div>
                            <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email}</p>
                        </div>

                        {/* Marital Status */}
                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <Heart className="w-4 h-4" />
                                Marital Status
                            </div>
                            <select
                                className="w-full px-4 py-2.5 bg-base-200 rounded-lg border"
                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                            >
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                            </select>
                        </div>

                        {/* City */}
                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <Home className="w-4 h-4" />
                                City
                            </div>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-base-200 rounded-lg border"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Enter your city"
                            />
                        </div>
                    </div>

                    {/* Update Button */}
                    <button
                        onClick={handleUpdateProfile}
                        className={`w-full mt-4 py-2 bg-blue-500 text-white rounded-lg transition-all ${isUpdatingProfile ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
                        disabled={isUpdatingProfile}
                    >
                        {isUpdatingProfile ? "Updating..." : "Update Profile"}
                    </button>

                    {/* Account Information */}
                    <div className="mt-6 bg-base-300 rounded-xl p-6">
                        <h2 className="text-lg font-medium mb-4">Account Information</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                                <span>Member Since</span>
                                <span>{authUser.createdAt?.split("T")[0]}</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span>Account Status</span>
                                <span className="text-green-500">Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;
