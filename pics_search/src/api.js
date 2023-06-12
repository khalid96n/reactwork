import axios from "axios";

const searchImages=async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{

    headers:{

        Authorization: 'Client-ID vnTGwIgDy02Ih35KkmkYi-2n51qDM3ruW9ijqD0-5OE'
    },

    params:{
        query: term,
    }

    });


    return response.data.results;
};

export default searchImages;