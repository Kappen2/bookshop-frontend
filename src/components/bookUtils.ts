import axios from "axios";

export const fetchCoverUrlByTitle = async (title: string): Promise<string | null> => {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
    );
    const docs = response.data.docs;
    if (docs && docs.length > 0) {
      const coverId = docs[0].cover_i;
      if (coverId) {
        return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching cover URL:", error);
    return null;
  }
};
