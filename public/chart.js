window.onload = async function () {
  const res = await fetch('/history');
  const history = await res.json();
  if (!history.length) return;
  const ctx = document.getElementById('chart').getContext('2d');
  ctx.fillText('History Loaded: ' + JSON.stringify(history), 10, 10);
};
