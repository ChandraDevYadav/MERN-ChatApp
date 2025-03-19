import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Loader, ArrowLeft } from "lucide-react";
import { toast } from "react-hot-toast";

const UserDetailPage = () => {
    const { id } = useParams(); // Get user ID from URL
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5001/api/users/${id}`); // Fetch user data
                setUser(data);
            } catch (error) {
                toast.error("User not found!");
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetail();
    }, [id]);

    if (loading)
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="size-10 animate-spin" />
            </div>
        );

    if (!user)
        return (
            <div className="text-center mt-10">
                <h2 className="text-2xl font-bold">User Not Found</h2>
                <Link to="/dashboard" className="text-blue-500 underline">
                    Go Back
                </Link>
            </div>
        );

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <Link to="/dashboard" className="flex items-center text-blue-500 mb-4">
                <ArrowLeft className="mr-2" /> Back to Dashboard
            </Link>

            <div className="flex flex-col items-center">
                <img
                    src={user.profilePic || "https://via.placeholder.com/100"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
                />
                <h2 className="text-2xl font-semibold">{user.fullName}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500 mt-2">
                    Joined: {new Date(user.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default UserDetailPage;
