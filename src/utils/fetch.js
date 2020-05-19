import axios from 'axios'

export const searchBuilding = async (text, option) =>  {
  const data = await axios.get(
    `https://us-central1-fir-resident-restapi.cloudfunctions.net/app/api/building`
  );
  const filterType = await data.data.filter((item) => {
    return item.type == option;
  });
  const matched = await filterType.filter((item) => {
    return item.name.toLowerCase().includes(text);
  });

  return matched
}

export const getBuilding = async(id) => {
  const data = await axios.get(
    `https://us-central1-fir-resident-restapi.cloudfunctions.net/app/api/building/${id}`
  )
  return data
}