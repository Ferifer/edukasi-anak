// Audio utility using Web Speech API for text-to-speech
class AudioService {
  constructor() {
    this.enabled = localStorage.getItem("soundEnabled") !== "false";
    this.synthesis = window.speechSynthesis;
    this.voice = null;
    this.initVoice();
  }

  initVoice() {
    // Wait for voices to be loaded
    if (this.synthesis.getVoices().length > 0) {
      this.setIndonesianVoice();
    } else {
      this.synthesis.addEventListener("voiceschanged", () => {
        this.setIndonesianVoice();
      });
    }
  }

  setIndonesianVoice() {
    const voices = this.synthesis.getVoices();
    // Try to find Indonesian voice, fallback to English or default
    this.voice =
      voices.find((v) => v.lang.startsWith("id")) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0];
  }

  speak(text, options = {}) {
    if (!this.enabled) return;

    // Cancel any ongoing speech
    this.synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = this.voice;
    utterance.rate = options.rate || 0.9; // Slightly slower for kids
    utterance.pitch = options.pitch || 1.1; // Slightly higher pitch for kids
    utterance.volume = options.volume || 1;

    this.synthesis.speak(utterance);
  }

  playLetterSound(letter, word) {
    this.speak(`${letter}. ${word}`, { rate: 0.8 });
  }

  playNumberSound(number, word) {
    this.speak(`${number}. ${word}`, { rate: 0.8 });
  }

  playAnimalSound(name, sound) {
    this.speak(`${name}. ${sound}`, { rate: 0.85 });
  }

  playCorrectSound() {
    this.speak("Pintar! Benar!", { rate: 1, pitch: 1.3 });
  }

  playWrongSound() {
    this.speak("Coba lagi ya!", { rate: 0.9 });
  }

  playWelcome() {
    this.speak("Halo! Ayo belajar sambil bermain!", { rate: 0.9 });
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("soundEnabled", this.enabled);
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }

  stop() {
    this.synthesis.cancel();
  }
}

// Create singleton instance
const audioService = new AudioService();

export default audioService;
