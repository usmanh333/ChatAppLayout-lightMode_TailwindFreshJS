import ActiveUsers from "./ActiveUsers.tsx";
import ChatMessages from "./ChatMessages.tsx";
import ProfileHeader from "./ProfileHeader.tsx";
import ChatSVG from "./SVGs/ChatSVG.tsx";
import FileSVG from "./SVGs/FileSVG.tsx";
import SmileSVG from "./SVGs/SmileSVG.tsx";
import SendButton from "./SendButton.tsx";

export default function ChatPage() {
  return (
    <div>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div className="flex flex-row items-center justify-center h-12 w-full">
              <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <ChatSVG />
              </div>
              <div className="ml-2 font-bold text-2xl">Chat App</div>
            </div>
            <ProfileHeader />
            <ActiveUsers />
          </div>
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <ChatMessages />
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div>
                  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <FileSVG />
                  </button>
                </div>
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <SmileSVG />
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <SendButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
