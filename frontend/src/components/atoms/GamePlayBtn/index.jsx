{
  /* 
        최초 작성자: 최정온
        수정 작성자: 최정온
        최초 작성일: 23.01.29
        수정 작성일: 23.01.30
        
        Ver 1.0.0
        
- 사용 예시:
<GamePlayBtn
text="버튼 이름"
color="버튼 색깔"
onClick={() => console.log("Clicked")}
/> 

- 버튼 색깔
default="blue"
종류: "white, pink, blue, yellow emerald"
*/
}

function GamePlayBtn({ text, color, onClick }) {
  if (color === "white") {
    return (
      <button
        className="font-chick flex justify-center items-center w-[439px] h-[75px] absolute left-5 top-5 overflow-hidden gap-1 px-16 py-5 rounded-[30px] bg-white"
        style={{ boxShadow: "0px 1px 3px 0 rgba(0,0,0,0.45)" }}
        onClick={onClick}
      >
        <p className="flex-grow-0 flex-shrink-0 w-[209.87px] text-[28px] text-center text-black/[0.66]">
          {text}
        </p>
      </button>
    );
  } else if (color === "pink") {
    return (
      <button
        className="font-chick flex justify-center items-center w-[439px] h-[75px] absolute left-5 top-5 overflow-hidden gap-1 px-16 py-5 rounded-[30px] bg-[#ffcadf]"
        style={{ boxShadow: "0px 1px 3px 0 rgba(0,0,0,0.45)" }}
        onClick={onClick}
      >
        <p className="flex-grow-0 flex-shrink-0 w-[209.87px] text-[28px] text-center text-black/[0.66]">
          {text}
        </p>
      </button>
    );
  } else if (color === "yellow") {
    return (
      <button
        className="font-chick flex justify-center items-center w-[439px] h-[75px] absolute left-5 top-5 overflow-hidden gap-1 px-16 py-5 rounded-[30px] bg-[#fdffb6]"
        style={{ boxShadow: "0px 1px 3px 0 rgba(0,0,0,0.45)" }}
        onClick={onClick}
      >
        <p className="flex-grow-0 flex-shrink-0 w-[209.87px] text-[28px] text-center text-black/[0.66]">
          {text}
        </p>
      </button>
    );
  } else if (color === "emerald") {
    return (
      <button
        className="font-chick flex justify-center items-center w-[439px] h-[75px] absolute left-5 top-5 overflow-hidden gap-1 px-16 py-5 rounded-[30px] bg-[#b2e9de]"
        style={{ boxShadow: "0px 1px 3px 0 rgba(0,0,0,0.45)" }}
        onClick={onClick}
      >
        <p className="flex-grow-0 flex-shrink-0 w-[209.87px] text-[28px] text-center text-black/[0.66]">
          {text}
        </p>
      </button>
    );
  } else if (color === "blue") {
    return (
      <button
        className="font-chick flex justify-center items-center w-[439px] h-[75px] absolute left-5 top-5 overflow-hidden gap-1 px-16 py-5 rounded-[30px] bg-[#6bb8ff]"
        style={{ boxShadow: "0px 1px 3px 0 rgba(0,0,0,0.45)" }}
        onClick={onClick}
      >
        <p className="flex-grow-0 flex-shrink-0 w-[209.87px] text-[28px] text-center text-black/[0.66]">
          {text}
        </p>
      </button>
    );
  } else {
    return (
      <button
        className="font-chick flex justify-center items-center w-[439px] h-[75px] absolute left-5 top-5 overflow-hidden gap-1 px-16 py-5 rounded-[30px] bg-[#6bb8ff]"
        style={{ boxShadow: "0px 1px 3px 0 rgba(0,0,0,0.45)" }}
        onClick={onClick}
      >
        <p className="flex-grow-0 flex-shrink-0 w-[209.87px] text-[28px] text-center text-black/[0.66]">
          {text}
        </p>
      </button>
    );
  }
}

export default GamePlayBtn;