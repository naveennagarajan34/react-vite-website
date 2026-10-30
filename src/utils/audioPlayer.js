// Auspicious Indian Wedding Tanpura & Shehnai Synthesizer via Web Audio API
class WeddingAudioPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.gainNodes = [];
    this.intervalId = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // Master Volume
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    masterGain.connect(this.ctx.destination);
    this.masterGain = masterGain;

    // Root Note: C#3 (approx 138.59 Hz) - Traditional auspicious South Indian shruti
    const rootFreq = 138.59;
    // Notes of Raga Kalyani / Yaman: Sa, Ga, Pa, Ni (Auspicious wedding raga)
    const droneFreqs = [rootFreq, rootFreq * 1.5, rootFreq * 2]; // Sa, Pa, Sa(high)

    droneFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx === 0 ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Low pass filter to create warm tanpura acoustic resonance
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start();
      this.oscillators.push(osc);
      this.gainNodes.push(gain);
    });

    // Gentle Auspicious Flute/Shehnai Arpeggio Notes (Sa, Re, Ga, Pa, Dha, Ni)
    const scale = [
      rootFreq * 2,       // Sa
      rootFreq * 2.25,    // Ri
      rootFreq * 2.5,     // Ga
      rootFreq * 2.81,    // Ma (tivra)
      rootFreq * 3.0,     // Pa
      rootFreq * 3.375,   // Dha
      rootFreq * 3.75,    // Ni
      rootFreq * 4.0      // Sa high
    ];

    let noteIndex = 0;
    this.intervalId = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime;

        const freq = scale[noteIndex % scale.length];
        noteIndex = (noteIndex + Math.floor(Math.random() * 3) + 1) % scale.length;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.04, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 1.9);
      } catch (err) {
        console.warn('Audio note play error', err);
      }
    }, 1200);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    this.oscillators = [];
    this.gainNodes = [];
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();
