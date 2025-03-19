import User from "../models/user.model.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "fullName email profilePic createdAt"); // Fetch only necessary fields
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const searchUsers = async (req, res) => {
  try {
    const { gender, lookingFor, minAge, maxAge, city } = req.query;
    let query = {};

    if (gender) query.gender = gender;
    if (lookingFor) query.lookingFor = lookingFor;
    if (city) query.city = city;

    if (minAge && maxAge) {
      const minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - maxAge);
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() - minAge);

      query.birthday = { $gte: minDate, $lte: maxDate };
    }

    console.log("Search Query:", query); // Log the query

    const users = await User.find(query).select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error("Search API Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
