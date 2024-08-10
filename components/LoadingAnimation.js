export default function LoadingAnimation() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <div id="splash">
        <div id="splash_logo">
          <img
            src="/assets/images/machiya_logo_transparent.png"
            alt="Loading Logo"
            className="fadeUp"
          />
        </div>
      </div>
    </div>
  );
}
