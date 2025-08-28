import { TextareaAudioRecorder } from "@bmariano/audio-transcriber";
import "@bmariano/audio-transcriber/dist/styles.css";

import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <TextareaAudioRecorder textareaId="textarea" />

        <textarea 
          id="textarea" 
          className={styles.textarea}
          placeholder="Escribe aquí o usa el grabador de audio..."
          rows={8}
        />
      </div>
    </main>
  );
}
