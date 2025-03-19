import { useState } from "react";
import axios from "axios";

const SearchUsers = () => {
    const [gender, setGender] = useState("");
    const [lookingFor, setLookingFor] = useState("");
    const [minAge, setMinAge] = useState("");
    const [maxAge, setMaxAge] = useState("");
    const [city, setCity] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const params = {
                gender,
                lookingFor,
                minAge: minAge || undefined,
                maxAge: maxAge || undefined,
                city: city || undefined
            };

            console.log("Search Params:", params); // Log search params
            const response = await axios.get("http://localhost:5001/api/users/search", { params });
            setResults(response.data);
        } catch (error) {
            console.error("Search failed:", error);
        }
    };


    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold">Search Users</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="border p-2 rounded">
                    <option value="">I am...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <select value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} className="border p-2 rounded">
                    <option value="">Looking for...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <input type="number" placeholder="Min Age" value={minAge} onChange={(e) => setMinAge(e.target.value)} className="border p-2 rounded" />
                <input type="number" placeholder="Max Age" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} className="border p-2 rounded" />

                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="border p-2 rounded col-span-2" />

                <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded col-span-2">Search</button>
            </div>

            <div className="mt-6">
                {results.length > 0 ? (
                    <ul className="space-y-2">
                        {results.map((user) => (
                            <li key={user._id} className="border p-2 rounded">
                                {user.fullName} - {user.city} - {user.gender}, Looking for {user.lookingFor}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 mt-4">No users found</p>
                )}
            </div>
        </div>
    );
};

export default SearchUsers;
