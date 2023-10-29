export default function Footer(props) {
  return (
    <div>
      <div className="row fixed-bottom">
        {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-dark" href="https://github.com/jsndz">
          Visit My GitHub
        </a>
      </div>
      {/* Copyright */}
      </div>
    </div>
  );
}