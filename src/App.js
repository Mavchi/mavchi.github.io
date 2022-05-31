


const App = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12"
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Google_Chat_icon_%282020%29.svg"
            alt="logo"
        />
      </div>
      <div>
        <h4 className="text-xl font-medium text-black">ChitChat</h4>
        <p className="text-slate-500">You have a new message</p>
      </div>
    </div>
  )
}

export default App;
