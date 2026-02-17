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

    // Log all available voices for debugging (especially useful in Firefox)
    console.log("Available voices:");
    voices.forEach((voice, index) => {
      console.log(`${index}: ${voice.name} (${voice.lang})`);
    });

    // Prioritize Indonesian voices with specific locale codes
    this.voice =
      voices.find((v) => v.lang === "id-ID") || // Indonesian (Indonesia)
      voices.find((v) => v.lang.startsWith("id-")) || // Any Indonesian variant
      voices.find((v) => v.lang.startsWith("id")) || // Fallback to id
      voices.find((v) => v.lang === "ms-MY") || // Malay (similar to Indonesian)
      voices.find((v) => v.name.toLowerCase().includes("indonesia")) || // Search by name
      voices.find((v) => v.name.toLowerCase().includes("malay")) || // Search Malay by name
      voices[0]; // Last resort fallback

    // Log selected voice for debugging
    if (this.voice) {
      console.log("✓ Voice selected:", this.voice.name, "-", this.voice.lang);
    } else {
      console.warn("⚠ No voice found, using default");
    }
  }

  // Get list of available voices
  getAvailableVoices() {
    return this.synthesis.getVoices();
  }

  // Manually set voice by index or name
  setVoice(voiceIndexOrName) {
    const voices = this.synthesis.getVoices();
    if (typeof voiceIndexOrName === "number") {
      this.voice = voices[voiceIndexOrName];
    } else {
      this.voice = voices.find((v) => v.name === voiceIndexOrName);
    }
    console.log("Voice changed to:", this.voice?.name, "-", this.voice?.lang);
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
