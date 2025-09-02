import { useNavigate } from "react-router-dom";

export default function ScrollLink({ to, children, ...props }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const [path, hash] = to.split("#");

    if (window.location.pathname !== path) {
      // Navigate to the main page with hash
      navigate(path + (hash ? "#" + hash : ""));
    } else if (hash) {
      // If we are already on the page, scroll smoothly
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
