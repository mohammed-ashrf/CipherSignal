// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod binary;
mod morse;


fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      binary::binary_to_text,
      binary::text_to_binary,
      morse::morse_to_text,
      morse::text_to_morse
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
