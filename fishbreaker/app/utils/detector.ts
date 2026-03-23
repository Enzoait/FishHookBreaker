export function detectPhishing(file: File): Promise<{ isPhishing: boolean; confidence: number }> {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // Simple heuristic: if the file name contains "phishing", it's likely a phishing attempt
      const isPhishing = file.name.toLowerCase().includes("phishing");
      const confidence = isPhishing ? 0.95 : 0.05; // High confidence for phishing, low otherwise
      resolve({ isPhishing, confidence });
    }, 2000); // Simulate a 2-second processing time
  });
}