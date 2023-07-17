import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const SearchHandler = () => {
  let news = useLocation();
  const navigate = useNavigate();
  function test() {
    sessionStorage.removeItem("userSearch");
    return navigate("/search", {
      state: { query: news.state.query },
    });
  }

  useEffect(() => {
    test();
  });
};
