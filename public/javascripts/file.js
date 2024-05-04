document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("file").click();
})

const btn = document.getElementById('btn3');
const recordingTimeDisplay = document.getElementById('recording-time');

let isRecording = false; // Flag to track recording state
let startTime; // Stores recording start time
let intervalId; // Holds the interval for updating time

btn.addEventListener('click', async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Your browser does not support audio recording.');
    return;
  }

  if (isRecording) {
    // Stop recording if already recording
    stopRecording();
  } else {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Handle the recorded audio stream
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' }); // Adjust format as needed

        // Handle the recorded audio blob after stopping
        console.log('Recorded audio blob:', blob); // Placeholder for your logic
      };

      mediaRecorder.start();
      isRecording = true;
      startTime = Date.now();
      intervalId = setInterval(updateRecordingTime, 1000); // Update time every second
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Failed to access microphone. Please check permissions and try again.');
    }
  }
});

function stopRecording() {
  mediaRecorder.stop();
  isRecording = false;
  clearInterval(intervalId);
  recordingTimeDisplay.textContent = '00:00:00'; // Reset time display on stop
}

function updateRecordingTime() {
  if (!isRecording) {
    return; // Don't update time if not recording
  }

  const elapsedTime = (Date.now() - startTime) / 1000;
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = Math.floor(elapsedTime % 60);

  recordingTimeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
