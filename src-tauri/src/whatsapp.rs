use url::form_urlencoded;
use webbrowser;

#[tauri::command]
pub fn send_via_whatsapp(phone_number: String, message: String) -> Result<(), String> {
    // URL-encode the message
    let encoded_message = form_urlencoded::byte_serialize(message.as_bytes()).collect::<String>();
    print!("{}", phone_number);
    // Construct the WhatsApp URL
    let url = format!("https://api.whatsapp.com/send?phone={}&text={}", phone_number, encoded_message);

    // Open the URL in the default browser using webbrowser crate
    if webbrowser::open(&url).is_ok() {
        Ok(())
    } else {
        Err("Failed to open URL".into())
    }
}