const Button = ({ name, isBeam = false, containerClass }) => {
  // Function to scroll to the contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={`btn ${containerClass}`} onClick={handleScrollToContact}>
      {/* If isBeam is true, display a pulsing effect (used for emphasis) */}
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span> {/* Outer pulsing animation */}
          <span className="btn-ping_dot"></span>{" "}
          {/* Inner dot for visual effect */}
        </span>
      )}
      {name} {/* Display the button text */}
    </button>
  );
};

export default Button;
