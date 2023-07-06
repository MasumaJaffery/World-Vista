const appId = 'FjhFMUdws0lCxR3eXCdS';
const getReservationCount = async (itemId, formContainer) => {
      let countervalue = 0; 
      const getResponse = await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations?item_id=${itemId}`
      );
      if (getResponse.ok) {
        const events = await getResponse.json();
        events.forEach((event) => {
          countervalue = countervalue + 1;
        });
    
        return countervalue;
      }
      return 0;
    };

export default getReservationCount;