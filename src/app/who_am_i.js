export default function WhoAmI() {
  return (
    <>
      <main className="w-full h-96 p-16 border-solid border-2 border-black">
        <div className="w-52 h-full border-solid border-2 border-black float-left">
          (클릭시 떨어지는 효과)
          <h1>WHO AM I</h1>
          <button>view more</button>
          <button>git hub</button>
        </div>
        <div className="flex flex-col flex-auto h-full order-solid border-2 border-purple-500">
          <div className="w-full flex-auto h-1/4 border-solid border-2 border-black">
            <h1>첫번 째 프로필</h1>
          </div>
          <div className="w-full flex-auto h-1/4 border-solid border-2 border-black ">
            <h1>첫번 째 프로필</h1>
          </div>
          <div className="w-full flex-auto h-1/4 border-solid border-2 border-black ">
            <h1>첫번 째 프로필</h1>
          </div>
          <div className="w-full flex-auto h-1/4 border-solid border-2 border-black ">
            <h1>첫번 째 프로필</h1>
          </div>
        </div>
      </main>
    </>
  );
}
