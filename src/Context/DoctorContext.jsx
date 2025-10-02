// src/Context/DoctorContext.jsx
import { createContext, useContext, useState } from "react";

// 1. Create context object
export const DoctorContext = createContext();

// 2. Create provider component
export const DoctorProvider = ({ children }) => {
  const [bookmarkedDoctors, setBookmarkedDoctors] = useState([]);

  // Add doctor to bookmarks (avoid duplicates)
  const addBookmark = (doctor) => {
    setBookmarkedDoctors((prev) => {
      if (prev.find((d) => d.id === doctor.id)) return prev;
      return [...prev, doctor];
    });
  };

  // Remove doctor from bookmarks
  const removeBookmark = (id) => {
    setBookmarkedDoctors((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DoctorContext.Provider
      value={{ bookmarkedDoctors, addBookmark, removeBookmark }}
    >
      {children} {/* Everything wrapped inside provider */}
    </DoctorContext.Provider>
  );
};

// 3. Custom hook for easier usage
export const useDoctor = () => useContext(DoctorContext);
