import SendSVG from "./SVGs/SendSVG.tsx";

export default function SendButton() {
  return (
    <div>
      <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
        <span className="mr-2">
          <SendSVG />
        </span>
        <span>Send</span>
      </button>
    </div>
  );
}
