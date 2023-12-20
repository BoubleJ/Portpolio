import LightbulbIcon from "@mui/icons-material/Lightbulb";

export default function Header() {
  const Menu = [
    "Who Am I",
    "Skills",
    "Project",
    "Experience & Education",
    "Contact",
  ];

  return (
    <>
      <div className="h-28 bg-yellow-300 w-full">
        <div className="flex justify-evenly">
          {Menu.map((val, idx) => {
            return (
              <div key={idx} className="my-3">
                <h4>{val}</h4>
                <LightbulbIcon
                  key={idx}
                  color="secondary"
                  style={{ fontSize: "5rem" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
