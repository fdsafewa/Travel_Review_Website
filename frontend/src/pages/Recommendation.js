import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Recommendation.css';

const Recommendation = () => {
  const { user_id } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const logUserId = async () => {
      try {
        await axios.post('http://localhost:8000/api/log', { user_id });
      } catch (error) {
        console.error('Error logging user ID:', error);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/recommendation/calculateByName/${user_id}`);
        setRecommendations(response.data.recommendations);
      } catch (error) {
        setError('Error fetching recommendations.');
        console.error('Error fetching recommendations:', error);
      }
    };

    logUserId();
    fetchRecommendations();
  }, [user_id]);

  return (
    <div>
      <header>
        <section style={{ backgroundImage: "url('pic/breadcrumbs/bg-1.jpg')" }} className="breadcrumbs">
          <div className="container">
            <div className="text-left breadcrumbs-item">
              <h2><span>Recommendation</span> List</h2>
            </div>
          </div>
        </section>
      </header>
      <div className="content-body">
        <div className="container page">
          <div className="row">
            <div className="col-md-8">
              {error && <p>{error}</p>}
              {recommendations.length > 0 ? (
                recommendations.map((recommendation, index) => (
                  <div className="recom-item border" key={index}>
                    <div className="recom-media"><a href={`place-details/${recommendation}`}>
                        <div className="pic"><img src={`pic/recomended/${index + 1}.jpg`} alt={recommendation} /></div></a>
                      <div className="location"><i className="flaticon-suntour-map"></i> {recommendation}</div>
                    </div>
                    <div className="recom-item-body"><a href={`place-details/${recommendation}`}>
                        <h6 className="blog-title">{recommendation}</h6></a>
                      <div className="stars stars-4"></div>
                      <div className="recom-price"><span className="font-4">$90</span> per night</div>
                      <p className="mb-30">Quisque egestas a est in convallis. Maecenas pellentesque.</p><a href={`place-details/${recommendation}`} className="recom-button">Read more</a><a href={`place-details/${recommendation}`} className="cws-button small alt">Book now</a>
                      <div className="action font-2">20%</div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No recommendations found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="scroll-top"><i className="fa fa-angle-up"></i></div>
    </div>
  );
};

export default Recommendation;
