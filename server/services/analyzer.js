function analyze(history) {
  // Example stub: basic stats on history array of {input, prediction}
  if (!Array.isArray(history) || history.length === 0) return {};
  const predictions = history.map(h => h.prediction);
  return {
    count: predictions.length,
    avg: predictions.reduce((a, b) => a + b, 0) / predictions.length,
    min: Math.min(...predictions),
    max: Math.max(...predictions),
  };
}

module.exports = { analyze };
