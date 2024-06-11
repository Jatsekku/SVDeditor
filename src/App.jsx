import "./App.css";
import { invoke } from '@tauri-apps/api/tauri'
import { message, open } from "@tauri-apps/api/dialog"

async function pickFile() {
	const selectedPath = await open({
		multiple: false,
		title: "Select SVD file",
	})
	invoke('parse_svd_file', { path: selectedPath}).then((message) => console.log(message))
}

function App() {
  return (
    <button onClick={pickFile}>Hello world!</button>
  );
}

export default App;
