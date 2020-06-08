// Get apiKey from https://www.yelp.com/developers/v3/manage_app;
const apiKey = 'h84qWTzIIzGRXh5Km229_BFM7jZIU6DrMli_npa8Doefe8LrMejx_5tGRogeW2hq2W_wtM6hkzTrLF70nT7NDkcqT_4rsE69IPRIHhbBvV45dITfCtre82Cc0DtQXHYx';

const yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {       
      headers: { 
        Authorization: `Bearer ${apiKey}`
      },

    }).then( (res) => {
      return res.json();

    }).then( (jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(( (business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        }));
      }
    })
  }
};

export default yelp;

