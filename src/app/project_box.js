export default function Project_box() {
  return (
    <>
      <main className="grid grid-cols-3 w-full h-144 p-16 border-solid border-2 border-black">
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </main>
    </>
  );
}

function Project() {
  return (
    <>
      <div className="w-80 h-80 border-solid border-2 border-black"></div>
    </>
  );
}
