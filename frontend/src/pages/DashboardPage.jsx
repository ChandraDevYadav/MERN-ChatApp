import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Loader } from "lucide-react";
import { toast } from "react-hot-toast";
import HeroSection from "../components/Home/HeroSection";
import HowItWork from "../components/Home/HowItWork";
import PopMember from "../components/Home/PopMembers";
import SuccessStories from "../components/Home/SuccessStories";
import SearchSect from "../components/Home/SearchSect";
import WhyUs from "../components/Home/WhyUs";
import AvailableOn from "../components/Home/AvailableOn";
import CommunityFooter from "../components/Home/CommunityFooter";
import MainFooter from "../components/Home/MainFooter";
import CopyRight from "../components/Home/CopyRight";
import About from "../components/Home/About";
import SearchUsers from "../components/SearchUsers";

const DashboardPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get("http://localhost:5001/api/users");
                setUsers(data);
            } catch (error) {
                toast.error("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading)
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="size-10 animate-spin" />
            </div>
        );

    return (
        <div className="mt-16">
            <div>
                <HeroSection />
                {/* <SearchUsers /> */}
                <About />
                <HowItWork />
                <PopMember />
                <SuccessStories />
                <SearchSect />
                <WhyUs />
                <AvailableOn />
                <CommunityFooter />
                <MainFooter />
                <CopyRight />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <Link
                        key={user._id}
                        to={`/users/${user._id}`} // Clicking card takes user to their detail page
                        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition-all"
                    >
                        <img
                            src={user.profilePic || "https://via.placeholder.com/100"}
                            alt="Profile"
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        <h2 className="text-lg font-semibold">{user.fullName}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-600">{user.gender}</p>
                        <p className="text-gray-600">{user.birthday}</p>
                        <p className="text-gray-600">{user.lookingFor}</p>
                        <p className="text-gray-600">{user.maritalStatus}</p>
                        <p className="text-gray-600">{user.city}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Joined: {new Date(user.createdAt).toLocaleDateString()}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
