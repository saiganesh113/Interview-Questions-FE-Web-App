import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from 'chart.js/auto';

function UserReview() {
  const location = useLocation();
  const [review, setReview] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setCorrectCount(parseInt(searchParams.get('correctCount')) || 0);
    setIncorrectCount(parseInt(searchParams.get('incorrectCount')) || 0);
  }, [location.search]);

  useEffect(() => {
    const ctx = document.getElementById('pieChart');
  
    
    if (ctx) {
      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }
  
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Correct Answers', 'Incorrect Answers'],
          datasets: [
            {
              data: [correctCount, incorrectCount],
              backgroundColor: ['#36A2EB', '#FF6384'],
            },
          ],
        },
      });
    }
  }, [correctCount, incorrectCount]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Enter your review..."
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>
      <h1>Please Review Here !!!</h1>
      <p>Correct Answers: {correctCount}</p>
      <p>Incorrect Answers: {incorrectCount}</p>
      <canvas id="pieChart" width={50} height={50}></canvas>
    </div>
  );
}

export default UserReview;
