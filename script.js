let speech = new SpeechSynthesisUtterance();

// let voice=[];
// let voiceSelect =document.querySelector("select");

// window.speechSynthesis.onvoiceschanged=()=>{
//     voice=window.speechSynthesis.getVoices();

// voice.forEach((voice,i)=>(voiceSelect.options[i])=new Option(voice.name,i))
// };

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});