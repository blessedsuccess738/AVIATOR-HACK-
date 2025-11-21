document.getElementById('predict-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('input').value;
  const res = await fetch('/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input })
  });
  const { prediction } = await res.json();
  document.getElementById('result').textContent = `Prediction: ${prediction}`;
});
